import { maguette, otherProjects, projects } from "../../data/projects"
import ProjectCard from "../ProjectCard"
import CaseStudy from "../CaseStudy"
import { useLanguage } from "../../i18n/language"

export default function Projects() {
    const { t } = useLanguage();
    return (
        <section id="Projects" className="bg-white pb-10 pt-20 dark:bg-gray-900 lg:pb-20 lg:pt-[120px] dark:text-white">
            <h2 className="text-4xl text-blue-700 dark:text-white font-bold">{t.projects.heading}</h2>
            <div className="max-w-screen-xl mx-auto px-3 sm:px-8">
                <div className="mt-10">
                    <CaseStudy study={maguette} />
                </div>

                <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>

                <h3 className="mt-16 text-2xl font-bold text-gray-800 dark:text-white">{t.projects.other}</h3>
                <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
                    {otherProjects.map((project) => (
                        <ProjectCard key={project.name} project={project} compact />
                    ))}
                </div>
            </div>
        </section>
    );
}
