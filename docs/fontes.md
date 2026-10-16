# Fontes e proveniência

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
