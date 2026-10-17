# Validação executada

## Preparação da publicação — 17/10/2026

- `npm.cmd run typecheck`, `npm.cmd run lint` e `npm.cmd run build`: aprovados. `git diff --check`: sem erros. O build de Vite gerou `dist`.
- `npm.cmd run verify:browser` no preview do build: aprovado no Chrome headless em 15 combinações de três rotas e cinco larguras (1440, 1024, 768, 390 e 320 px). O script verificou autoplay, loop, ampliação, Escape, retorno do foco, toque emulado, movimento reduzido, bloqueio de autoplay, falha de mídia, recarga direta das páginas internas, header após rolagem, links sociais e MIME de MP4/WebP. Não encontrou erros JavaScript, recursos públicos com resposta de erro, overflow horizontal ou violações Axe nas regras testadas.
- Capturas de home e páginas internas em desktop e mobile foram geradas em `.qa/` e inspecionadas visualmente. O teste de toque usa emulação; não houve teste em aparelho físico, leitor de tela, Firefox ou Safari.
- Arquivos candidatos a commit foram conferidos: sem `node_modules`, `dist`, arquivos temporários ou padrões de chave privada/token. `.env.local` e `.vercel/` gerados pelo vínculo com a Vercel estão ignorados.

## Layout e reprodução automática dos vídeos — 17/10/2026

- Cards da home: texto à esquerda e vídeo à direita em 1440 e 1024 px; empilhamento em 768, 390 e 320 px. Os fundos receberam tons sutis de Emprega.co e Help Pet sobre grafite. Após o ajuste final de tamanho, o limite dos vídeos internos passou a 1040 px. Capturas de 1440 e 390 px das três rotas foram inspecionadas em `.qa/`.
- Os MP4 editados de `public/media` foram preservados; seus SHA-256 continuam iguais aos registrados em `docs/fontes.md`. Cada projeto tem apenas um elemento de vídeo montado por página, inclusive durante a ampliação. Os vídeos da página usam `autoplay`, `muted`, `loop` e `playsInline`, sem controles nativos. Reprodução automática e retorno ao início após o fim foram verificados. O botão único da prévia abre um diálogo 16:9 com reprodução, botão de fechar e Escape; o foco retorna ao botão de ampliar.
- `prefers-reduced-motion: reduce` foi emulado: sem carregamento ou reprodução automática, com poster visível e reprodução iniciada ao abrir a visualização ampliada. O bloqueio de autoplay também foi simulado; o poster permaneceu visível e não houve erro JavaScript. Uma falha de carregamento do MP4 Emprega.co foi simulada e exibiu mensagem, mantendo o poster. A interação por toque foi verificada por emulação mobile.
- `npm.cmd run typecheck`, `npm.cmd run lint` e `npm.cmd run build`: aprovados. `npm.cmd run verify:browser` no preview do build: aprovado no Chrome headless `155.0.8059.81`, com 15 combinações das três rotas em 1440, 1024, 768, 390 e 320 px, sem overflow horizontal ou violações Axe nas regras verificadas. `git diff --check`: sem erros.

Limites: não houve teste em aparelho físico, leitor de tela, Firefox ou Safari. A simulação de bloqueio de autoplay não cobre todas as políticas de mídia dos navegadores. Nenhum commit, push, PR, merge ou deploy foi realizado nesta rodada.

## Vídeos editados e controles próprios — 17/10/2026

- Os dois MP4 recebidos em `C:\Users\David\Downloads` foram copiados para `public/media`; os SHA-256 dos arquivos publicados coincidem com os recebidos e estão registrados em `docs/fontes.md`. Os posters foram inspecionados visualmente e não mostram as referências pessoais removidas.
- `npm.cmd run typecheck`, `npm.cmd run lint` e `npm.cmd run build`: aprovados após a substituição das mídias e a alteração do player. `git diff --check`: sem erros.
- `npm.cmd run verify:browser` no preview do build: aprovado no Chrome headless `155.0.8059.81`. Foram verificadas as três rotas em 1440, 1024, 768, 390 e 320 px: dois vídeos na home, um em cada página interna, proporção 16:9, quadro inteiro com `object-fit: contain`, largura de 1238 px dos vídeos da home em 1440 px, sem overflow horizontal, galerias ou imagens no conteúdo principal. As capturas desktop e mobile foram geradas em `.qa/` e inspecionadas visualmente.
- Os botões próprios foram acionados no navegador para reprodução, pausa, término, nova reprodução e entrada/saída da tela cheia nas quatro instâncias dos vídeos. Também foram verificados foco e acionamento por teclado, exibição ao passar o mouse e acesso por toque em emulação mobile. O elemento `<video>` não possui `controls` nem autoplay; preserva `playsInline`, `poster` e `preload="none"`. Não há tempo, barra de progresso, volume, menu, legenda, crédito ou download visível na interface.
- A falha de carregamento dos dois MP4 foi simulada nas páginas internas e exibiu a mensagem de erro. A navegação local, o header sticky e a auditoria Axe da matriz seguiram aprovados. Evidências locais em `.qa/report.json` e `.qa/*.png`, ignoradas pelo Git.

Limites desta rodada: os testes de toque usaram emulação no Chrome; não houve teste em aparelho físico, leitor de tela, Firefox ou Safari. A inspeção visual dos posters não substitui análise quadro a quadro dos vídeos editados. Nenhum commit, push, PR, merge ou deploy foi realizado nesta rodada.

## Ajustes de 17/10/2026: conteúdo, vídeos e LinkedIn

- `npm.cmd run typecheck`, `npm.cmd run lint` e `npm.cmd run build`: aprovados no estado atualizado, sem instalar dependências.
- `npm.cmd run verify:browser` no preview do build: aprovado no Chrome headless `155.0.8059.81`, com as três rotas em 1440, 1024, 768, 390 e 320 px. Sem overflow horizontal ou violações Axe reportadas nas regras verificadas.
- O navegador confirmou dois vídeos na home, um em cada página interna e nenhuma imagem de galeria no conteúdo das três rotas. Os posters permanecem dentro dos players.
- Reprodução, pausa, avanço e evento de download verificados nos dois vídeos da home e nos dois das páginas internas pela API de mídia do navegador. Atributos `controls`, `playsInline`, `preload="none"` e ausência de autoplay conferidos. As mensagens de falha dos dois MP4 foram verificadas em páginas internas com carregamento bloqueado.
- Os dois links do LinkedIn na home foram conferidos quanto a endereço, nova aba e texto acessível; um deles recebeu foco por teclado. Link de pular conteúdo, foco visível, âncora, rolagem com header sticky, navegação entre projetos, recarga direta e detalhes expansíveis também passaram.
- Capturas em 1440 e 390 px das três rotas foram inspecionadas para composição desktop/mobile. Evidências locais em `.qa/report.json` e `.qa/*.png`, ignoradas pelo Git.

Limites: os controles nativos dos vídeos foram conferidos como presentes, mas a automação acionou reprodução, pausa e avanço pela API de mídia. Não houve teste em aparelho físico, leitor de tela, Firefox ou Safari. A disponibilidade externa do LinkedIn não foi verificada. Nenhum commit, push, PR, merge ou deploy foi realizado.

## Ampliação de 17/10/2026

- `npm.cmd run typecheck`, `npm.cmd run lint` e `npm.cmd run build`: aprovados após as alterações de conteúdo, player e header. Nenhuma dependência foi instalada.
- `npm.cmd run verify:browser` no preview do build (`http://127.0.0.1:4173`): aprovado no Chrome headless `155.0.8059.81`, com 15 combinações das três rotas em 1440, 1024, 768, 390 e 320 px. Sem overflow horizontal, erros de recurso ou violações Axe nas regras verificadas.
- Acesso direto e recarga das páginas internas, navegação por histórico, link de pular conteúdo, foco visível e âncora de projetos verificados. O teste mediu o header sticky no topo depois da rolagem em todas as combinações e confirmou a âncora abaixo dele.
- Ambos os vídeos foram carregados e reproduzidos no navegador. O teste verificou pausa e avanço por meio da API de mídia, metadados de 38 segundos e 1920 × 1080, atributos `controls`, `playsInline` e `preload="none"`, ausência de autoplay, foco no player e evento de download com os nomes corretos. Os controles nativos não foram acionados por ponteiro na automação.
- O carregamento de cada MP4 foi bloqueado separadamente no navegador para verificar a mensagem de falha. O link de download permanece disponível nesse estado.
- Capturas em 1440 e 390 px foram geradas para as três páginas; as duas páginas internas foram inspecionadas visualmente em mobile e desktop. Evidências locais em `.qa/report.json` e `.qa/*.png`, ignoradas pelo Git.
- `git diff --check`: sem erros de whitespace.

Limites desta rodada: Chrome headless e verificações automatizadas não substituem uso em dispositivo físico, leitor de tela ou testes em outros navegadores. Não foram executados os projetos externos nem verificadas suas integrações ou produção. Nenhum commit, push, PR, merge ou deploy foi realizado.

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

Os servidores temporários de revisão foram encerrados ao concluir a implementação; para revisar novamente, seguir o README. Na entrega local inicial, não houve commit, push, PR ou deploy. O versionamento posterior, autorizado por David, está registrado em `docs/versionamento.md`.
