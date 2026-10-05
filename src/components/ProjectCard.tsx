import type { JSX } from "react";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker, FaLock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiJavascript, SiTypescript, SiTailwindcss, SiHuggingface } from "react-icons/si";
import type { Project } from "../types/project";

const techIcons: { [key: string]: JSX.Element } = {
  "HTML": <FaHtml5 className="text-orange-500" />,
  "CSS": <FaCss3Alt className="text-blue-500" />,
  "React": <FaReact className="text-cyan-400" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Tailwind": <SiTailwindcss className="text-cyan-500" />,
  "Python": <FaPython className="text-blue-700" />,
  "Docker": <FaDocker className="text-blue-400" />,
  "HuggingFace": <SiHuggingface className="text-yellow-600" />,
};

const linkClass =
  "flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, tech, repoUrl, liveUrl, image } = project;

  return (
    <article className="w-full bg-white dark:bg-gray-700 dark:text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 transform hover:-translate-y-1">
      {image && (
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-48 object-cover"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="p-6 text-center sm:p-7 md:p-6 xl:p-7">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
        <p className="mb-4 text-base leading-relaxed text-gray-600 dark:text-white">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Tech Stack:</h4>
          <ul className="flex flex-wrap justify-center gap-3">
            {tech.map((t) => (
              <li
                key={t}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <span className="text-lg" aria-hidden="true">
                  {techIcons[t] ?? <span className="block w-4 h-4 bg-gray-300 rounded-full" />}
                </span>
                <span className="text-xs font-medium text-gray-700 dark:text-white ml-1">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {repoUrl ? (
            <a href={repoUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg" aria-hidden="true" />
              Code
              <span className="sr-only"> for {name} (opens in a new tab)</span>
            </a>
          ) : project.private ? (
            <span className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-600">
              <FaLock aria-hidden="true" />
              Private repo
            </span>
          ) : null}
          {liveUrl && (
            <a href={liveUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-lg" aria-hidden="true" />
              Live Demo
              <span className="sr-only"> of {name} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
