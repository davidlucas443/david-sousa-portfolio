import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';

const baseURL = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:5173';
const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await chromium.launch({ executablePath, headless: true });
const routes = [
  { path: '/', heading: 'David Sousa.' },
  { path: '/projetos/emprega-co', heading: 'Emprega.co.' },
  { path: '/projetos/help-pet', heading: 'Help Pet.' },
];
const checks = [];
const errors = [];
await mkdir('.qa', { recursive: true });

try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 } });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.url().startsWith(baseURL) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route.path}`, { waitUntil: 'networkidle' });
      assert.equal(response?.status(), 200, `Acesso direto: ${route.path}`);
      await page.getByRole('heading', { level: 1, name: route.heading, exact: true }).waitFor();
      await page.evaluate(async () => {
        await document.fonts.ready;
        for (const image of document.images) {
          image.loading = 'eager';
          await image.decode();
        }
      });
      if (route.path === '/' && width === 1440) {
        assert.ok(await page.locator('svg[role="img"]').evaluate(element => element.getAnimations({ subtree: true }).some(animation => animation.playState === 'running')), 'Fluxo animado ativo sem preferência por movimento reduzido');
      }
      const geometry = await page.evaluate(() => ({
        viewport: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        images: [...document.images].map(image => ({
          src: image.getAttribute('src'), loaded: image.complete && image.naturalWidth > 0,
          width: image.getBoundingClientRect().width, height: image.getBoundingClientRect().height,
          naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight,
          objectFit: getComputedStyle(image).objectFit,
        })),
        emptyLinks: [...document.querySelectorAll('a')].filter(link => !link.getAttribute('href') || link.getAttribute('href') === '#').length,
      }));
      assert.ok(geometry.scrollWidth <= geometry.viewport, `Overflow: ${width}px ${route.path}`);
      assert.equal(geometry.emptyLinks, 0, 'Nenhum link falso');
      for (const image of geometry.images) {
        assert.ok(image.loaded && image.width > 0 && image.height > 0, `Imagem visível carregada: ${image.src}`);
        if (image.objectFit !== 'cover') {
          const ratio = image.width / image.height;
          const naturalRatio = image.naturalWidth / image.naturalHeight;
          assert.ok(Math.abs(ratio - naturalRatio) < .015, `Proporção: ${image.src}`);
        }
      }
      const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      assert.deepEqual(accessibility.violations.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(node => node.target) })), [], `Axe: ${width}px ${route.path}`);
      checks.push({ width, route: route.path, status: response.status(), geometry, axeViolations: accessibility.violations.length, axeIncomplete: accessibility.incomplete.map(item => ({ id: item.id, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) })) });
      if ([1440, 390].includes(width)) {
        await page.screenshot({ path: `.qa/${width}-${route.path === '/' ? 'home' : route.path.split('/').pop()}.png`, fullPage: true, animations: 'disabled' });
      }
    }
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Pular para o conteúdo');
  const focusOutline = await page.locator(':focus').evaluate(element => ({ style: getComputedStyle(element).outlineStyle, width: getComputedStyle(element).outlineWidth }));
  assert.notEqual(focusOutline.style, 'none');
  assert.notEqual(focusOutline.width, '0px');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator(':focus').getAttribute('id'), 'conteudo');
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Explorar projetos');
  await page.keyboard.press('Enter');
  assert.equal(new URL(page.url()).hash, '#projetos');
  const brandClip = await page.locator('img[src$="help-pet-logo.png"]').evaluateAll(images => images.map(image => {
    const bounds = image.getBoundingClientRect();
    const parent = image.parentElement.getBoundingClientRect();
    return bounds.top >= parent.top - 1 && bounds.bottom <= parent.bottom + 1;
  }));
  assert.ok(brandClip.every(Boolean), 'Marca Help Pet integralmente contida no painel');
  const motion = await page.locator('svg[role="img"] *').evaluateAll(elements => elements.map(element => getComputedStyle(element).animationName));
  assert.ok(motion.every(name => name === 'none'), 'Movimento reduzido desativa animação SVG');
  await page.getByRole('link', { name: 'Explorar projetos', exact: true }).click();
  assert.equal(new URL(page.url()).hash, '#projetos');
  await page.getByRole('link', { name: 'Explorar projeto Emprega.co' }).click();
  await page.waitForURL('**/projetos/emprega-co');
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByRole('heading', { level: 1, name: 'Emprega.co.' }).waitFor();
  await page.goBack({ waitUntil: 'networkidle' });
  assert.equal(new URL(page.url()).pathname, '/');
  await page.goForward({ waitUntil: 'networkidle' });
  assert.equal(new URL(page.url()).pathname, '/projetos/emprega-co');
  await page.getByRole('link', { name: 'Próximo projeto Help Pet' }).click();
  await page.waitForURL('**/projetos/help-pet');
  const summary = page.locator('summary').first();
  await summary.focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('details').first().getAttribute('open'), '');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('details').first().getAttribute('open'), null);
  await page.goto(`${baseURL}/caminho-inexistente`, { waitUntil: 'networkidle' });
  await page.getByRole('heading', { level: 1, name: 'Página não encontrada.' }).waitFor();
  await page.getByRole('link', { name: 'Voltar ao início' }).click();
  assert.equal(new URL(page.url()).pathname, '/');
  await context.close();
  assert.deepEqual(errors, [], 'Nenhum erro de runtime/recurso local');
  await writeFile('.qa/report.json', JSON.stringify({ baseURL, browser: browser.version(), checks, interactionChecks: ['skip link', 'visible focus', 'reduced motion', 'project links', 'direct routes', 'reload', 'back/forward', 'keyboard details', 'unknown route'], errors }, null, 2));
  console.log(`PASS: ${checks.length} combinações de rota/largura; Axe sem violações; imagens, overflow, teclado, navegação e movimento reduzido verificados. Evidências em .qa/.`);
} finally {
  await browser.close();
}
