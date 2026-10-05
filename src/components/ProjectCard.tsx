import TechBadge from "./TechBadge";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "../types/project";
import { useLanguage } from "../i18n/language";

type ProjectCardProps = {
  project: Project;
  /** Compact variant for the "Other projects" row: no image, smaller type. */
  compact?: boolean;
};

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { name, description, tech, image } = project;
  const { t, l } = useLanguage();

  return (
    <article
      className={`flex flex-col w-full bg-white dark:bg-gray-700 dark:text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${compact ? "p-5" : "p-6"}`}
    >
      {image && !compact && (
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full transition duration-200 ease-in-out transform hover:scale-105 rounded-lg h-48 object-cover"
            src={image.src}
            alt={l(image.alt)}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className={`flex flex-col flex-1 text-center ${compact ? "" : "p-4 sm:p-6"}`}>
        <h3 className={`font-bold text-gray-800 dark:text-white mb-2 ${compact ? "text-base" : "text-lg"}`}>{name}</h3>
        <p className={`mb-4 leading-relaxed text-gray-600 dark:text-gray-100 ${compact ? "text-sm" : "text-base"}`}>
          {l(description)}
        </p>

        <div className="mb-5 mt-auto">
          <h4 className="sr-only">{t.projects.techStack}</h4>
          <ul className="flex flex-wrap justify-center gap-2">
            {tech.map((item) => (
              <TechBadge key={item} name={item} size="sm" />
            ))}
          </ul>
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
