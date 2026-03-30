import { useState, useEffect } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function Header() {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    const closeNav = () => setNav(false);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md w-full">
            <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center justify-between">

                    <a href="#" className="text-xl font-semibold dark:text-white shrink-0">
                        SD
                    </a>

                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <li>
                            <a href="#About" className="py-2 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#Projects" className="py-2 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1P6KMIizBk13SgCzxZytd_UhvqIlL44V6/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            >
                                Experience
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg dark:text-yellow-400 dark:bg-slate-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
                        </button>

                        <button
                            type="button"
                            className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                            onClick={() => setNav(!nav)}
                        >
                            {nav ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {nav && (
                    <div className="md:hidden mt-3 pb-3 border-t border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-col gap-1 pt-3">
                            <li>
                                <a href="#About" onClick={closeNav} className="block px-3 py-2 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    About me
                                </a>
                            </li>
                            <li>
                                <a href="#Projects" onClick={closeNav} className="block px-3 py-2 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1P6KMIizBk13SgCzxZytd_UhvqIlL44V6/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeNav}
                                    className="block px-3 py-2 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Experience
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}