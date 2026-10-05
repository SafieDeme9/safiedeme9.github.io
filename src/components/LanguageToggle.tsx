import type { JSX } from "react";
import { useLanguage } from "../i18n/language";
import type { Lang } from "../i18n/types";

function UkFlag() {
    return (
        <svg viewBox="0 0 60 30" className="h-3.5 w-5 shrink-0 rounded-[3px] ring-1 ring-black/10" aria-hidden="true">
            <rect width="60" height="30" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
        </svg>
    );
}

function ItFlag() {
    return (
        <svg viewBox="0 0 3 2" className="h-3.5 w-5 shrink-0 rounded-[3px] ring-1 ring-black/10" aria-hidden="true">
            <rect width="1" height="2" x="0" fill="#009246" />
            <rect width="1" height="2" x="1" fill="#ffffff" />
            <rect width="1" height="2" x="2" fill="#CE2B37" />
        </svg>
    );
}

const options: { lang: Lang; label: string; Flag: () => JSX.Element }[] = [
    { lang: "en", label: "EN", Flag: UkFlag },
    { lang: "it", label: "IT", Flag: ItFlag },
];

export default function LanguageToggle() {
    const { lang, setLang, t } = useLanguage();
    return (
        <div role="group" aria-label={t.nav.language} className="flex rounded-full border border-gray-300 bg-gray-100 p-[3px] dark:border-gray-700 dark:bg-gray-800">
            {options.map(({ lang: option, label, Flag }) => (
                <button
                    key={option}
                    type="button"
                    className="lang-option"
                    aria-pressed={lang === option}
                    onClick={() => setLang(option)}
                >
                    <Flag />
                    <span lang={option}>{label}</span>
                </button>
            ))}
        </div>
    );
}
