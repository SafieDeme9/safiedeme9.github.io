import jobs from "../../data/jobs";
import { useLanguage } from "../../i18n/language";
import type { Lang } from "../../i18n/types";
import type { YearMonth } from "../../types/job";

function formatMonth({ year, month }: YearMonth, lang: Lang) {
    return new Intl.DateTimeFormat(lang, { month: "short", year: "numeric" }).format(new Date(year, month - 1));
}

function toDateTime({ year, month }: YearMonth) {
    return `${year}-${String(month).padStart(2, "0")}`;
}

export default function Experience() {
    const { lang, t, l } = useLanguage();

    return (
        <section id="Experience" className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 dark:text-white mb-10 text-center">
                    {t.experience.heading}
                </h2>
                <ol className="relative border-s-2 border-gray-300 dark:border-gray-600 space-y-10 text-left">
                    {jobs.map((job) => (
                        <li key={job.company} className="ms-6">
                            <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-gray-900 bg-blue-500" aria-hidden="true" />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                {l(job.title)}
                                <span className="block text-base font-medium text-blue-600 dark:text-blue-300">{job.company}</span>
                            </h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                <time dateTime={toDateTime(job.start)}>{formatMonth(job.start, lang)}</time>
                                {" – "}
                                {job.end ? (
                                    <time dateTime={toDateTime(job.end)}>{formatMonth(job.end, lang)}</time>
                                ) : (
                                    t.experience.present
                                )}
                                {" · "}
                                {l(job.location)}
                            </p>
                            <ul className="mt-3 list-disc ps-5 space-y-1.5 text-gray-700 dark:text-gray-200">
                                {job.bullets.map((bullet) => (
                                    <li key={bullet.en}>{l(bullet)}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
