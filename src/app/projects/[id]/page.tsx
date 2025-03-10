import { notFound } from 'next/navigation';
import ProjectTemplate from './ProjectTemplate';
import projects from '@/../data/projects.json';

interface PageParams {
    params: Promise<{
        id: string;
    }>;
}

interface Project {
    name: string;
    shortName: string;
    summary: string;
    description: string;
    directors: string[];
    website?: string;
    email: string;
    instagram: string;
}

export default async function ProjectPage({ params }: PageParams) {
    const { id } = await params;
    
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

export function generateStaticParams() {
    return Object.keys(projects).map(id => ({ id }));
}