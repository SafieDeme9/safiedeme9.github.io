import projects from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Projects() {
    return(
        <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
        <h3 className="items-start text-xl text-blue-500">Projects</h3>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                <ProjectCard
                name = {projects[0].name}
                pic = {projects[0].pic}
                desc = {projects[0].desc}
                git = {projects[0].git}
                link = {projects[0].link}
                />
                <ProjectCard
                name = {projects[1].name}
                pic = {projects[0].pic}
                desc = {projects[1].desc}
                git = {projects[1].git}
                link = {projects[1].link}
                />
            </div>
        </div>
    </section>
    );
}
