import type { CaseStudy, Project, ProjectImage } from "../types/project";

const phoneShot = (file: string, en: string, it: string): ProjectImage => ({
  src: `/images/maguette/${file}`,
  alt: { en, it },
  width: 600,
  height: 1309,
});

// Maguette's repositories are private: never add code links here. Screenshots come from
// the public prototype (sample data only), never from real users.
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
  // Source: Maguette repo, docs/APP.md and README.md.
  problem: {
    en: "Young people aged 10–24 in Senegal need a safe, private place to talk about how they feel, in their own language and culture. Maguette is an anonymous, chat-first companion with mood tracking, culturally rooted learning content and community wisdom, available in French, English and Arabic (Wolof planned), with a help button on every screen that works even offline.",
    it: "I giovani tra i 10 e i 24 anni in Senegal hanno bisogno di uno spazio sicuro e riservato per parlare di come si sentono, nella propria lingua e cultura. Maguette è un compagno anonimo basato sulla chat, con monitoraggio dell'umore, contenuti educativi radicati nella cultura locale e saggezza della comunità, disponibile in francese, inglese e arabo (wolof in programma), con un pulsante di aiuto su ogni schermata che funziona anche offline.",
  },
  role: {
    en: "I lead development: I wrote the specifications, made the architecture decisions, review every change, and test and fix bugs. I manage the Android and iOS test builds with EAS Build and turn requirements from the clinical, legal, content and operations teams into technical tasks.",
    it: "Guido lo sviluppo: ho scritto le specifiche, preso le decisioni di architettura, revisiono ogni modifica, testo e correggo i bug. Gestisco le build di test Android e iOS con EAS Build e traduco in task tecnici i requisiti dei team clinico, legale, contenuti e operations.",
  },
  stack: ["React Native", "Expo", "TypeScript", "Supabase"],
  prototypeUrl: "https://maguette-prototype.vercel.app/",
  screenshots: [
    phoneShot("maguette-language.webp", "Maguette: language selection screen", "Maguette: schermata di scelta della lingua"),
    phoneShot("maguette-home.webp", "Maguette: home screen", "Maguette: schermata principale"),
    phoneShot("maguette-mood.webp", "Maguette: mood trends screen", "Maguette: schermata dell'andamento dell'umore"),
  ],
};

export const projects: Project[] = [
  {
    name: "Maguette staff dashboard",
    // Source: maguette_dashboard repo, README.md.
    description: {
      en: "Next.js staff dashboard for WASSOR: moderating community posts before they're published, handling data-rights requests and keeping a staff audit log, behind Microsoft Entra ID sign-in with role-based access.",
      it: "Dashboard in Next.js per lo staff di WASSOR: moderazione dei post della community prima della pubblicazione, gestione delle richieste sui diritti dei dati e registro delle attività dello staff, con accesso tramite Microsoft Entra ID e ruoli.",
    },
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    // TODO(safie): add a dashboard screenshot (sample data only).
  },
  {
    name: "wassor.org",
    description: {
      en: "The WASSOR Womanity website, built with Next.js. I develop and maintain it, with preview and production deploys from GitHub.",
      it: "Il sito di WASSOR Womanity, realizzato in Next.js. Lo sviluppo e lo mantengo, con deploy di preview e produzione da GitHub.",
    },
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://www.wassor.org/",
    liveKind: "site",
    image: {
      src: "/images/wassor.webp",
      srcSet: "/images/wassor-600.webp 600w, /images/wassor.webp 1280w",
      alt: { en: "Screenshot of the wassor.org homepage", it: "Schermata della homepage di wassor.org" },
      width: 1280,
      height: 800,
    },
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
      srcSet: "/images/quizapp-600.webp 600w, /images/quizapp.webp 1200w",
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
