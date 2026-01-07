import projects from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Projects() {
    return(
        <section>
            <div>
                <ProjectCard name= {projects[0].name}
                desc = {projects[0].desc}
                />
            </div>
    </section>
    );
}
