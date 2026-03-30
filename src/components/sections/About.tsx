import { TbFileDownload } from "react-icons/tb";
import TechStack from "../TechStack";

export default function About() {
    return (
        <section id="About" className="bg-[#E3E3E3] dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:py-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 min-h-[400px]">
                    <div className="flex-1 flex flex-col items-center lg:items-center text-center">
                        <h1 className="mb-4 text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-[#162327] dark:text-white">
                            Hi, I'm Safietou 👋
                        </h1>
                        <p className="mb-6 font-light text-base sm:text-lg lg:text-xl text-[#162327] dark:text-white max-w-xl">
                            I'm a computer science student who likes exploring her creative mind and building cool things.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="https://drive.google.com/file/d/1P6KMIizBk13SgCzxZytd_UhvqIlL44V6/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium rounded-lg text-gray-900 dark:text-white border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                Resume <TbFileDownload />
                            </a>
                            <a
                                href="#Contact"
                                className="inline-flex items-center px-5 py-3 text-base font-medium text-gray-900 dark:text-white border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors focus:ring-4 focus:ring-gray-100"
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-shrink-0">
                        <img
                            src="/images/safie.png"
                            alt="Photo of Safietou"
                            className="photo max-h-96 w-auto object-contain"
                        />
                    </div>
                </div>
                <TechStack />
            </div>
        </section>
    );
}