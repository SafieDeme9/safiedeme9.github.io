import { TbFileDownload } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import TechStack from "../TechStack";
import { useLanguage } from "../../i18n/language";

const RESUME_URL = "https://drive.google.com/file/d/1P6KMIizBk13SgCzxZytd_UhvqIlL44V6/view?usp=sharing";

/** Staggered entrance; see .enter-rise / .enter-slide in index.css. */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section id="top" className="bg-ground pb-16 pt-14 transition-colors duration-500 dark:bg-gray-800 sm:pb-[72px] sm:pt-[88px]">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
                    <div>
                        <p className="enter-rise text-[13px] font-bold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300" style={delay(60)}>
                            {t.hero.role}
                        </p>
                        <h1 className="enter-slide mb-5 mt-3.5 text-[42px] font-extrabold leading-[1.08] tracking-tight sm:text-[64px]" style={delay(140)}>
                            {t.hero.greeting}{" "}
                            <span className="wave" role="img" aria-label={t.hero.wave}>👋</span>
                        </h1>
                        <p className="enter-rise mb-2.5 max-w-xl text-lg sm:text-xl" style={delay(220)}>
                            {t.hero.lead}
                        </p>
                        <p className="enter-rise max-w-xl text-gray-600 dark:text-gray-300" style={delay(220)}>
                            {t.hero.sub}
                        </p>
                        <p
                            className="enter-rise mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold dark:bg-gray-900"
                            style={delay(300)}
                        >
                            <FaLocationDot className="text-blue-700 dark:text-blue-300" aria-hidden="true" />
                            {t.hero.location}
                        </p>
                        <div className="enter-rise mt-7 flex flex-wrap gap-3" style={delay(380)}>
                            <a
                                href="#Contact"
                                className="inline-flex min-h-12 items-center rounded-xl bg-blue-600 px-[22px] font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-px hover:bg-blue-700 hover:shadow-xl active:scale-[0.97]"
                            >
                                {t.hero.contact}
                            </a>
                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border-[1.5px] border-ink px-[22px] font-bold transition hover:bg-white active:scale-[0.97] dark:border-gray-200 dark:hover:bg-gray-900"
                            >
                                {t.hero.resume}
                                <TbFileDownload className="text-lg" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div className="enter-slide relative order-first mx-auto w-[220px] lg:order-none lg:w-[320px]" style={delay(220)}>
                        <div className="absolute inset-[28px_-18px_-18px_28px] rotate-3 rounded-[28px] bg-blue-600" aria-hidden="true" />
                        <img
                            src="/images/safie.webp"
                            srcSet="/images/safie-245.webp 245w, /images/safie.webp 490w"
                            sizes="(min-width: 1024px) 320px, 220px"
                            alt={t.hero.photoAlt}
                            width={490}
                            height={698}
                            fetchPriority="high"
                            className="relative block aspect-[4/5] w-full rounded-[28px] bg-white object-cover object-top shadow-2xl shadow-ink/20"
                        />
                    </div>
                </div>

                <div className="enter-rise mt-14 sm:mt-16" style={delay(380)}>
                    <TechStack />
                </div>
            </div>
        </section>
    );
}
