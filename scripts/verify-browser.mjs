import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';

const baseURL = (process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:5173').replace(/\/$/, '');
const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await chromium.launch({ executablePath, headless: true });
const projects = [
  { name: 'Emprega.co', path: '/projetos/emprega-co', file: 'emprega-co.mp4' },
  { name: 'Help Pet', path: '/projetos/help-pet', file: 'helppet.mp4' },
];
const routes = ['/', ...projects.map(project => project.path)];
const checks = [];
const pageErrors = [];
const failedResources = [];
await mkdir('.qa', { recursive: true });

async function verifyExpanded(page, project, closeWithEscape = false) {
  const open = page.getByRole('button', { name: 'Ampliar vídeo do ' + project.name });
  await open.click();
  const dialog = page.getByRole('dialog', { name: 'Vídeo ampliado do ' + project.name });
  await dialog.waitFor();
  await page.waitForFunction(() => document.querySelector('dialog[open] video')?.currentTime > 0.1);
  assert.equal(await page.locator('main video').count(), page.url() === baseURL + '/' ? 2 : 1, 'Somente um vídeo montado por projeto durante a ampliação');
  const media = await dialog.locator('video').evaluate(video => ({
    playing: !video.paused, muted: video.muted, loop: video.loop, controls: video.controls,
    width: video.videoWidth, height: video.videoHeight,
    box: video.getBoundingClientRect().toJSON(),
  }));
  assert.equal(media.playing, true);
  assert.equal(media.muted, true);
  assert.equal(media.loop, true);
  assert.equal(media.controls, false);
  assert.deepEqual([media.width, media.height], [1920, 1080]);
  assert.ok(Math.abs(media.box.width / media.box.height - 16 / 9) < .015);
  if (closeWithEscape) await page.keyboard.press('Escape');
  else await dialog.getByRole('button', { name: 'Fechar vídeo do ' + project.name }).click();
  await dialog.waitFor({ state: 'hidden' });
  assert.equal(await open.evaluate(button => document.activeElement === button), true, 'Foco devolvido ao botão de ampliar');
  assert.equal(await page.locator('main video').count(), page.url() === baseURL + '/' ? 2 : 1);
}

try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    page.on('pageerror', error => pageErrors.push(error.message));
    page.on('response', response => {
      if (response.url().startsWith(baseURL) && response.status() >= 400) failedResources.push({ url: response.url(), status: response.status() });
    });
    for (const path of routes) {
      const response = await page.goto(baseURL + path, { waitUntil: 'networkidle' });
      assert.equal(response?.status(), 200);
      assert.equal(await page.locator('a[href*="localhost"], a[href*="127.0.0.1"]').count(), 0, 'Sem links locais publicados');
      const expected = path === '/' ? projects : projects.filter(project => project.path === path);
      const videos = page.locator('main video');
      assert.equal(await videos.count(), expected.length, 'Um vídeo visível por projeto');
      assert.equal(await page.locator('main img, main figcaption, main a[download]').count(), 0, 'Sem galerias, legendas ou download');
      assert.doesNotMatch(await page.locator('main').innerText(), /Vídeo cedido por|Baixar vídeo|Telas recriadas e dados de demonstração;/);
      for (const project of expected) {
        const video = page.locator('main video[src$="' + project.file + '"]');
        assert.equal(await video.count(), 1);
        const props = await video.evaluate(element => ({
          autoplay: element.autoplay, muted: element.muted, loop: element.loop, playsInline: element.playsInline,
          controls: element.controls, objectFit: getComputedStyle(element).objectFit,
          box: element.getBoundingClientRect().toJSON(),
        }));
        assert.deepEqual([props.autoplay, props.muted, props.loop, props.playsInline, props.controls], [true, true, true, true, false]);
        assert.equal(props.objectFit, 'contain');
        assert.ok(Math.abs(props.box.width / props.box.height - 16 / 9) < .015);
        assert.equal(await page.getByRole('button', { name: 'Ampliar vídeo do ' + project.name }).count(), 1);
        assert.equal(await page.getByRole('button', { name: 'Ampliar vídeo do ' + project.name }).locator('..').locator('button').count(), 1, 'Somente ampliar na prévia');
        if (path !== '/' && width === 1440) assert.ok(props.box.width <= 1040 && props.box.width >= 1000, 'Vídeo interno moderadamente ampliado');
        const button = page.getByRole('button', { name: 'Ampliar vídeo do ' + project.name });
        const buttonStyle = await button.evaluate(element => {
          const box = element.getBoundingClientRect();
          const stage = element.parentElement.getBoundingClientRect();
          const style = getComputedStyle(element);
          const icon = element.querySelector('span');
          return { width: box.width, height: box.height, right: stage.right - box.right, bottom: stage.bottom - box.bottom, background: style.backgroundColor, border: style.borderWidth, shadow: style.boxShadow, icon: icon.textContent, iconSize: getComputedStyle(icon).fontSize };
        });
        assert.deepEqual([buttonStyle.width, buttonStyle.height, buttonStyle.right, buttonStyle.bottom, buttonStyle.icon, buttonStyle.iconSize], [44, 44, 12, 12, '⛶', '20px']);
        assert.equal(buttonStyle.background, 'rgba(0, 0, 0, 0)');
        assert.equal(buttonStyle.border, '0px');
        assert.equal(buttonStyle.shadow, 'none');
      }
      if (path === '/') {
        if (width === 1440) {
          for (const [name, href] of [['GitHub', 'https://github.com/davidlucas443'], ['LinkedIn', 'https://www.linkedin.com/in/david-sousa-406808349/']]) {
            const links = page.getByRole('link', { name: new RegExp(name + '.*nova aba') });
            assert.equal(await links.count(), 2, name + ' na abertura e no contato');
            for (const link of await links.all()) {
              assert.equal(await link.getAttribute('href'), href);
              assert.equal(await link.getAttribute('target'), '_blank');
            }
          }
        }
        const cards = page.locator('article');
        for (const card of await cards.all()) {
          const positions = await card.evaluate(element => {
            const text = element.firstElementChild.getBoundingClientRect();
            const video = element.lastElementChild.getBoundingClientRect();
            return { text: text.toJSON(), video: video.toJSON() };
          });
          if (width >= 1024) {
            assert.ok(positions.text.right <= positions.video.left + 1, 'Texto à esquerda e vídeo à direita');
            assert.ok(Math.abs(positions.video.width / (positions.text.width + positions.video.width) - .55) < .005, 'Vídeo ocupa cerca de 55% do card');
          } else {
            assert.ok(positions.text.bottom <= positions.video.top + 1, 'Empilhamento em tela pequena');
          }
        }
      }
      const geometry = await page.evaluate(() => ({ viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
      assert.ok(geometry.scrollWidth <= geometry.viewport, 'Sem overflow horizontal');
      if (width === 1440) {
        await page.evaluate(() => scrollTo(0, 500));
        assert.ok(Math.abs(await page.locator('header').evaluate(element => element.getBoundingClientRect().top)) < 2, 'Header acompanha a rolagem');
        if (path !== '/') {
          await page.reload({ waitUntil: 'networkidle' });
          assert.equal(new URL(page.url()).pathname, path, 'Recarga direta mantém a rota interna');
          await page.getByRole('heading', { level: 1, name: path === '/projetos/emprega-co' ? 'Emprega.co.' : 'Help Pet.' }).waitFor();
        }
      }
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      assert.deepEqual(axe.violations.map(item => item.id), [], 'Axe sem violações');
      checks.push({ width, path, geometry, axeViolations: axe.violations.length });
      if (width === 1440 || width === 390 || (width === 1024 && path === '/')) {
        await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
        await page.screenshot({ path: '.qa/' + width + '-' + (path === '/' ? 'home' : path.split('/').pop()) + '.png', fullPage: true, animations: 'disabled' });
      }
    }
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  for (const project of projects) {
    const media = await page.request.get(baseURL + '/media/' + project.file);
    assert.equal(media.status(), 200);
    assert.match(media.headers()['content-type'], /^video\/mp4/);
    const poster = await page.request.get(baseURL + '/media/' + project.file.replace('.mp4', '-poster.webp'));
    assert.equal(poster.status(), 200);
    assert.match(poster.headers()['content-type'], /^image\/webp/);
  }
  for (const project of projects) {
    const video = page.locator('main video[src$="' + project.file + '"]');
    await page.waitForFunction(file => [...document.querySelectorAll('main video')].some(element => element.src.endsWith(file) && element.currentTime > .1), project.file);
    assert.equal(await video.evaluate(element => element.paused), false, 'Autoplay ativo');
    await video.evaluate(element => { element.currentTime = element.duration - .15; });
    await page.waitForFunction(file => [...document.querySelectorAll('main video')].some(element => element.src.endsWith(file) && element.currentTime < 1 && !element.paused), project.file);
    await verifyExpanded(page, project, project.name === 'Help Pet');
    await page.waitForFunction(file => [...document.querySelectorAll('main video')].some(element => element.src.endsWith(file) && element.currentTime > .1 && !element.paused), project.file);
  }
  for (const project of projects) {
    await page.goto(baseURL + project.path, { waitUntil: 'networkidle' });
    await verifyExpanded(page, project, true);
  }
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const keyboardButton = page.getByRole('button', { name: 'Ampliar vídeo do Emprega.co' });
  await keyboardButton.focus();
  assert.notEqual(await keyboardButton.evaluate(element => getComputedStyle(element).outlineStyle), 'none');
  await page.keyboard.press('Enter');
  await page.getByRole('dialog', { name: 'Vídeo ampliado do Emprega.co' }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Fechar vídeo do Emprega.co' }).evaluate(element => document.activeElement === element), true);
  await page.keyboard.press('Escape');
  assert.equal(await keyboardButton.evaluate(element => document.activeElement === element), true);
  await context.close();

  const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce', isMobile: true, hasTouch: true });
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(baseURL, { waitUntil: 'networkidle' });
  for (const project of projects) {
    const button = reducedPage.getByRole('button', { name: 'Ampliar vídeo do ' + project.name });
    const stage = button.locator('..');
    assert.equal(await stage.locator('video').getAttribute('src'), null, 'Movimento reduzido sem carregamento automático');
    assert.match(await stage.evaluate(element => getComputedStyle(element).backgroundImage), /poster\.webp/);
    await button.tap();
    const dialog = reducedPage.getByRole('dialog', { name: 'Vídeo ampliado do ' + project.name });
    await reducedPage.waitForFunction(() => document.querySelector('dialog[open] video')?.currentTime > .1);
    await dialog.getByRole('button', { name: 'Fechar vídeo do ' + project.name }).tap();
    assert.equal(await button.evaluate(element => document.activeElement === element), true);
  }
  await reduced.close();

  const blocked = await browser.newContext();
  await blocked.addInitScript(() => {
    const original = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      if (this.closest('dialog')) return original.call(this);
      return Promise.reject(new DOMException('Autoplay blocked', 'NotAllowedError'));
    };
  });
  const blockedPage = await blocked.newPage();
  blockedPage.on('pageerror', error => pageErrors.push(error.message));
  await blockedPage.goto(baseURL, { waitUntil: 'networkidle' });
  for (const project of projects) {
    const stage = blockedPage.getByRole('button', { name: 'Ampliar vídeo do ' + project.name }).locator('..');
    assert.equal(await stage.locator('video').evaluate(element => getComputedStyle(element).opacity), '0', 'Poster permanece visível quando autoplay é bloqueado');
    assert.match(await stage.evaluate(element => getComputedStyle(element).backgroundImage), /poster\.webp/);
  }
  assert.equal(await blockedPage.getByRole('alert').count(), 0);
  await blocked.close();
  const failed = await browser.newContext();
  const failedPage = await failed.newPage();
  await failedPage.route('**/media/emprega-co.mp4', route => route.abort());
  await failedPage.goto(baseURL + '/projetos/emprega-co', { waitUntil: 'networkidle' });
  await failedPage.getByRole('alert').filter({ hasText: 'Não foi possível carregar o vídeo' }).waitFor();
  const failedStage = failedPage.getByRole('button', { name: 'Ampliar vídeo do Emprega.co' }).locator('..');
  assert.match(await failedStage.evaluate(element => getComputedStyle(element).backgroundImage), /poster\.webp/);
  await failed.close();
  assert.deepEqual(pageErrors, [], 'Sem erros de JavaScript');
  assert.deepEqual(failedResources, [], 'Sem falhas de recursos públicos');
  await writeFile('.qa/report.json', JSON.stringify({ baseURL, browser: browser.version(), checks, interactions: ['autoplay', 'loop', 'modal', 'Escape', 'focus return', 'keyboard', 'touch', 'reduced motion', 'blocked autoplay', 'media failure', 'sticky header', 'direct reload', 'social links', 'media MIME types'], pageErrors, failedResources }, null, 2));
  console.log('PASS: 15 combinações de rota/largura, autoplay, loop, ampliação, teclado, toque emulado, movimento reduzido e falhas simuladas.');
} finally {
  await browser.close();
}
