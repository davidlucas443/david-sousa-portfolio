export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

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
  contribution: string;
  overview: string;
  context: string;
  responsibilities: string[];
  learning: string;
  brand: ProjectImage;
  cover: ProjectImage;
  flow: { title: string; description: string; images: ProjectImage[] };
  links: { label: string; href: string }[];
  technical: TechnicalNote[];
}

const empregaSplash: ProjectImage = {
  src: '/assets/projects/emprega-splash.png',
  alt: 'Marca original emprega.co em terracota sobre fundo claro.',
  width: 382, height: 760, caption: 'Splash · marca original',
};
const empregaOnboarding: ProjectImage = {
  src: '/assets/projects/emprega-onboarding.png',
  alt: 'Onboarding original do Emprega.co: Vagas perto de você. Encontre oportunidades de diarista, doméstica e cuidados na sua região.',
  width: 382, height: 800, caption: 'Onboarding · Vagas perto de você',
};
const helpWelcome: ProjectImage = {
  src: '/assets/projects/help-pet-welcome.png',
  alt: 'Tela original de boas-vindas do Help Pet, com a marca e as opções de entrada como cliente ou administrador.',
  width: 387, height: 824, caption: 'Boas-vindas · escolha de acesso',
};

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
  contactLinks: [{ label: 'GitHub', href: 'https://github.com/davidlucas443' }],
};

export const projects: Project[] = [
  {
    slug: 'emprega-co', number: '01', name: 'Emprega.co', status: 'Em desenvolvimento',
    headline: 'Conectando profissionais e contratantes.',
    description: 'Uma plataforma para aproximar diaristas e profissionais domésticas de quem precisa de seus serviços.',
    contribution: 'Tech Lead · Backend e frontend',
    overview: 'Uma conexão entre quem busca oportunidades e quem precisa de ajuda no dia a dia.',
    context: 'Projeto desenvolvido no SENAI em parceria com a empresa Emprega.co. A plataforma conecta diaristas e profissionais domésticas a contratantes. O trabalho inclui reuniões com a CEO do projeto para conversar sobre a evolução do produto.',
    responsibilities: [
      'Atuo como Tech Lead no projeto acadêmico, com contribuições no backend e no frontend.',
      'Participo das discussões sobre o produto e das reuniões com a CEO do projeto.',
    ],
    learning: 'O projeto está em desenvolvimento. O lançamento para Android e iOS está planejado. Tenho a intenção de continuar colaborando após o curso; essa assistência ainda não é um compromisso firmado.',
    brand: empregaSplash, cover: empregaOnboarding,
    flow: {
      title: 'Da apresentação às oportunidades.',
      description: 'Telas originais do design do produto: o onboarding apresenta a proposta e a tela inicial reúne oportunidades. As imagens documentam o Figma, sem afirmar que todos os fluxos já foram implementados.',
      images: [empregaOnboarding, {
        src: '/assets/projects/emprega-home.png',
        alt: 'Design original da tela inicial do Emprega.co com currículo, treinamentos e lista de vagas.',
        width: 382, height: 1104, caption: 'Início · oportunidades e treinamentos',
      }],
    },
    links: [{ label: 'Ver design no Figma', href: 'https://www.figma.com/design/jUbSm99igNN5NcA1qXqM2A/Emprega.co?node-id=0-1' }],
    technical: [],
  },
  {
    slug: 'help-pet', number: '02', name: 'Help Pet',
    headline: 'Geolocalização para conectar pessoas e animais.',
    description: 'Um projeto acadêmico em que trabalhei a localização como parte da experiência de encontrar animais.',
    contribution: 'Geolocalização · Frontend e backend',
    overview: 'A localização como ponto de partida para aproximar pessoas e animais.',
    context: 'No Help Pet, colaborei no frontend e no backend e atuei como Scrum Master. Minha contribuição envolveu o fluxo de geolocalização, desde a entrada do endereço até o consumo de API e a filtragem por localização.',
    responsibilities: [
      'Contribuí no fluxo de geolocalização: entrada do endereço, consumo de API e filtragem por localização.',
      'Colaborei no frontend e no backend do projeto acadêmico.',
      'Atuei como Scrum Master, junto ao trabalho de desenvolvimento.',
    ],
    learning: 'Minha primeira integração com uma API de localização foi uma experiência importante de aprendizado. Ela me ajudou a entender como conectar dados externos ao comportamento de uma aplicação.',
    brand: {
      src: '/assets/projects/help-pet-logo.png', alt: 'Marca original HelpPet em verde, com símbolo de animal e lettering.',
      width: 325, height: 323, caption: 'Help Pet · marca original',
    },
    cover: helpWelcome,
    flow: {
      title: 'Da chegada à descoberta.',
      description: 'Telas originais do Figma, organizadas na sequência de boas-vindas e início. São registros do design do produto, sem representar resultados de utilização ou comprovar a implementação da geolocalização.',
      images: [helpWelcome, {
        src: '/assets/projects/help-pet-home.png',
        alt: 'Design original do início mobile do Help Pet, com categorias de animais e cards de adoção.',
        width: 387, height: 824, caption: 'Início mobile · descoberta de animais',
      }],
    },
    links: [
      { label: 'Ver repositório', href: 'https://github.com/HelpPetSENAI/help-pet-front' },
      { label: 'Visitar site do projeto', href: 'https://help-pet-front.vercel.app/' },
      { label: 'Ver design no Figma', href: 'https://www.figma.com/design/7vKBl18lns0tSIQ21GU4tZ/HelpPet---Design-System?node-id=151-74' },
    ],
    technical: [
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
