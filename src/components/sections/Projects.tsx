import projects from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Projects() {
    return(
        <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
            <h3 className="items-start text-2xl text-blue-500">Projects</h3>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
                <ProjectCard
                name = {projects[0].name}
                pic = {projects[0].pic}
                desc = {projects[0].desc}
                git = {projects[0].git}
                link = {projects[0].link}
                />
                <ProjectCard
                name = {projects[1].name}
                pic = {projects[1].pic}
                desc = {projects[1].desc}
                git = {projects[1].git}
                link = {projects[1].link}
                />
                <ProjectCard
                name = {projects[2].name}
                pic = {projects[2].pic}
                desc = {projects[2].desc}
                git = {projects[2].git}
                link = {projects[2].link}
                />
            </div>
    </section>
    );
}
