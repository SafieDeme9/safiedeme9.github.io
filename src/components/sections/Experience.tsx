import jobs from "../../data/jobs";
import { useLanguage } from "../../i18n/language";
import type { Lang } from "../../i18n/types";
import type { YearMonth } from "../../types/job";
import { useInView } from "../../hooks/useInView";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import TechBadge from "../TechBadge";

function formatMonth({ year, month }: YearMonth, lang: Lang) {
    return new Intl.DateTimeFormat(lang, { month: "short", year: "numeric" }).format(new Date(year, month - 1));
}

function toDateTime({ year, month }: YearMonth) {
    return `${year}-${String(month).padStart(2, "0")}`;
}

export default function Experience() {
    const { lang, t, l } = useLanguage();
    const [lineRef, lineVisible] = useInView<HTMLDivElement>();

    return (
        <section id="Experience" aria-labelledby="experience-heading" className="bg-white py-[72px] transition-colors duration-500 dark:bg-gray-900 sm:py-[104px]">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <SectionHeading id="experience-heading" eyebrow={t.experience.eyebrow} title={t.experience.heading} />

                <div className="relative pl-10">
                    <div
                        ref={lineRef}
                        className={`timeline-line absolute bottom-2 left-[9px] top-2 w-0.5 bg-gray-300 dark:bg-gray-700 ${lineVisible ? "is-visible" : ""}`}
                        aria-hidden="true"
                    />
                    <ol className="space-y-14">
                        {jobs.map((job) => {
                            const current = !job.end;
                            return (
                                <Reveal as="li" key={job.company} className="relative">
                                    <span
                                        className={`timeline-dot absolute -left-10 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-blue-600 dark:border-gray-900 ${current ? "timeline-dot-live after:absolute after:-inset-2 after:rounded-full after:border-2 after:border-blue-600 after:opacity-0" : ""}`}
                                        aria-hidden="true"
                                    />
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
                                        <h3 className="text-xl font-bold leading-snug sm:text-[22px]">
                                            {l(job.title)}
                                            {current && (
                                                <span className="ml-2.5 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 align-middle text-xs font-bold text-blue-700 dark:bg-blue-900/60 dark:text-blue-200">
                                                    {t.experience.current}
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            <time dateTime={toDateTime(job.start)}>{formatMonth(job.start, lang)}</time>
                                            {" – "}
                                            {job.end ? <time dateTime={toDateTime(job.end)}>{formatMonth(job.end, lang)}</time> : t.experience.present}
                                            {" · "}
                                            {l(job.location)}
                                        </p>
                                    </div>
                                    <p className="font-bold text-blue-700 dark:text-blue-300">{job.company}</p>
                                    <ul className="mb-4 mt-3.5 max-w-3xl list-disc space-y-1.5 pl-5">
                                        {job.bullets.map((bullet) => (
                                            <li key={bullet.en}>{l(bullet)}</li>
                                        ))}
                                    </ul>
                                    <ul className="flex flex-wrap gap-1.5" aria-label={t.projects.techStack}>
                                        {job.tech.map((name) => (
                                            <TechBadge key={name} name={name} size="sm" />
                                        ))}
                                    </ul>
                                </Reveal>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
