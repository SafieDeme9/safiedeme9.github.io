import type { CaseStudy as CaseStudyData } from "../types/project";
import { useLanguage } from "../i18n/language";
import TechBadge from "./TechBadge";
import PhoneFrame from "./PhoneFrame";
import { FaLock } from "react-icons/fa";

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
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 dark:bg-gray-600 px-2 py-0.5 font-medium">
                    <FaLock aria-hidden="true" /> {t.projects.privateRepo}
                </span>
            </p>

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

                <section>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.caseStudy.challenges}</h4>
                    <dl className="mt-2 space-y-4">
                        {study.challenges.map((c) => (
                            <div key={c.title.en} className="rounded-lg bg-white/70 dark:bg-gray-900/40 p-4">
                                <dt className="font-medium text-gray-900 dark:text-white">{l(c.title)}</dt>
                                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-200">{l(c.body)}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
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
