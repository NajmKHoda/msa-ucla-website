import { notFound } from 'next/navigation';
import ProjectTemplate from './ProjectTemplate';
import projects from '@/../data/projects.json';

interface PageParams {
    params: {
        id: string;
    };
}

interface Project {
    name: string;
    summary: string;
    description: string;
    directors: string[];
    website?: string;
    email: string;
    instagram: string;
}

export default function ProjectPage({ params }: PageParams) {
    const { id } = params;
    
    if (id in projects === false) notFound();
    const project: Project = projects[id as keyof typeof projects];
    
    return (
        <ProjectTemplate 
            id={id}
            name={project.name}
            summary={project.summary}
            description={project.description}
            directors={project.directors}
            website={project.website}
            email={project.email}
            instagram={project.instagram} />
    );
}