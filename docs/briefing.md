# Briefing confirmado

## Atualização de 17/10/2026

David forneceu seu [LinkedIn](https://www.linkedin.com/in/david-sousa-406808349/) e pediu que ele apareça com o GitHub na abertura e no contato. Também forneceu o relato detalhado de suas contribuições ao Emprega.co, registrado no conteúdo atual em `src/content/portfolio.ts`. A apresentação visual da home e das páginas internas agora usa apenas os vídeos locais; os links do Figma continuam disponíveis. O restante deste documento registra decisões da primeira etapa e pode mencionar a composição anterior.

Fonte: pedido anexado pelo usuário. Registro inicial em 15/10/2026, horário de São Paulo.

## Objetivo e escopo

Portfólio profissional em português do Brasil para David Sousa, em busca de estágio ou vaga de desenvolvedor backend Java júnior. Primeira etapa: página inicial, páginas dos projetos, estrutura local, conteúdo confirmado e documentação. Sem backend, banco, autenticação, painel, formulário, commit, push, PR ou publicação.

Atualização de escopo em 15/10/2026: após a entrega local, David autorizou criar um repositório no GitHub, dividir o trabalho em vários commits e enviar o código. Também confirmou que o repositório deve ser público. Essa autorização substitui o limite inicial de não realizar commit/push para esta etapa de versionamento; não inclui deploy do site. Ver `docs/versionamento.md`.

## Ambiente e stack

- Ambiente verificado: Node v25.8.2 e npm 11.11.1.
- React 19.3.1, React DOM 19.3.1, Vite 8.3.4, plugin React 6.1.2, TypeScript 5.9.3, CSS Modules e npm.
- TypeScript estrito, com verificações de valores indexados e propriedades opcionais exatas.
- ESLint 10.12.0 e typescript-eslint 8.71.2.
- Versões fixadas no package.json e resoluções em package-lock.json.
- Fonte Geist Variable distribuída localmente pelo pacote @fontsource-variable/geist, sem chamada externa em runtime.
- O PowerShell bloqueia npm.ps1; executar npm.cmd evita alterar a política global.

Antes da instalação, foram consultados a documentação oficial do Vite e os metadados oficiais do registro npm (`npm.cmd view ... version engines peerDependencies`). Vite e o plugin React exigem Node `^20.19.0 || >=22.12.0`; ESLint exige `^20.19.0 || ^22.13.0 || >=24`. O Node v25.8.2 satisfaz esses requisitos. O TypeScript mais recente consultado foi 7.0.2; typescript-eslint aceita `>=4.8.4 <6.1.0`, então foi selecionado TypeScript 5.9.3. Nenhuma instalação global foi alterada.

Fontes oficiais: [Vite](https://vite.dev/guide/), [React](https://react.dev/versions), [TypeScript](https://www.typescriptlang.org/download/), [typescript-eslint no npm](https://www.npmjs.com/package/typescript-eslint), [ESLint no npm](https://www.npmjs.com/package/eslint).

## Referência e composição

A pasta continha apenas `referenciaVisual.png`, inspecionada e preservada. Não foram encontrados AGENTS.md no projeto ou nos diretórios ancestrais consultados. A referência é de composição; não é servida como fundo ou imagem do site.

- Preto/grafite, branco e cinza, tipografia expressiva e espaço entre seções.
- Projetos em dois blocos verticais, cada um com contexto, contribuição, link e capa editorial.
- Cores consultadas no Figma: Emprega.co `#A8613D` (primary), `#A84C21` (logo), `#FDF8F5` (canvas); Help Pet `#1A5B1F` (green/800), `#39C442` (green/500), `#C8EFCA` (green/100).
- Sem foto, molduras de celular, terminal fictício, métricas inventadas ou bibliotecas de animação/3D.
- Abertura com SVG próprio de arquitetura ilustrativa e fluxo CSS discreto. API, Serviços e Dados são rótulos conceituais, não uma arquitetura atribuída aos projetos. O texto não se move. `prefers-reduced-motion` desativa animações e transições.
- Rolagem nativa, landmarks, link de pular conteúdo, foco visível e links de âncora reais.

## Abertura

- Nome: David Sousa.
- Cargo: Desenvolvedor Backend Java.
- Frase: Da lógica à aplicação.
- Texto: Java, Spring Boot e dados para transformar ideias em aplicações funcionais.

## Conteúdo pessoal

Formação técnica em Desenvolvimento de Sistemas no SENAI Suíço-Brasileiro, com conclusão prevista para dezembro de 2026. Gosta de lógica, de entender como ideias viram aplicações, de ajudar colegas, ouvir sugestões e discutir soluções. Busca aprendizado com profissionais experientes e sistemas em produção.

Maior segurança: Java, Spring Boot, MySQL, HTML e CSS. Em aprendizado: React, React Native, Python aplicado a Data Science, Docker e Node.js. As responsabilidades acadêmicas não são apresentadas como vínculo empregatício.

## Projetos

### Emprega.co

Em desenvolvimento, no SENAI em parceria com a empresa. Conecta diaristas/domésticas e contratantes. David atua como Tech Lead com contribuições no backend e no frontend e participa de reuniões com a CEO. Android e iOS são lançamentos planejados. A colaboração após o curso é intenção, não compromisso firmado.

### Help Pet

David relata contribuição no fluxo de geolocalização: entrada do endereço, consumo de API e filtragem por localização; colaboração em frontend e backend; atuação como Scrum Master. A primeira integração com API de localização foi uma experiência importante de aprendizado. Não há afirmação de status de conclusão, números de uso ou nome da API.

Detalhes técnicos só entram com fonte de código. O serviço HTTP público consultado fundamenta as seções de arquitetura e decisões de implementação do Help Pet, com links e sem atribuição de autoria a David. Endpoints e testes não foram inferidos de requisitos ou documentação.

## Navegação e conteúdo

Rotas `/`, `/projetos/emprega-co` e `/projetos/help-pet`. Links nativos carregam a página e o componente raiz seleciona o conteúdo pelo pathname; mantém comportamento nativo de voltar/avançar, abrir em outra aba e recarregar, sem biblioteca adicional. Acesso direto depende de fallback de SPA para index.html, fornecido por Vite em dev/preview. Qualquer hospedagem futura deverá ser configurada e verificada antes da publicação.

Conteúdo em `src/content/portfolio.ts`, componentes reutilizáveis em `src/components`, páginas em `src/pages`, tokens e regras globais em `src/styles/global.css`; estilos locais em CSS Modules. Página de caminho desconhecido informa 404 e oferece retorno real ao início (o servidor SPA local responde HTTP 200).

## Contato e limites de conteúdo

Na primeira etapa, David forneceu [seu GitHub](https://github.com/davidlucas443) como único canal. Em 17/10/2026, acrescentou o [LinkedIn](https://www.linkedin.com/in/david-sousa-406808349/); ambos aparecem na abertura e no contato. E-mail e currículo permanecem omitidos por não terem sido fornecidos. Nenhum endereço foi inferido a partir das contas conectadas.
