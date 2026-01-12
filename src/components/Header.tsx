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
  
  // Initialize theme from localStorage
  useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
          setTheme(savedTheme);
      }
  }, []);
  
  const toggleTheme = () => {
      setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md w-full">
        <nav className="border-gray-200 lg:px-6 py-2.5 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="#">
            <span className="items-start text-xl font-semibold whitespace-nowrap dark:text-white ">
              SD
            </span>
          </a>

          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "top-14 left-0 w-full bg-white dark:bg-gray-900 dark:text-white shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-6"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <li>
                <a
                  href="#About"
                  className=" py-2 pr-4 pl-3 text-gray-700 dark:text-white rounded md:bg-transparent md:text-primary-700 md:p-0"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="py-2 pr-4 pl-3 text-gray-700 dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1P6KMIizBk13SgCzxZytd_UhvqIlL44V6/view?usp=sharing" target="_blank"
                  className="py-2 pr-4 pl-3 text-gray-700 dark:text-white  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                >
                  Experience
                </a>
              </li>
            </ul>
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg dark:text-yellow-400 dark:bg-slate-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
            </button>
          
          </div>
          

          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
        </>
    )
};