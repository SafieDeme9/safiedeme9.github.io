import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../i18n/language";
import type { Project } from "../types/project";

const linkClass =
  "inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-500 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white";

/** Code / Private repo / Live buttons. Links that don't exist are not rendered. */
export default function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage();
  const { name, repoUrl, liveUrl, liveKind = "demo" } = project;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {repoUrl ? (
        <a href={repoUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-lg" aria-hidden="true" />
          {t.projects.code}
          <span className="sr-only">: {name} ({t.projects.newTab})</span>
        </a>
      ) : null}
      {liveUrl && (
        <a href={liveUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
          <FiExternalLink className="text-lg" aria-hidden="true" />
          {liveKind === "site" ? t.projects.liveSite : t.projects.liveDemo}
          <span className="sr-only">: {name} ({t.projects.newTab})</span>
        </a>
      )}
    </div>
  );
}
