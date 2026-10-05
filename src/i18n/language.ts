import { createContext, useContext } from "react";
import type { Dictionary } from "./dictionary";
import { LANGS, type Lang, type Localized } from "./types";

const LANG_STORAGE_KEY = "lang";

function isLang(value: unknown): value is Lang {
    return LANGS.includes(value as Lang);
}

/** Saved choice first, then the browser language, then English. */
export function getInitialLang(): Lang {
    try {
        const saved = localStorage.getItem(LANG_STORAGE_KEY);
        if (isLang(saved)) return saved;
    } catch {
        // Storage unavailable; fall through.
    }
    const browser = typeof navigator !== "undefined" ? navigator.language.slice(0, 2).toLowerCase() : "";
    return isLang(browser) ? browser : "en";
}

export function saveLang(lang: Lang) {
    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
        // Ignore: the choice just won't persist.
    }
}

export type LanguageContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: Dictionary;
    /** Pick the current language's string from localized data. */
    l: (value: Localized) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
    return ctx;
}
