import { ref } from 'vue';

export type Locale = 'pt' | 'en';

const getBrowserLocale = (): Locale => {
  if (typeof navigator === 'undefined') return 'pt';
  const lang = navigator.language || (navigator as any).userLanguage;
  return lang.startsWith('pt') ? 'pt' : 'en';
};

const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') as Locale : null;
export const locale = ref<Locale>(savedLocale || getBrowserLocale());

export function setLocale(newLocale: Locale) {
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
}

export function toggleLocale() {
  setLocale(locale.value === 'pt' ? 'en' : 'pt');
}

export const translations = {
  pt: {
    nav: {
      home: "home",
      about: "sobre mim",
      stack: "stack",
      projects: "projetos",
      contact: "contato"
    },
    hero: {
      hello: "Olá 👋,",
      intro: "Meu nome é",
      name: "Artur",
      tagline: "Eu faço sites para web"
    },
    about: {
      title: "Sobre mim",
      text: "Olá! Sou Artur, desenvolvedor Fullstack com forte atuação em backend utilizando Java e Spring Boot. Trabalho com APIs, microsserviços, bancos de dados, mensageria e infraestrutura Linux, além de desenvolver interfaces com React e Vue. Sou entusiasta de tecnologia, software open-source e arquitetura de sistemas, e estou sempre em busca de criar soluções que sejam simples, eficientes e fáceis de manter."
    },
    stack: {
      title: "Minhas Stacks",
      subtitle: "Tecnologias e frameworks que venho usando recentemente"
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns trabalhos e estudos que representam meu processo de desenvolvimento.",
      access: "Acessar",
      items: {
        sloty: {
          title: "sloty",
          description: "Plataforma de agendamento online para empresas, com gestão de horários, serviços, profissionais e disponibilidade em tempo real."
        },
        dkids: {
          title: "boutique dkids",
          description: "E-commerce de moda infantil desenvolvido para oferecer uma experiência de compra simples, rápida e responsiva."
        },
        polaris: {
          title: "polaris",
          description: "Plataforma para organização de listas de presentes e compras pessoais, facilitando o planejamento e o compartilhamento."
        },
        oriontask: {
          title: "oriontask",
          description: "Aplicativo de gerenciamento de tarefas inspirado nos conceitos de dharma e karma para incentivar produtividade e consistência."
        },
        hermes: {
          title: "hermes",
          description: "CLI que utiliza IA para gerar mensagens de commit padronizadas a partir das alterações do Git, simplificando o fluxo de desenvolvimento."
        }
      }
    },
    contact: {
      title: "Contato",
      subtitle: "Tem uma ideia, projeto ou oportunidade? Fique à vontade para entrar em contato.",
      phone: "Telefone"
    },
    footer: {
      developedBy: "Desenvolvido por Artur"
    },
    whatsapp: {
      aria: "Fale comigo no WhatsApp",
      message: "Olá! Entrei em contato através do seu portfólio."
    }
  },
  en: {
    nav: {
      home: "home",
      about: "about me",
      stack: "stack",
      projects: "projects",
      contact: "contact"
    },
    hero: {
      hello: "Hi 👋,",
      intro: "My name is",
      name: "Artur",
      tagline: "I build websites"
    },
    about: {
      title: "About me",
      text: "Hi! I'm Artur, a Fullstack developer with a strong focus on backend development using Java and Spring Boot. I work with APIs, microservices, databases, messaging, and Linux infrastructure, as well as developing interfaces with React and Vue. I'm a technology enthusiast, open-source software fan, and systems architecture geek, always seeking to build simple, efficient, and easy-to-maintain solutions."
    },
    stack: {
      title: "My Stack",
      subtitle: "Technologies and frameworks I've been using recently"
    },
    projects: {
      title: "Projects",
      subtitle: "Some works and studies that represent my development process.",
      access: "Visit",
      items: {
        sloty: {
          title: "sloty",
          description: "Online scheduling platform for businesses, with scheduling, services, professionals, and real-time availability management."
        },
        dkids: {
          title: "boutique dkids",
          description: "Children's fashion e-commerce developed to offer a simple, fast, and responsive shopping experience."
        },
        polaris: {
          title: "polaris",
          description: "Platform for organizing gift lists and personal shopping, facilitating planning and sharing."
        },
        oriontask: {
          title: "oriontask",
          description: "Task management application inspired by the concepts of dharma and karma to encourage productivity and consistency."
        },
        hermes: {
          title: "hermes",
          description: "CLI that uses AI to generate standardized commit messages from Git changes, simplifying the development workflow."
        }
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Have an idea, project, or opportunity? Feel free to reach out.",
      phone: "Phone"
    },
    footer: {
      developedBy: "Developed by Artur"
    },
    whatsapp: {
      aria: "Chat with me on WhatsApp",
      message: "Hello! I got in touch through your portfolio."
    }
  }
};

export function t(path: string): string {
  const keys = path.split('.');
  let result: any = translations[locale.value];
  for (const key of keys) {
    if (result && key in result) {
      result = result[key];
    } else {
      return path;
    }
  }
  return typeof result === 'string' ? result : path;
}
