import { useState, useEffect } from "react";
import { getInitialTheme, saveTheme, type Theme } from "../lib/theme";
import { useLanguage } from "../i18n/language";
import { useActiveSection } from "../hooks/useActiveSection";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

// "top" (the hero) is observed too so no link stays highlighted once you scroll back up.
const SECTION_IDS = ["top", "Experience", "Projects", "Contact"] as const;

export default function Header() {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const { t } = useLanguage();
    const active = useActiveSection(SECTION_IDS);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        const next: Theme = theme === "light" ? "dark" : "light";
        setTheme(next);
        saveTheme(next);
    };

    const closeNav = () => setNav(false);

    const navItems = [
        { id: "Experience", label: t.nav.experience },
        { id: "Projects", label: t.nav.projects },
        { id: "Contact", label: t.nav.contact },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white/90 backdrop-blur transition-colors duration-500 dark:border-gray-700 dark:bg-gray-900/90">
            <nav aria-label={t.nav.main} className="mx-auto max-w-5xl px-5 sm:px-8">
                <div className="flex h-[72px] items-center justify-between gap-3">
                    <a
                        href="#top"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-blue-600 text-[15px] font-extrabold text-white"
                    >
                        SD<span className="sr-only">: {t.nav.home}</span>
                    </a>

                    <ul className="hidden items-center gap-7 md:flex">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    aria-current={active === item.id ? "true" : undefined}
                                    className="relative py-2 text-[15px] font-semibold text-gray-600 transition-colors hover:text-ink after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-blue-700 after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=true]:text-ink aria-[current=true]:after:scale-x-100 dark:text-gray-300 dark:hover:text-white dark:after:bg-blue-300 dark:aria-[current=true]:text-white"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <LanguageToggle />
                        <ThemeToggle theme={theme} label={t.nav.darkMode} onToggle={toggleTheme} />
                        <button
                            type="button"
                            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
                            aria-label={nav ? t.nav.closeMenu : t.nav.openMenu}
                            aria-expanded={nav}
                            aria-controls="mobile-nav"
                            onClick={() => setNav(!nav)}
                        >
                            {nav ? (
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {nav && (
                    <div id="mobile-nav" className="border-t border-gray-200 pb-3 dark:border-gray-700 md:hidden">
                        <ul className="flex flex-col gap-1 pt-3">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={closeNav}
                                        className="block rounded-lg px-3 py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
