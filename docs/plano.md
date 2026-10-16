# Plano da primeira etapa

1. **Inspeção:** preservar a referência e verificar arquivos, instruções e ambiente.
2. **Fontes:** consultar requisitos oficiais, Figma e GitHub em modo de leitura; baixar apenas assets originais para o portfólio.
3. **Documentação:** registrar briefing, decisões, proveniência e pendências.
4. **Base:** React + TypeScript estrito + Vite + CSS Modules, conteúdo separado e scripts npm.
5. **Página inicial:** abertura com arquitetura SVG/CSS, projetos, sobre, competências e contato com fatos confirmados.
6. **Páginas de projeto:** contexto e contribuição primeiro; telas originais por fluxo; detalhes técnicos somente quando sustentados por código e sem inferência de autoria.
7. **Validação:** tipos, lint, build, acesso direto às rotas e QA no Chrome em desktop e mobile, teclado, acessibilidade, overflow e movimento reduzido.
8. **Entrega local:** instruções de execução, relatório das verificações executadas e pendências concretas. Sem operações de Git ou publicação.

O resultado executado e seus limites são registrados em `docs/validacao.md`.

## Decisões de implementação

- Links e recarga de documento nativos para três rotas; sem roteador adicional.
- SVG e CSS para o elemento conceitual da abertura; sem animação/3D externo.
- Exportações de telas preservadas como imagens de produto, em vez de interfaces reconstruídas. A tela de splash compõe o painel da marca Emprega.co; a marca Help Pet usa exportação original do nó Logo. As capas não usam molduras de aparelho.
- Estilos e comportamento responsivo implementados em componentes reais; a referência visual permanece fora de public e do bundle de produção.
- Seções técnicas desconhecidas são omitidas, com pendências na documentação, evitando conteúdo de preenchimento.
- Playwright Core usa o Chrome instalado para QA local; Axe verifica regras de acessibilidade. São ferramentas de desenvolvimento, sem participação no bundle do site e sem download de navegador.

## Próximas etapas condicionadas aos dados reais

1. GitHub recebido e incluído. Incluir outros canais de contato apenas quando fornecidos e solicitados.
2. Receber o repositório Emprega.co e o código/branch do fluxo de geolocalização Help Pet.
3. Confirmar autoria e evidências antes de ampliar os detalhes técnicos.
4. Adicionar currículo apenas quando houver arquivo real.
5. Discutir publicação separadamente, quando solicitada.
