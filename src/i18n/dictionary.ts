import type { Lang } from "./types";

const en = {
    nav: {
        home: "Safietou Deme, back to top",
        about: "About me",
        projects: "Projects",
        experience: "Experience",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        toDark: "Switch to dark mode",
        toLight: "Switch to light mode",
        switchLang: "Switch to Italian",
    },
    hero: {
        greeting: "Hi, I'm Safietou 👋",
        tagline: "I'm a computer science student who likes exploring her creative mind and building cool things.",
        resume: "Resume",
        contact: "Contact me",
        photoAlt: "Photo of Safietou",
    },
    stack: {
        heading: "Tech stack",
        alsoUsed: "Also used",
    },
    projects: {
        heading: "Projects",
        featured: "Featured case study",
        other: "Other projects",
        techStack: "Tech stack",
        code: "Code",
        liveDemo: "Live demo",
        liveSite: "Live site",
        privateRepo: "Private repo",
        newTab: "opens in a new tab",
    },
    caseStudy: {
        problem: "The problem",
        role: "My role",
        stack: "Stack",
        challenges: "Key decisions & challenges",
        screenshots: "Screenshots",
    },
    experience: {
        heading: "Experience",
        present: "Present",
    },
    contact: {
        heading: "CONTACT",
        subheading: "Get in Touch",
        location: "Location",
        mail: "Mail",
        connect: "Connect with me",
    },
    footer: {
        madeWith: "Made with ❤️ by Safietou",
        copyright: "Copyright",
    },
};

export type Dictionary = typeof en;

// TODO(safie): review the Italian copy (machine-drafted).
const it: Dictionary = {
    nav: {
        home: "Safietou Deme, torna all'inizio",
        about: "Chi sono",
        projects: "Progetti",
        experience: "Esperienza",
        openMenu: "Apri il menu",
        closeMenu: "Chiudi il menu",
        toDark: "Passa al tema scuro",
        toLight: "Passa al tema chiaro",
        switchLang: "Passa all'inglese",
    },
    hero: {
        greeting: "Ciao, sono Safietou 👋",
        tagline: "Sono una studentessa di informatica a cui piace esplorare la propria creatività e costruire cose interessanti.",
        resume: "Curriculum",
        contact: "Contattami",
        photoAlt: "Foto di Safietou",
    },
    stack: {
        heading: "Tecnologie",
        alsoUsed: "Ho usato anche",
    },
    projects: {
        heading: "Progetti",
        featured: "Caso di studio in evidenza",
        other: "Altri progetti",
        techStack: "Tecnologie",
        code: "Codice",
        liveDemo: "Demo",
        liveSite: "Sito",
        privateRepo: "Repository privato",
        newTab: "si apre in una nuova scheda",
    },
    caseStudy: {
        problem: "Il problema",
        role: "Il mio ruolo",
        stack: "Tecnologie",
        challenges: "Scelte e sfide principali",
        screenshots: "Schermate",
    },
    experience: {
        heading: "Esperienza",
        present: "Oggi",
    },
    contact: {
        heading: "CONTATTI",
        subheading: "Scrivimi",
        location: "Dove sono",
        mail: "Email",
        connect: "Seguimi",
    },
    footer: {
        madeWith: "Fatto con ❤️ da Safietou",
        copyright: "Copyright",
    },
};

export const dictionaries: Record<Lang, Dictionary> = { en, it };
