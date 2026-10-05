import { useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionaries } from "./dictionary";
import { LanguageContext, getInitialLang, saveLang, type LanguageContextValue } from "./language";
import type { Lang } from "./types";

export default function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            lang,
            setLang: (next) => {
                setLangState(next);
                saveLang(next);
            },
            t: dictionaries[lang],
            l: (localized) => localized[lang],
        }),
        [lang],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
