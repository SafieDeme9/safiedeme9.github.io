import type { JSX } from "react";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiJavascript, SiTypescript, SiTailwindcss, SiHuggingface } from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  "HTML": <FaHtml5 className="text-orange-500" />,
  "CSS": <FaCss3Alt className="text-blue-500" />,
  "React Js": <FaReact className="text-cyan-400" />,
  "React": <FaReact className="text-cyan-400" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Tailwind": <SiTailwindcss className="text-cyan-500" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-500" />,
  "Python": <FaPython className="text-blue-700" />,
  "Docker": <FaDocker className="text-blue-400" />,
  "HuggingFace": <SiHuggingface className="text-yellow-600" />,
};

export default function ProjectCard(Project: any) {
  return (
    <>
      <div className="w-full bg-white dark:bg-gray-700 dark:text-white rounded-xl shadow-lg 
              hover:shadow-xl transition-shadow duration-300 
              p-6 transform hover:-translate-y-1">
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-48 object-cover"
            src={Project.pic}
            alt="Project image"
          />
        </div>
        <div className="p-6 text-center sm:p-7 md:p-6 xl:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            {Project.name}
          </h3>
          <p className="mb-4 text-base leading-relaxed text-gray-600 dark:text-white">
            {Project.desc}
          </p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Tech Stack:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {Project.tech && Project.tech.map((tech: string, index: number) => (
                <div 
                  key={index} 
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  title={tech}
                >
                  <span className="text-lg">
                    {techIcons[tech] || <div className="w-4 h-4 bg-gray-300 rounded-full" />}
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-white ml-1">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <a
              href={Project.git ? Project.git : "#"}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition 
              hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg" />
              Code
            </a>
            <a
              href={Project.link ? Project.link : "#"}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition 
              hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-lg" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}