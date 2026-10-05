import type { CaseStudy as CaseStudyData } from "../types/project";
import { useLanguage } from "../i18n/language";
import TechBadge from "./TechBadge";
import PhoneFrame from "./PhoneFrame";
import { FiExternalLink } from "react-icons/fi";

export default function CaseStudy({ study }: { study: CaseStudyData }) {
    const { t, l } = useLanguage();
    const headingId = `case-study-${study.name.toLowerCase()}`;

    return (
        <article
            aria-labelledby={headingId}
            className="text-left bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 sm:p-10"
        >
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-300">
                {t.projects.featured}
            </p>
            <h3 id={headingId} className="mt-1 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {study.name}
            </h3>
            <p className="mt-1 text-lg text-gray-700 dark:text-gray-200">{l(study.tagline)}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
                <span>{l(study.status)}</span>
            </p>
            {study.prototypeUrl && (
                <a
                    href={study.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 hover:text-white transition-colors"
                >
                    <FiExternalLink aria-hidden="true" />
                    {t.caseStudy.viewPrototype}
                    <span className="sr-only"> ({t.projects.newTab})</span>
                </a>
            )}

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                    <section>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{t.caseStudy.problem}</h4>
                        <p className="mt-1 text-gray-700 dark:text-gray-200">{l(study.problem)}</p>
                    </section>
                    <section>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{t.caseStudy.role}</h4>
                        <p className="mt-1 text-gray-700 dark:text-gray-200">{l(study.role)}</p>
                    </section>
                    <section>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{t.caseStudy.stack}</h4>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {study.stack.map((name) => (
                                <TechBadge key={name} name={name} size="sm" />
                            ))}
                        </ul>
                    </section>
                </div>

            </div>

            {study.screenshots.length > 0 && (
                <section className="mt-10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.caseStudy.screenshots}</h4>
                    <div className="mt-4 flex gap-6 overflow-x-auto pb-4 snap-x" tabIndex={0} aria-label={t.caseStudy.screenshots}>
                        {study.screenshots.map((img) => (
                            <div key={img.src} className="snap-start">
                                <PhoneFrame image={img} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
}
