# Validação executada

Executada em 15/10/2026, horário de São Paulo, no Windows com Node v25.8.2 e npm 11.11.1.

## Comandos

| Verificação | Resultado final |
| --- | --- |
| `npm.cmd run typecheck` | Aprovado; TypeScript estrito para aplicação e configuração Vite |
| `npm.cmd run lint` | Aprovado; zero erros e zero avisos |
| `npm.cmd run build` | Aprovado; saída estática em dist |
| `npm.cmd run verify:browser` sobre Vite dev | Aprovado; 15 combinações de rota/largura |
| `npm.cmd run verify:browser` sobre preview do build | Aprovado; 15 combinações de rota/largura |
| Auditoria automática durante a instalação npm | 0 vulnerabilidades reportadas no momento da instalação |

Build final: JavaScript aproximadamente 243,90 kB (75,86 kB gzip), CSS 18,40 kB (4,75 kB gzip), fonte latina 29,40 kB. Ferramentas de QA não integram o bundle de produção.

## Navegador e matriz

Chrome instalado, versão `155.0.8059.81`, controlado em modo headless pelo Playwright Core; nenhum navegador foi baixado.

As rotas `/`, `/projetos/emprega-co` e `/projetos/help-pet` foram abertas diretamente em cada largura: **1440, 1024, 768, 390 e 320 px**. O QA foi executado tanto em `http://127.0.0.1:5173` quanto no build servido em `http://127.0.0.1:4173`.

Resultados:

- HTTP 200 e título principal correto nas três rotas locais.
- Sem overflow horizontal nas 15 combinações.
- Imagens locais carregadas, com tamanho visível e proporções preservadas. O recorte editorial intencional da splash Emprega.co foi conferido visualmente; o arquivo original permanece intacto.
- Sem links vazios ou `href="#"`.
- Sem erros de JavaScript ou respostas de erro nos recursos locais acompanhados durante a matriz.
- Fluxo SVG ativo na preferência normal; sem animação nos elementos SVG quando `prefers-reduced-motion: reduce` está emulado.
- Link de pular conteúdo alcançável com Tab/Enter, foco transferido ao main e contorno visível.
- CTA de projetos alcançável pelo teclado e navegação por âncora funcional.
- Links das páginas, acesso direto, recarga e histórico voltar/avançar funcionais.
- Elementos `details`/`summary` do Help Pet abrem e fecham com Enter.
- Caminho desconhecido exibe página informativa e retorno ao início funciona. O servidor SPA responde 200; não foi implementada resposta HTTP 404 por backend.

## Acessibilidade e contraste

Axe executado nas 15 combinações com tags WCAG 2 A/AA, 2.1 AA e 2.2 AA: **zero violações reportadas** em dev e no preview de produção. Isso não é uma certificação integral de acessibilidade.

O Axe registrou análise inconclusiva de contraste em textos sobre gradientes, rótulos SVG e legendas com pseudoelementos. Esses casos foram conferidos visualmente e por cálculo de luminância relativa das cores CSS, usando o ponto mais claro dos gradientes e composição alfa conservadora:

| Caso revisado | Razão calculada |
| --- | --- |
| Texto secundário sobre gradiente Emprega.co | 7,92:1 |
| Texto secundário sobre gradiente Help Pet | 6,72:1 |
| Selo Em desenvolvimento | 9,23:1 |
| Legenda Design do produto, Emprega.co | 12,23:1 |
| Legenda Design do produto, Help Pet | 10,75:1 |
| Rótulo SVG sobre composição conservadora de halo e vidro | 6,62:1 |

Os cálculos usam `(LmaisClara + 0,05) / (LmaisEscura + 0,05)`, após linearização sRGB. Não analisam o contraste de textos incorporados aos PNGs dos projetos: essas imagens documentam o design original e não foram redesenhadas.

## Inspeção visual e integridade

- Capturas das três páginas em 1440 e 390 px geradas; página inicial e páginas internas inspecionadas para composição, integridade dos assets e adaptação mobile.
- Corrigido corte da marca no painel interno Help Pet; a marca usa exportação original PNG do nó Logo e permanece integral.
- Referência original preservada, com SHA-256 igual ao registrado em `docs/fontes.md`.
- Referência visual ausente de dist; apenas assets de projeto efetivamente usados foram incluídos.
- Dependências do package.json conferidas contra a raiz do package-lock.json; sincronizadas.
- Busca em src/public/documentação sem TODOs, FIXMEs, URLs temporárias Figma ou links falsos de preenchimento.

Evidências locais, ignoradas pelo Git:

- `.qa/report-dev.json`: matriz executada no servidor de desenvolvimento.
- `.qa/report.json`: matriz final no preview de produção, incluindo dimensões de imagem, limites de viewport e resultados Axe.
- `.qa/1440-home.png`, `.qa/390-home.png` e capturas equivalentes das duas páginas de projeto.

## Limites

Não houve teste em aparelho físico, leitor de tela, Firefox ou Safari. Os links externos usam os endereços fornecidos, mas o QA de navegação se concentra nas rotas locais; não verifica disponibilidade contínua de sites externos. Não foram executados os projetos Emprega.co ou Help Pet, seus backends ou seus testes. Não há afirmação de funcionamento de endpoints externos ou autoria de código coletivo.

Os servidores temporários de revisão são encerrados ao concluir a tarefa; para revisar novamente, seguir o README. Nenhum commit, push, PR, deploy ou publicação foi realizado.
