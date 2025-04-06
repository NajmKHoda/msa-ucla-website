import Image from 'next/image';
import projects from '@/../data/projects.json';
import Icon from '../wrappers/Icon';
import Link from 'next/link';

interface ProjectCardProps {
    projectId: keyof typeof projects;
}

export default function ProjectCard({ projectId }: ProjectCardProps) {
    const project = projects[projectId];

    return (
        <Link href={`/initiatives/projects/${projectId}`} className='flex items-center gap-3 p-3 bg-bg-secondary rounded-lg hover:shadow-lg transition-shadow'>
            <Image src={`/images/projects/${projectId}.png`}
                width={90} height={90}
                alt={`${project.name} logo`} 
                className='rounded-lg' />
            <p>
                <span className='text-2xl text-msa-blue font-semibold'>{project.shortName}</span>
                <br/>
                {project.summary}
            </p>
            <Icon name='chevron_right' size={48} className='ml-auto' />
        </Link>
    );
}