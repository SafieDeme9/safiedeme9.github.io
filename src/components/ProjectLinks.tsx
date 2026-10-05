import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n/language";
import type { Project } from "../types/project";

const linkClass =
  "inline-flex min-h-10 items-center gap-1.5 rounded-[10px] border border-gray-300 px-3.5 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800";

/** Code / Live buttons. Links that don't exist are not rendered. */
export default function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage();
  const { name, repoUrl, liveUrl, liveKind = "demo" } = project;
  if (!repoUrl && !liveUrl) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {repoUrl && (
        <a href={repoUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" />
          {t.projects.code}
          <span className="sr-only">: {name} ({t.projects.newTab})</span>
        </a>
      )}
      {liveUrl && (
        <a href={liveUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
          {liveKind === "site" ? t.projects.liveSite : t.projects.liveDemo}
          <FiArrowUpRight aria-hidden="true" />
          <span className="sr-only">: {name} ({t.projects.newTab})</span>
        </a>
      )}
    </div>
  );
}
