# David Sousa — Portfólio

Portfólio local em React, TypeScript estrito, Vite e CSS Modules. Português do Brasil. A referência original `referenciaVisual.png` permanece preservada na raiz.

Repositório público: [davidlucas443/david-sousa-portfolio](https://github.com/davidlucas443/david-sousa-portfolio). Branch principal: `main`.

## Executar

Requisitos escolhidos: Node `^20.19.0 || >=22.13.0` e npm >=10. Ambiente verificado: Node 25.8.2 e npm 11.11.1. Os requisitos de cada ferramenta e a escolha de TypeScript estão em [docs/briefing.md](docs/briefing.md).

No PowerShell:

```powershell
npm.cmd ci --cache .npm-cache
npm.cmd run dev
```

Abrir `http://127.0.0.1:5173`. Se a porta estiver ocupada, usar a URL exibida pelo Vite. No Git Bash, `npm` pode substituir `npm.cmd`.

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

O preview de produção usa `http://127.0.0.1:4173` por padrão.

## Rotas e revisão

- `/`: abertura, projetos, sobre/competências e contato.
- `/projetos/emprega-co`: contexto, contribuições, vídeo de apresentação e link do Figma.
- `/projetos/help-pet`: contexto, contribuições, vídeo de apresentação, observações técnicas e fontes.
- Outros caminhos: página informativa de conteúdo não encontrado.

Links nativos entre documentos e seleção de conteúdo pelo pathname dispensam uma biblioteca de roteamento. Vite atende acesso direto às rotas em dev e preview. Na Vercel, `vercel.json` define o build de Vite em `dist` e reescreve `/projetos/*` para `index.html`, preservando os arquivos estáticos.

Para revisar: abrir as três rotas diretamente e recarregar, seguir links de projeto, usar voltar/avançar, navegar com Tab/Enter, testar o link de pular conteúdo e os elementos expansíveis, reduzir a largura até 320px e ativar movimento reduzido no sistema ou em DevTools. Os detalhes expansíveis usam `details`/`summary` nativos.

QA automatizado local (Chrome já instalado, sem baixar navegador):

```powershell
# Em um terminal, iniciar npm.cmd run dev. Em outro:
npm.cmd run verify:browser
```

O script grava evidências locais ignoradas pelo Git em `.qa/`. A variável `PORTFOLIO_BASE_URL` permite mudar a URL e `CHROME_PATH` permite indicar o Chrome instalado. O relatório e os limites das verificações estão em [docs/validacao.md](docs/validacao.md).

## Organização

Conteúdo em `src/content/portfolio.ts`; componentes em `src/components`; páginas em `src/pages`; CSS global/tokens em `src/styles/global.css`; CSS Modules junto de cada componente. Vídeos e posters locais em `public/media`; exportações anteriores do Figma permanecem em `public/assets/projects` como referência, sem renderização nas páginas. Proveniência em [docs/fontes.md](docs/fontes.md).

[Briefing](docs/briefing.md) · [Plano](docs/plano.md) · [Pendências](docs/pendencias.md).

GitHub e LinkedIn fornecidos por David aparecem na abertura e no contato. E-mail e currículo permanecem omitidos. Nenhum endereço foi inventado.
