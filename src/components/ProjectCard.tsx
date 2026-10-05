import { FaGithub, FaLock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import TechBadge from "./TechBadge";
import type { Project } from "../types/project";
import { useLanguage } from "../i18n/language";

const linkClass =
  "flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, tech, repoUrl, liveUrl, image } = project;
  const { t } = useLanguage();

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
          <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">{t.projects.techStack}</h4>
          <ul className="flex flex-wrap justify-center gap-2">
            {tech.map((item) => (
              <TechBadge key={item} name={item} size="sm" />
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {repoUrl ? (
            <a href={repoUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg" aria-hidden="true" />
              {t.projects.code}
              <span className="sr-only">: {name} ({t.projects.newTab})</span>
            </a>
          ) : project.private ? (
            <span className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-600">
              <FaLock aria-hidden="true" />
              {t.projects.privateRepo}
            </span>
          ) : null}
          {liveUrl && (
            <a href={liveUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-lg" aria-hidden="true" />
              {t.projects.liveDemo}
              <span className="sr-only">: {name} ({t.projects.newTab})</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
