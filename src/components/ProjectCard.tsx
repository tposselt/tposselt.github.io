import type { Project } from "@/data/ProjectData";

export default function ProjectCard(project: Project, id: string) {
    const projectImageUrl = new URL(`../assets/project-images/${id}.png`, import.meta.url).href;
    return (
        <div className="card project-card">
            <img src={projectImageUrl} />
            <h3> { project.projectName } </h3>
            <p className="faint"> { project.madeFor } </p>
            <hr className="rounded" />
            <p> { project.technologies } </p>
            <p> { project.role } </p>
        </div>
    );
}