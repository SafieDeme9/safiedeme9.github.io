import Photo from "../Photo";
import { TbFileDownload } from "react-icons/tb";
import TechStack from "../TechStack";

export default function About() {
    return(
        <>
        <section className="bg-[#E3E3E3] dark:bg-gray-800">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#162327] dark:text-white ">Hi, I'm Safietou 👋</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-white">I'm a computer science student who likes exploring her creative mind and building cool things.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 dark:text-white border-gray-300 hover:bg-primary-800">
                        Resume 
                        <TbFileDownload />
                    </a>
                    <a href="#Contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 dark:text-white border border-gray-300 rounded-lg
                    hover:bg-blue-500 hover:text-white shadow-blue-500 focus:ring-4 focus:ring-gray-100">
                        Contact me
                    </a> 
                </div>
            <Photo />     
            <TechStack />
            </div>
        </section>
        </>
    );
}