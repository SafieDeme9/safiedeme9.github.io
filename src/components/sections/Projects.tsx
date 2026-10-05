import projects from "../../data/projects"
import ProjectCard from "../ProjectCard"
import { useLanguage } from "../../i18n/language"

export default function Projects() {
    const { t } = useLanguage();
    return(
        <section id="Projects" className="bg-white pb-10 pt-20 dark:bg-gray-900 lg:pb-20 lg:pt-[120px] dark:text-white ">
            <h2 className="text-4xl text-blue-500 dark:text-white font-bold p-0 mx-0">{t.projects.heading}</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
    </section>
    );
}
