import type { CaseStudy as CaseStudyData } from "../types/project";
import { useLanguage } from "../i18n/language";
import TechBadge from "./TechBadge";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

const phoneTilts = ["left", "none", "right"] as const;

export default function CaseStudy({ study }: { study: CaseStudyData }) {
    const { t, l } = useLanguage();
    const headingId = `case-study-${study.name.toLowerCase()}`;

    return (
        <Reveal
            as="article"
            className="rounded-3xl bg-white p-6 shadow-2xl shadow-ink/10 transition-colors duration-500 dark:bg-gray-900 sm:p-12"
        >
            <div className="grid items-start gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300">{t.projects.featured}</p>
                    <h3 id={headingId} className="mt-2 text-[32px] font-extrabold tracking-tight sm:text-[40px]">
                        {study.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">{l(study.tagline)}</p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{l(study.status)}</p>

                    <h4 className="mt-7 font-bold">{t.caseStudy.problem}</h4>
                    <p className="mt-1.5">{l(study.problem)}</p>

                    <h4 className="mt-6 font-bold">{t.caseStudy.role}</h4>
                    <p className="mt-1.5">{l(study.role)}</p>

                    <h4 className="mt-6 font-bold">{t.caseStudy.stack}</h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                        {study.stack.map((name) => (
                            <TechBadge key={name} name={name} size="sm" />
                        ))}
                    </ul>
                </div>

                {study.screenshots.length > 0 && (
                    <div>
                        <h4 className="sr-only">{t.caseStudy.screenshots}</h4>
                        <ul className="flex items-start justify-center gap-2.5 pb-8 pt-2 sm:gap-[18px] lg:pt-5">
                            {study.screenshots.map((image, i) => (
                                <Reveal as="li" key={image.src} delay={i * 120} className="w-[31%] max-w-[172px]">
                                    <PhoneFrame image={image} tilt={phoneTilts[i % phoneTilts.length]} />
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Reveal>
    );
}
