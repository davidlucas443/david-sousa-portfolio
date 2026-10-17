# Fontes e proveniência

## Vídeos editados recebidos em 17/10/2026

David forneceu duas versões editadas em `C:\Users\David\Downloads`, sem referências pessoais, e pediu a substituição das mídias públicas. Os arquivos copiados para `public/media` têm os mesmos SHA-256 dos arquivos recebidos:

| Mídia atual | Arquivo fornecido | SHA-256 |
| --- | --- | --- |
| `public/media/emprega-co.mp4` | `emprega-co-sem-referencias-pessoais.mp4` | `6112477A1D87162E3C5B77090A4CFA88AF5105D1674553984285C9EB04B7575E` |
| `public/media/helppet.mp4` | `helppet-sem-referencias-pessoais.mp4` | `EE8B1488832A3E8152241AE4621F895BEF539ACBE8F8DE4E065E8C46FB504CA6` |

Os posters existentes foram inspecionados visualmente e não exibem nomes, créditos ou outras referências pessoais retiradas. A autorização de uso de Victor foi informada por David no pedido anterior; o crédito e o link saíram da interface pública por solicitação dele, mas a origem das versões originais permanece registrada abaixo. As versões anteriores dos MP4 foram guardadas apenas na pasta local ignorada `.qa/previous-media/` para reversão desta edição; não são servidas pelo portfólio.

## Atualização de 17/10/2026

David forneceu diretamente a URL do LinkedIn e a descrição das suas contribuições no Emprega.co (cadastro PF/PJ, vagas, candidaturas, propostas, contratos, mensageria, notificações, treinamentos, segurança e integrações no aplicativo). Esse relato pessoal fundamenta o novo texto; a implementação não foi verificada em um repositório da API Emprega.co nesta rodada. As exportações do Figma listadas abaixo foram preservadas como referências locais, mas saíram da renderização pública; os vídeos e posters documentados nesta página são a apresentação visual dos projetos.

## Ampliação consultada em 17/10/2026

- [Portfólio de Victor, `src/lib/content.ts`](https://github.com/eovitu/portfolio-vitu/blob/14b7598c0eb3ebd37e99675a25c9b36081e1fcf1/src/lib/content.ts), revisão `14b7598c0eb3ebd37e99675a25c9b36081e1fcf1`: referência editorial para as jornadas de candidatos e contratantes e para a apresentação do HelpPet. Seus relatos de autoria, ONG, pagamentos, testes e produção não foram transferidos para o texto de David.
- [Gateway coletivo HelpPet, `application.yml`](https://github.com/HelpPetSENAI/gateway-help-pet-g8/blob/75bb160db4973fd98e1db8d45c470d2280e147e7/src/main/resources/application.yml) e [regras de acesso](https://github.com/HelpPetSENAI/gateway-help-pet-g8/blob/75bb160db4973fd98e1db8d45c470d2280e147e7/src/main/java/com/helppet/gateway/config/SecurityConfig.java), revisão `75bb160db4973fd98e1db8d45c470d2280e147e7`: sustentam somente a descrição das rotas e regras de acesso como arquitetura coletiva. Os serviços não foram executados nem sua integração validada.
- As contribuições individuais de David permanecem fundamentadas no briefing fornecido por ele e registrado em `docs/briefing.md`.

| Arquivo usado na rodada anterior | Origem em `eovitu/portfolio-vitu`, revisão `14b7598` | Git blob SHA-1 conferido naquela rodada |
| --- | --- | --- |
| `public/media/emprega-co.mp4` | `public/media/emprega-co.mp4` | `8bf71832c07484902780491e2bbe351d750fa959` |
| `public/media/emprega-co-poster.webp` | `public/media/emprega-co-poster.webp` | `a92cde9ff59c2d65de2db47d56b880fad0d2a34b` |
| `public/media/helppet.mp4` | `public/media/helppet.mp4` | `68541b63502c5cdbc0794107e2d36166f7d85f91` |
| `public/media/helppet-poster.webp` | `public/media/helppet-poster.webp` | `56d991dfa1deddb925ae6c8478b41a32f0c6a6eb` |

Na rodada anterior, os hashes dos quatro arquivos locais coincidiam com os blobs da revisão consultada. Os MP4 originais tinham duração de 38 segundos; a inspeção dos átomos `mvhd` e `hdlr` encontrou trilha de vídeo e metadados, sem trilha de áudio. Victor autorizou o uso conforme o pedido de David. As mídias são demonstrações com telas recriadas e dados ilustrativos.

Consulta em 15/10/2026 (São Paulo). Somente leitura; nenhuma alteração nos projetos originais, repositórios ou Figma.

## Referência local

`referenciaVisual.png`, preservada na raiz. SHA-256: `08920B1E4D8ACDD0421192546AC08088603B162A57DC56B45165C1A0DD2A6295`.

Não usada como imagem no site. Composição implementada com React, HTML, CSS e SVG.

## Figma

| Arquivo local em public/assets/projects | Fonte original | Uso |
| --- | --- | --- |
| emprega-splash.png | [Emprega.co, 11:600](https://www.figma.com/design/jUbSm99igNN5NcA1qXqM2A/Emprega.co?node-id=11-600) | Painel editorial da marca |
| emprega-onboarding.png | [Emprega.co, 165:893](https://www.figma.com/design/jUbSm99igNN5NcA1qXqM2A/Emprega.co?node-id=165-893) | Capa e fluxo de onboarding |
| emprega-home.png | [Emprega.co, 2104:5545](https://www.figma.com/design/jUbSm99igNN5NcA1qXqM2A/Emprega.co?node-id=2104-5545) | Fluxo da página de projeto |
| help-pet-welcome.png | [Help Pet, 151:456](https://www.figma.com/design/7vKBl18lns0tSIQ21GU4tZ/HelpPet---Design-System?node-id=151-456) | Capa e fluxo de entrada |
| help-pet-logo.png | [Help Pet, nó Logo 337:4588](https://www.figma.com/design/7vKBl18lns0tSIQ21GU4tZ/HelpPet---Design-System?node-id=337-4588) | Painel editorial da marca |
| help-pet-home.png | [Help Pet, 151:75](https://www.figma.com/design/7vKBl18lns0tSIQ21GU4tZ/HelpPet---Design-System?node-id=151-75) | Fluxo da página de projeto |

Exportações originais, sem redesenho de interface ou geração de screenshots. Os PNGs das telas e da marca Help Pet foram obtidos com `download_assets`. Os arquivos foram baixados imediatamente; nenhuma URL temporária do Figma integra o código ou runtime.

O painel da marca Emprega.co recorta a área central da exportação de splash por CSS (`object-fit: cover`) sem modificar o arquivo original; onboarding e boas-vindas são exibidos integralmente e mantêm proporções. A marca Help Pet é uma exportação original do nó Logo e é redimensionada proporcionalmente no painel.

As telas de produto são imagens documentais. Seus botões integram a exportação original e não são controles interativos deste portfólio. As legendas e os textos alternativos identificam seu caráter de design.

## Repositório Help Pet

[HelpPetSENAI/help-pet-front](https://github.com/HelpPetSENAI/help-pet-front), branch `main`, commit consultado `392ccbcba9785dcd6701be9e5c806b0bea83208d`.

- Árvore recursiva consultada pelo conector GitHub para localizar implementação e assets.
- [src/service/Api.js](https://github.com/HelpPetSENAI/help-pet-front/blob/392ccbcba9785dcd6701be9e5c806b0bea83208d/src/service/Api.js): instância Axios, interceptador de requisição com token e interceptador de resposta 401. Fundamenta apenas observações sobre a camada HTTP, sem atribuição de autoria pessoal ou conclusão de segurança.
- `src/pages/ShowPetsPage/ShowPetsPage.jsx`: leitura da listagem de doações. A existência de uma chamada no frontend não foi usada para afirmar implementação do backend, geolocalização ou autoria. Nenhuma credencial contida no código consultado foi usada ou copiada para o portfólio.
- Não foi executado o projeto Help Pet nem seus endpoints. Não foram importados scripts ou dependências do projeto externo.

As contribuições pessoais nas duas páginas têm como fonte o relato do usuário. O código consultado sustenta somente as observações técnicas explicitamente referenciadas. README, protótipos e requisitos não foram tratados como comprovação de implementação.
