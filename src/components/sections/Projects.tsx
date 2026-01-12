import projects from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Projects() {
    return(
        <section id="Projects" className="bg-white pb-10 pt-20 dark:bg-gray-900 lg:pb-20 lg:pt-[120px] dark:text-white ">
            <h2 className="text-4xl text-blue-500 dark:text-white font-bold p-0 mx-0">Projects</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    name={project.name}
                    desc={project.desc}
                    tech={project.tech}
                    git={project.git}
                    link={project.link}
                    pic={project.pic}
                    />
                ))}
            </div>
    </section>
    );
}
