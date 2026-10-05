import { maguette, otherProjects, projects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import CaseStudy from "../CaseStudy";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/language";

export default function Projects() {
    const { t } = useLanguage();
    return (
        <section id="Projects" aria-labelledby="projects-heading" className="bg-ground py-[72px] transition-colors duration-500 dark:bg-gray-800 sm:py-[104px]">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <SectionHeading id="projects-heading" eyebrow={t.projects.eyebrow} title={t.projects.heading} />

                <CaseStudy study={maguette} />

                <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} delay={i * 100} />
                    ))}
                </div>

                <Reveal as="h3" className="mb-4 mt-16 text-xl font-bold">
                    {t.projects.other}
                </Reveal>
                <div className="grid gap-4 md:grid-cols-2">
                    {otherProjects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} delay={i * 100} compact />
                    ))}
                </div>
            </div>
        </section>
    );
}
