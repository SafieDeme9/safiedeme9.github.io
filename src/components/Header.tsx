import { useState, useEffect } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { getInitialTheme, saveTheme, type Theme } from "../lib/theme";
import { useLanguage } from "../i18n/language";

export default function Header() {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const { lang, setLang, t } = useLanguage();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        const next: Theme = theme === "light" ? "dark" : "light";
        setTheme(next);
        saveTheme(next);
    };

    const closeNav = () => setNav(false);
    const otherLang = lang === "en" ? "it" : "en";

    const navItems = [
        { href: "#About", label: t.nav.about },
        { href: "#Projects", label: t.nav.projects },
        { href: "#Experience", label: t.nav.experience },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md w-full">
            <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center justify-between">

                    <a href="#About" className="text-xl font-semibold text-gray-900 dark:text-white shrink-0" aria-label={t.nav.home}>
                        SD
                    </a>

                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="py-2 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setLang(otherLang)}
                            className="px-2 py-1.5 text-sm font-semibold rounded-lg text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label={t.nav.switchLang}
                        >
                            <span lang={otherLang}>{otherLang.toUpperCase()}</span>
                        </button>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-700 dark:text-yellow-400 dark:bg-slate-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label={theme === "light" ? t.nav.toDark : t.nav.toLight}
                        >
                            {theme === "light" ? <LuMoon size={20} aria-hidden="true" /> : <LuSun size={20} aria-hidden="true" />}
                        </button>

                        <button
                            type="button"
                            className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                            aria-label={nav ? t.nav.closeMenu : t.nav.openMenu}
                            aria-expanded={nav}
                            aria-controls="mobile-nav"
                            onClick={() => setNav(!nav)}
                        >
                            {nav ? (
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {nav && (
                    <div id="mobile-nav" className="md:hidden mt-3 pb-3 border-t border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-col gap-1 pt-3">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} onClick={closeNav} className="block px-3 py-2 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
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
