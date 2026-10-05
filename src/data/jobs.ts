import type { Job } from "../types/job";

// Source: Safietou's CV (cv_safietou_deme_adentis.pdf). Italian follows the CV; English is a translation.
const jobs: Job[] = [
  {
    company: "WASSOR Womanity",
    title: {
      en: "Technical Project Manager & Systems Administrator",
      it: "Technical Project Manager & Systems Administrator",
    },
    location: { en: "Senegal, remote", it: "Senegal, da remoto" },
    start: { year: 2024, month: 12 },
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Next.js", "Tailwind CSS", "Vercel", "GitHub Actions"],
    bullets: [
      {
        en: "Lead development of Maguette, an Android/iOS mental-health app for young people in Senegal (React Native, Expo, TypeScript, Supabase), defining the architecture and specs, reviewing every change, testing and fixing bugs.",
        it: "Guido lo sviluppo di Maguette, app mobile Android/iOS per la salute mentale dei giovani in Senegal (React Native, Expo, TypeScript, Supabase), definizione di architettura e specifiche, revisione di ogni modifica, test e correzione dei bug.",
      },
      {
        en: "Develop and maintain the Next.js staff dashboard and the wassor.org website, with preview and production deploys on Vercel from GitHub.",
        it: "Sviluppo e manutenzione della dashboard staff in Next.js e del sito wassor.org (Next.js), con deploy di preview e produzione su Vercel da GitHub.",
      },
      {
        en: "Manage Android and iOS test builds with EAS Build and set up CI workflows with GitHub Actions.",
        it: "Gestione delle build di test Android e iOS tramite EAS Build e configurazione di workflow CI con GitHub Actions.",
      },
      {
        en: "Translate requirements from multidisciplinary teams (clinical, legal, content, operations) into technical tasks, and administer the organisation's Microsoft 365, accounts, hosting and web services.",
        it: "Analisi dei requisiti con team multidisciplinari (clinico, legale, contenuti, operations) e traduzione in task tecnici; amministrazione di Microsoft 365, account, hosting e servizi web dell'associazione.",
      },
    ],
  },
  {
    company: "Mygladix",
    title: { en: "Web & Software Developer", it: "Web & Software Developer" },
    location: { en: "Manerbio (BS)", it: "Manerbio (BS)" },
    start: { year: 2024, month: 7 },
    end: { year: 2024, month: 11 },
    tech: ["WordPress", "Joomla"],
    bullets: [
      {
        en: "Developed and maintained web applications; customised WordPress and Joomla sites.",
        it: "Sviluppo e manutenzione di applicazioni web; personalizzazione di siti WordPress e Joomla.",
      },
      {
        en: "Administered internal IT systems, Microsoft services, business software, web hosting and email; provided technical support to users.",
        it: "Amministrazione dei sistemi IT interni, servizi Microsoft, software gestionali, hosting web e posta; supporto tecnico agli utenti.",
      },
    ],
  },
];

export default jobs;
