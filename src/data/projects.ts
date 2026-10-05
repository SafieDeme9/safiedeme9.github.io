import type { CaseStudy, Project } from "../types/project";

// Maguette's repositories are private: never add code links here, and only sanitised screenshots.
export const maguette: CaseStudy = {
  name: "Maguette",
  tagline: {
    en: "Mental-health app for young people in Senegal",
    it: "App per la salute mentale dei giovani in Senegal",
  },
  status: {
    en: "In development: Android and iOS test builds, not yet published on the app stores.",
    it: "In sviluppo: build di test Android e iOS, non ancora pubblicata sugli store.",
  },
  problem: {
    en: "Maguette is a mobile app supporting the mental health of young people in Senegal. TODO(safie): 1–2 sentences on the problem it addresses (who it's for, what gap it fills).",
    it: "Maguette è un'app mobile a sostegno della salute mentale dei giovani in Senegal. TODO(safie): 1–2 frasi sul problema che affronta.",
  },
  role: {
    en: "Led and supervised development (AI-assisted). I wrote the specifications, made the architecture decisions and reviewed all of the generated code, then tested it and fixed bugs. I manage the Android and iOS test builds with EAS Build and turn requirements from the clinical, legal, content and operations teams into technical tasks.",
    it: "Ho guidato e supervisionato lo sviluppo (AI-assisted): ho scritto le specifiche, preso le decisioni di architettura e revisionato tutto il codice generato, poi l'ho testato e ho corretto i bug. Gestisco le build di test Android e iOS con EAS Build e traduco in task tecnici i requisiti dei team clinico, legale, contenuti e operations.",
  },
  stack: ["React Native", "Expo", "TypeScript", "Supabase", "EAS Build"],
  challenges: [
    {
      title: { en: "Offline and poor connectivity", it: "Connessione assente o instabile" },
      body: {
        en: "TODO(safie): what you did so the app works on unreliable mobile data.",
        it: "TODO(safie): cosa hai fatto perché l'app funzioni con una connessione instabile.",
      },
    },
    {
      title: { en: "Authentication and privacy", it: "Autenticazione e privacy" },
      body: {
        en: "TODO(safie): how auth and data protection are handled for sensitive mental-health data.",
        it: "TODO(safie): come sono gestite autenticazione e protezione di dati sensibili sulla salute mentale.",
      },
    },
    {
      title: { en: "Multilingual UI", it: "Interfaccia multilingue" },
      body: {
        en: "The interface is available in French, Arabic and English, with Wolof planned. TODO(safie): how you approached it (e.g. right-to-left layout for Arabic, translation workflow).",
        it: "L'interfaccia è disponibile in francese, arabo e inglese, con il wolof in programma. TODO(safie): come l'hai affrontato.",
      },
    },
    {
      title: { en: "Accessibility", it: "Accessibilità" },
      body: {
        en: "TODO(safie): the accessibility decisions you made (e.g. font scaling, contrast, screen readers).",
        it: "TODO(safie): le scelte di accessibilità che hai fatto.",
      },
    },
  ],
  // TODO(safie): add sanitised phone screenshots (no real user data) to public/images/maguette/.
  screenshots: [],
};

export const projects: Project[] = [
  {
    name: "Maguette staff dashboard",
    description: {
      en: "Next.js web dashboard for WASSOR staff: managing the content shown in the Maguette app, administering user and staff accounts, viewing usage reports, and handling support requests and moderation. Led and supervised development (AI-assisted).",
      it: "Dashboard web in Next.js per lo staff di WASSOR: gestione dei contenuti dell'app Maguette, amministrazione degli account di utenti e staff, report di utilizzo, gestione delle richieste di supporto e moderazione. Sviluppo guidato e supervisionato da me (AI-assisted).",
    },
    tech: ["Next.js", "Vercel"],
    private: true,
    // TODO(safie): add a sanitised dashboard screenshot (no real user data).
  },
  {
    name: "wassor.org",
    description: {
      en: "The WASSOR Womanity website, built with Next.js. I develop and maintain it, with preview and production deploys on Vercel from GitHub.",
      it: "Il sito di WASSOR Womanity, realizzato in Next.js. Lo sviluppo e lo mantengo, con deploy di preview e produzione su Vercel da GitHub.",
    },
    tech: ["Next.js", "Vercel"],
    private: true,
    liveUrl: "https://www.wassor.org/",
    liveKind: "site",
    // TODO(safie): add a screenshot of wassor.org.
  },
  {
    name: "QuizApp",
    description: {
      en: "Interactive quiz app with 18 categories: pick a category and difficulty, questions load from the Open Trivia DB REST API, and your score is tracked as you play.",
      it: "App di quiz interattiva con 18 categorie: scegli categoria e difficoltà, le domande arrivano dall'API REST di Open Trivia DB e il punteggio viene calcolato mentre giochi.",
    },
    tech: ["React", "HTML", "CSS"],
    repoUrl: "https://github.com/SafieDeme9/quizapp",
    liveUrl: "https://ndqx4r.csb.app/",
    image: {
      src: "/images/quizapp.webp",
      alt: { en: "Screenshot of QuizApp", it: "Schermata di QuizApp" },
      width: 1200,
      height: 510,
    },
  },
];

export const otherProjects: Project[] = [
  {
    name: "Safchat",
    description: {
      en: "Telegram bot for practising Italian through translation, conversation and grammar correction, powered by Hugging Face models.",
      it: "Bot Telegram per esercitarsi in italiano con traduzione, conversazione e correzione grammaticale, basato su modelli Hugging Face.",
    },
    tech: ["Python", "Docker", "HuggingFace"],
    repoUrl: "https://github.com/SafieDeme9/safchat",
    liveUrl: "https://t.me/safchatbot_bot",
  },
  {
    name: "Tictactoe",
    description: {
      en: "A simple tictactoe game I coded to play with my little brother.",
      it: "Un semplice tris che ho programmato per giocare con il mio fratellino.",
    },
    tech: ["Python", "Pygame"],
    repoUrl: "https://github.com/SafieDeme9/tictactoe",
  },
];
