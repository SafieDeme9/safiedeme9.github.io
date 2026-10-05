import type { JSX } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiTailwindcss, SiHuggingface, SiFlask, SiFastapi, SiMysql,
    SiExpo, SiNextdotjs, SiSupabase, SiPostgresql, SiVercel, SiTelegram,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

/** Icon for each technology name used in the stack rows and on project cards. */
export const techIcons: Record<string, JSX.Element> = {
    "React": <FaReact className="text-cyan-500" />,
    "React Native": <TbBrandReactNative className="text-cyan-500" />,
    "Expo": <SiExpo className="text-gray-900 dark:text-white" />,
    "EAS Build": <SiExpo className="text-gray-900 dark:text-white" />,
    "TypeScript": <SiTypescript className="text-blue-600" />,
    "Next.js": <SiNextdotjs className="text-gray-900 dark:text-white" />,
    "Tailwind": <SiTailwindcss className="text-cyan-500" />,
    "Supabase": <SiSupabase className="text-emerald-500" />,
    "PostgreSQL": <SiPostgresql className="text-sky-700 dark:text-sky-400" />,
    "Vercel": <SiVercel className="text-gray-900 dark:text-white" />,
    "HTML": <FaHtml5 className="text-orange-500" />,
    "CSS": <FaCss3Alt className="text-blue-500" />,
    "JavaScript": <SiJavascript className="text-yellow-500" />,
    "Python": <FaPython className="text-blue-700 dark:text-blue-400" />,
    "Flask": <SiFlask className="text-gray-800 dark:text-gray-300" />,
    "FastAPI": <SiFastapi className="text-teal-500" />,
    "MySQL": <SiMysql className="text-sky-700 dark:text-sky-400" />,
    "Docker": <FaDocker className="text-blue-400" />,
    "HuggingFace": <SiHuggingface className="text-yellow-600" />,
    "Telegram": <SiTelegram className="text-sky-500" />,
};

export const primaryStack = ["React", "React Native", "Expo", "TypeScript", "Next.js", "Tailwind", "Supabase", "PostgreSQL"];

export const alsoUsedStack = ["HTML", "CSS", "JavaScript", "Python", "Flask", "FastAPI", "MySQL", "Docker"];
