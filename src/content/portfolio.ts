export interface TechnicalNote {
  title: string;
  text: string;
  source: { label: string; href: string };
}

export interface Project {
  slug: 'emprega-co' | 'help-pet';
  number: string;
  name: string;
  status?: string;
  headline: string;
  description: string;
  homeContribution: string;
  contribution: string;
  overview: string;
  context: string;
  team: string;
  responsibilities: string[];
  learning: string;
  links: { label: string; href: string }[];
  technical: TechnicalNote[];
  video: { src: string; poster: string; description: string };
}

export const profile = {
  name: 'David Sousa',
  role: 'Desenvolvedor Backend Java',
  tagline: 'Da lógica à aplicação.',
  intro: 'Java, Spring Boot e dados para transformar ideias em aplicações funcionais.',
  about: 'Gosto da lógica e de entender como uma ideia se transforma em uma aplicação funcional.',
  collaboration: 'Gosto de ajudar colegas, ouvir sugestões e discutir soluções. Busco uma oportunidade de estágio ou de desenvolvimento backend Java júnior para aprender com profissionais experientes e entender sistemas em produção.',
  education: 'Técnico em Desenvolvimento de Sistemas — SENAI Suíço-Brasileiro',
  graduation: 'Conclusão prevista em dezembro de 2026',
  coreSkills: ['Java', 'Spring Boot', 'MySQL'],
  otherSkills: ['HTML', 'CSS'],
  learning: ['React', 'React Native', 'Python aplicado a Data Science', 'Docker', 'Node.js'],
  contact: 'Busco uma oportunidade para aprender, colaborar e desenvolver soluções com Java. Aberto a estágio e a vagas de desenvolvedor backend júnior.',
  contactLinks: [
    { label: 'GitHub', icon: 'github' as const, href: 'https://github.com/davidlucas443' },
    { label: 'LinkedIn', icon: 'linkedin' as const, href: 'https://www.linkedin.com/in/david-sousa-406808349/' },
  ],
};

export const projects: Project[] = [
  {
    slug: 'emprega-co', number: '01', name: 'Emprega.co', status: 'Em desenvolvimento',
    headline: 'Conectando profissionais e contratantes.',
    description: 'Uma plataforma que aproxima profissionais domésticas de pessoas que procuram seus serviços.',
    homeContribution: 'Atuo como Tech Lead, com contribuições no backend e no aplicativo. Meu trabalho conecta o acesso de candidatos e contratantes à publicação de vagas, ao acompanhamento de candidaturas e à evolução de propostas e contratos.',
    contribution: 'Tech Lead · Backend e aplicativo',
    overview: 'O encontro entre quem procura trabalho doméstico e quem precisa contratar.',
    context: 'Desenvolvido no SENAI em parceria com a empresa Emprega.co, o produto propõe duas jornadas: profissionais encontram oportunidades e apresentam seu perfil; contratantes divulgam vagas e conhecem candidatos.',
    team: 'Em equipe, desenvolvemos a experiência do aplicativo e os serviços que apoiam as jornadas de candidatos e contratantes. O projeto segue em desenvolvimento.',
    responsibilities: [
      'No backend, contribuí com cadastro de contratantes PF/PJ, publicação de vagas e ciclo de candidaturas. Na continuidade dessa jornada, trabalhei nas APIs de consulta, regras e consistência de propostas e contratos, incluindo validações, cálculo versionado da taxa e tratamento de operações concorrentes.',
      'Para apoiar o acompanhamento entre as partes, desenvolvi recursos de mensageria REST e WebSocket e notificações internas. Também trabalhei no módulo de treinamentos presenciais, com turmas, inscrições e capacidade, e em mecanismos de segurança para operadores, bloqueio de usuários e moderação. No aplicativo, contribuí com integração de login/cadastro, onboarding e ajustes de validação.',
    ],
    learning: 'O projeto está em desenvolvimento. O lançamento para Android e iOS está planejado. Tenho a intenção de continuar colaborando após o curso; essa assistência ainda não é um compromisso firmado.',
    video: {
      src: '/media/emprega-co.mp4', poster: '/media/emprega-co-poster.webp',
      description: 'Apresentação visual das jornadas propostas para candidatos e contratantes no Emprega.co. O vídeo percorre telas recriadas com dados de demonstração e não tem áudio.',
    },
    links: [{ label: 'Ver design no Figma', href: 'https://www.figma.com/design/jUbSm99igNN5NcA1qXqM2A/Emprega.co?node-id=0-1' }],
    technical: [],
  },
  {
    slug: 'help-pet', number: '02', name: 'Help Pet',
    headline: 'Descoberta de animais com a localização como parte da jornada.',
    description: 'Projeto acadêmico para aproximar pessoas e animais disponíveis para adoção.',
    homeContribution: 'Geolocalização · Frontend e backend · Scrum Master',
    contribution: 'Geolocalização · Frontend e backend',
    overview: 'Uma jornada de descoberta de animais disponíveis para adoção.',
    context: 'O Help Pet é um projeto acadêmico de cuidado animal. Na proposta de descoberta, a pessoa explora animais, consulta suas informações e pode considerar a localização ao buscar opções.',
    team: 'A arquitetura coletiva reúne interface, serviços e um gateway para encaminhar requisições. O código público do gateway define rotas e regras de acesso para requisições protegidas; essa parte do trabalho é apresentada como contribuição da equipe.',
    responsibilities: [
      'Contribuí no fluxo de geolocalização: entrada do endereço, consumo de API e filtragem por localização.',
      'Colaborei no frontend e no backend do projeto acadêmico.',
      'Atuei como Scrum Master, junto ao trabalho de desenvolvimento.',
    ],
    learning: 'Minha primeira integração com uma API de localização foi uma experiência importante de aprendizado. Ela me ajudou a entender como conectar dados externos ao comportamento de uma aplicação.',
    video: {
      src: '/media/helppet.mp4', poster: '/media/helppet-poster.webp',
      description: 'Apresentação visual do Help Pet, com telas recriadas de descoberta de animais e dados de demonstração. O vídeo não tem áudio.',
    },
    links: [
      { label: 'Ver repositório', href: 'https://github.com/HelpPetSENAI/help-pet-front' },
      { label: 'Visitar site do projeto', href: 'https://help-pet-front.vercel.app/' },
      { label: 'Ver design no Figma', href: 'https://www.figma.com/design/7vKBl18lns0tSIQ21GU4tZ/HelpPet---Design-System?node-id=151-74' },
    ],
    technical: [
      {
        title: 'Gateway da equipe',
        text: 'O repositório coletivo do gateway configura rotas para grupos de serviços e regras de acesso para requisições protegidas. É uma leitura do código da equipe, sem atribuição de autoria pessoal ou validação do sistema em execução.',
        source: { label: 'Fonte: configuração do gateway', href: 'https://github.com/HelpPetSENAI/gateway-help-pet-g8/blob/75bb160db4973fd98e1db8d45c470d2280e147e7/src/main/resources/application.yml' },
      },
      {
        title: 'Arquitetura',
        text: 'O frontend consultado contém uma camada de serviço HTTP com Axios. A instância central configura a URL base e interceptadores de requisição e resposta. Essa observação descreve o código do repositório, sem atribuir a mim a autoria dessa camada.',
        source: { label: 'Fonte: src/service/Api.js', href: 'https://github.com/HelpPetSENAI/help-pet-front/blob/392ccbcba9785dcd6701be9e5c806b0bea83208d/src/service/Api.js' },
      },
      {
        title: 'Decisões de implementação',
        text: 'Na camada HTTP consultada, um interceptador adiciona o token às requisições. Ao receber uma resposta 401, o código remove o token local e redireciona ao login. É um comportamento observado no código, sem validação de execução ou atribuição de autoria pessoal.',
        source: { label: 'Fonte: interceptadores HTTP', href: 'https://github.com/HelpPetSENAI/help-pet-front/blob/392ccbcba9785dcd6701be9e5c806b0bea83208d/src/service/Api.js' },
      },
    ],
  },
];
