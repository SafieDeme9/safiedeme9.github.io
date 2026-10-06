import type { Lang } from "./types";

const en = {
    nav: {
        home: "Safietou Deme, back to top",
        main: "Main",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        language: "Language",
        darkMode: "Dark mode",
    },
    hero: {
        role: "Fullstack developer · Web & mobile",
        greeting: "Hi, I'm Safietou",
        wave: "waving hand",
        lead: "I build web and mobile products: React and Next.js on the web, React Native / Expo on mobile, Supabase behind them.",
        sub: "Computer Science Engineering student at the University of Brescia, currently leading development of a mental-health app for young people in Senegal.",
        location: "Brescia, Italy",
        resume: "Resume",
        contact: "Contact me",
        photoAlt: "Photo of Safietou",
    },
    stack: {
        heading: "Tech stack",
        alsoUsed: "Also used",
    },
    experience: {
        eyebrow: "01 · Experience",
        heading: "Where I've worked",
        present: "Present",
        current: "Current",
    },
    projects: {
        eyebrow: "02 · Projects",
        heading: "Selected work",
        featured: "Featured case study",
        other: "Other projects",
        techStack: "Tech stack",
        code: "Code",
        liveDemo: "Live demo",
        liveSite: "Live site",
        newTab: "opens in a new tab",
    },
    caseStudy: {
        problem: "The problem",
        role: "My role",
        stack: "Stack",
        screenshots: "Screenshots",
    },
    contact: {
        eyebrow: "03 · Contact",
        heading: "Let's build something together.",
        text: "Based in Brescia, Italy. The quickest way to reach me is email.",
    },
    footer: {
        madeWith: "Made with ❤️ by Safietou",
    },
};

export type Dictionary = typeof en;

// Italian copy reviewed by Safietou.
const it: Dictionary = {
    nav: {
        home: "Safietou Deme, torna all'inizio",
        main: "Principale",
        experience: "Esperienza",
        projects: "Progetti",
        contact: "Contatti",
        openMenu: "Apri il menu",
        closeMenu: "Chiudi il menu",
        language: "Lingua",
        darkMode: "Tema scuro",
    },
    hero: {
        role: "Sviluppatrice fullstack · Web e mobile",
        greeting: "Ciao, sono Safietou",
        wave: "mano che saluta",
        lead: "Sviluppo prodotti web e mobile: React e Next.js per il web, React Native / Expo per il mobile, con Supabase come backend.",
        sub: "Studentessa di Ingegneria Informatica all'Università di Brescia, attualmente guido lo sviluppo di un'app per la salute mentale dei giovani in Senegal.",
        location: "Brescia, Italia",
        resume: "Curriculum",
        contact: "Contattami",
        photoAlt: "Foto di Safietou",
    },
    stack: {
        heading: "Tecnologie",
        alsoUsed: "Ho usato anche",
    },
    experience: {
        eyebrow: "01 · Esperienza",
        heading: "Dove ho lavorato",
        present: "Oggi",
        current: "Attuale",
    },
    projects: {
        eyebrow: "02 · Progetti",
        heading: "Progetti selezionati",
        featured: "Caso di studio in evidenza",
        other: "Altri progetti",
        techStack: "Tecnologie",
        code: "Codice",
        liveDemo: "Demo",
        liveSite: "Sito",
        newTab: "si apre in una nuova scheda",
    },
    caseStudy: {
        problem: "Il problema",
        role: "Il mio ruolo",
        stack: "Tecnologie",
        screenshots: "Schermate",
    },
    contact: {
        eyebrow: "03 · Contatti",
        heading: "Costruiamo qualcosa insieme.",
        text: "Vivo a Brescia. Il modo più rapido per contattarmi è l'email.",
    },
    footer: {
        madeWith: "Fatto con ❤️ da Safietou",
    },
};

export const dictionaries: Record<Lang, Dictionary> = { en, it };
