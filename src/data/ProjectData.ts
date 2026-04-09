export interface Project {
    projectName: string,
    role: string,
    madeFor: string,
    technologies: string,
}

export const projectList: Record<string, Project> = {
    icarus: {
        projectName: "Icarus Flight Simulator",
        role: "Sole developer",
        madeFor: "Personal project",
        technologies: "C#, Unity, Aseprite, Audacity",
    },
    udig: {
        projectName: "United for Decency in Government Website",
        role: "Full-stack developer and team lead",
        madeFor: "United for Decency in Government",
        technologies: "React, TypeScript, MongoDB, Tailwind, HTML/CSS",
    }
}