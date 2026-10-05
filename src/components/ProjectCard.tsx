import TechBadge from "./TechBadge";
import ProjectLinks from "./ProjectLinks";
import Reveal from "./Reveal";
import type { Project } from "../types/project";
import { useLanguage } from "../i18n/language";

type ProjectCardProps = {
  project: Project;
  /** Stagger delay for the reveal animation, in ms. */
  delay?: number;
  /** Compact row for the "Other projects" list: no image, smaller type. */
  compact?: boolean;
};

export default function ProjectCard({ project, delay = 0, compact = false }: ProjectCardProps) {
  const { name, description, tech, image } = project;
  const { t, l } = useLanguage();

  const techList = (
    <ul className="flex flex-wrap gap-1.5" aria-label={t.projects.techStack}>
      {tech.map((item) => (
        <TechBadge key={item} name={item} size="sm" />
      ))}
    </ul>
  );

  if (compact) {
    return (
      <Reveal
        as="article"
        delay={delay}
        className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-5 transition-colors duration-500 dark:bg-gray-900 sm:flex-row sm:items-center sm:px-[22px]"
      >
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="mb-2 mt-0.5 text-sm text-gray-600 dark:text-gray-300">{l(description)}</p>
          {techList}
        </div>
        <ProjectLinks project={project} />
      </Reveal>
    );
  }

  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/15 dark:bg-gray-900"
    >
      {image && (
        <div className="overflow-hidden">
          <img
            className="block h-[180px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            src={image.src}
            srcSet={image.srcSet}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            alt={l(image.alt)}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-[22px]">
        <h3 className="text-[19px] font-bold">{name}</h3>
        <p className="text-[14.5px] text-gray-600 dark:text-gray-300">{l(description)}</p>
        {techList}
        <div className="mt-auto pt-1.5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}
