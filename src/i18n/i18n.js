import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Defina seus recursos (linguagens) aqui
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      projectsSection: {
        title: "Featured Projects",
      },
      projectsSpace: {
        title: "Xfolio – Crypto Portfolio Tracker",
        description: "A cross-platform portfolio management tool built with React and React Native, designed to help users gain full control over their crypto investments. Xfolio delivers actionable insights to promote consistency and help prevent avoidable losses, making it easier for traders and long-term holders to stay on track in a volatile market.",
      },
      projectsScroll: {
        title: "LP Crypto News Portal",
        description: "An automated news delivery system built with Node.js that fetches crypto-related content from external APIs and distributes it via a Telegram bot. Keeps the LP Crypto community informed in real-time with curated, high-quality updates.",
      },
      photoGallery: {
        title: "Real-Time Trading Bot",
        description: "A Node.js-based trading automation bot designed for crypto communities on Telegram. It monitors trades in real time, updates trade statuses, and delivers alerts directly into Telegram groups. Hosted on AWS Lightsail with integration to Google Cloud services for persistent storage and analytics. Built with fault tolerance, retry logic, and scalable deployment architecture, the bot ensures reliability and seamless performance in production environments.",
      },
      eventPlanner: {
        title: "Real-Time Macroeconomics Data Bot",
        description: "A Node.js bot that monitors and distributes key macroeconomic indicators such as NFP, CPI, FOMC, and PMI. Designed for crypto communities on Telegram, it fetches data from trusted sources and automatically sends curated updates in real time, helping traders stay informed about high-impact events.",
      },
      greeting: "Hello, I am Igor Souza!",
      bio1: "A Full-stack Developer",
      bio2: "Specialized in React and Web 3",
      projects: "Projects", // Tradução para "projects"
      contact: "Contact", // Tradução para "contact"
      contactMe: "Contact me",
      name: "Name",
      typeOfEnquiry: "Type of Enquiry", // Atualizado para "Type of Enquiry"
      yourMessage: "Your Message", // Atualizado para "Your Message"
      email: "Email", // Adicionado para "Email" em inglês
      submit: "Submit",
      enquiryOptions: {
        hireMe: "Project Proposal",
        collaboration: "Collaboration Opportunity",
        businessInquiry: "Business Inquiry",
        generalQuestion: "General Question",
        other: "Other",
      },
      seeMore: "See more", // Tradução para "See more"

      // Novas chaves para alertas
      alert: {
        errorHeader: "Something went wrong, please try again later!",
        successHeader: "All good!",
        successMessage: "Thanks for your submission {{name}}, we will get back to you shortly!",
      },
      
      // Tradução dos projetos Web3
      "Web 3 Projects": "Web 3 Projects",
      web3Project1: {
        title: "Voting DApp Development with Smart Contracts and React", // Nome do projeto
        description: "A decentralized voting application (DApp) built from scratch, integrating smart contracts with a React frontend. The project focuses on blockchain interactions to ensure secure and reliable voting functionality", // Descrição do projeto
      },
      web3Project2: {
        title: "Cryptocurrency Token Development with Solidity",
        description: "A basic cryptocurrency token created using Solidity. This project covers the complete process from setting up the token contract to minting, sending, and deploying, providing a comprehensive guide to developing and managing fungible tokens",
      },
      web3Project3: {
        title: "Web3 Project 3",
        description: "This is a brief description of Web3 Project 3.",
      },
      web3Project4: {
        title: "Web3 Project 4",
        description: "This is a brief description of Web3 Project 4.",
      },
    },
  },
  pt: {
    translation: {
      welcome: "Bem-vindo",
      projectsSection: {
        title: "Projetos em Destaque",
      },
      projectsSpace: {
        title: "Xfolio – Gerenciador de Portfólio Cripto",
        description: "Ferramenta de controle de portfólio desenvolvida com React e React Native, projetada para ajudar investidores a terem domínio total sobre seus ativos em criptomoedas. O Xfolio oferece insights estratégicos que promovem consistência e ajudam a evitar perdas evitáveis, tornando mais fácil manter o foco em um mercado volátil.",
      },
      projectsScroll: {
        title: "Portal de Notícias LP Crypto",
        description: "Sistema automatizado em Node.js que consome APIs de notícias cripto e envia atualizações relevantes para a comunidade LP Crypto via bot do Telegram, mantendo os membros informados em tempo real com alto padrão de curadoria e entrega.",
      },
      photoGallery: {
        title: "Bot de Trading em Tempo Real",
        description: "Bot de automação de trades desenvolvido em Node.js para comunidades de criptomoedas no Telegram. Monitora sinais de entrada e saída em tempo real, envia alertas automáticos e atualiza o status dos trades diretamente nos grupos. É hospedado na AWS Lightsail, com integração ao Google Cloud para persistência de dados e análises. O sistema conta com lógica de retentativas, tolerância a falhas e arquitetura escalável, garantindo performance e confiabilidade em produção."
      },
      eventPlanner: {
        title: "Bot de Notícias Macroeconômicas",
        description: "Bot desenvolvido em Node.js para monitoramento e distribuição automática de indicadores macroeconômicos como NFP, CPI, FOMC e PMI. Integrado ao Telegram, envia atualizações em tempo real para comunidades cripto, ajudando traders a reagirem rapidamente a eventos de alto impacto no mercado.",
      },
      greeting: "Olá, eu sou Igor Souza!",
      bio1: "Um Desenvolvedor Full-stack",
      bio2: "Especializado em React e Web 3",
      projects: "Projetos", // Tradução para "projects"
      contact: "Contato", // Tradução para "contact"
      contactMe: "Entre em Contato",
      name: "Nome",
      typeOfEnquiry: "Tipo de Consulta", // Atualizado para "Tipo de Consulta"
      yourMessage: "Sua Mensagem", // Atualizado para "Sua Mensagem"
      email: "E-mail", // Adicionado para "E-mail" em português
      submit: "Enviar",
      enquiryOptions: {
        hireMe: "Proposta de Projeto",
        collaboration: "Oportunidade de Colaboração",
        businessInquiry: "Consulta de Negócios",
        generalQuestion: "Questão Geral",
        other: "Outro",
      },
      seeMore: "Ver mais", // Tradução para "See more" em português

      // Novas chaves para alertas
      alert: {
        errorHeader: "Algo deu errado, tente novamente mais tarde!",
        successHeader: "Tudo certo!",
        successMessage: "Obrigado pela sua submissão {{name}}, entraremos em contato em breve!",
      },

      // Tradução dos projetos Web3
      "Web 3 Projects": "Projetos Web 3",
      web3Project1: {
        title: "DApp de Votação com Smart Contracts e React", // Nome do projeto
        description: "Aplicação descentralizada de votação (DApp) desenvolvida do zero, integrando smart contracts com um frontend em React. O projeto foca nas interações com a blockchain, garantindo uma funcionalidade de votação segura e confiável", // Descrição do projeto
      },
      web3Project2: {
        title: "Desenvolvimento de Token de Criptomoeda com Solidity",
        description: "Um token de criptomoeda básico desenvolvido com Solidity. Este projeto cobre todo o processo, desde a criação do contrato do token até a emissão, envio e implantação, fornecendo um guia completo para o desenvolvimento e gerenciamento de tokens fungíveis",
      },
      web3Project3: {
        title: "Projeto Web3 3",
        description: "Esta é uma breve descrição do Projeto Web3 3.",
      },
      web3Project4: {
        title: "Projeto Web3 4",
        description: "Esta é uma breve descrição do Projeto Web3 4.",
      },
    },
  },
  // Adicione outros idiomas conforme necessário
};

// Inicialize o i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // Defina o idioma padrão como "pt" para português
  fallbackLng: "pt", // Caso a tradução não exista no idioma escolhido, use o idioma padrão
  interpolation: {
    escapeValue: false, // React já escapa as variáveis automaticamente
  },
});

export default i18n;