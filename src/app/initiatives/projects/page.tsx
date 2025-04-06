import ProjectCard from '@/components/info/ProjectCard';
import projects from '@/../data/projects.json';

export default function MSAProjectsPage() {
    return (
        <div className='flex flex-col flex-1 justify-center p-8 gap-6'>
            <h1 className='text-4xl sm:text-5xl text-center font-bold'>
                <span className='text-msa-blue'>One</span> MSA.
                <br/>
                <span className='text-msa-blue'>Several</span> projects.
            </h1>
            <p className='text-center'>
                Discover the impactful projects of the UCLA MSA. From professional development to educational outreach,
                our projects aim to support and uplift both Muslim Bruins and the greater Los Angeles community.
                Explore each initiative to learn more about our work and how you can get involved.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {Object.keys(projects).map(id => (
                    <ProjectCard key={id} projectId={id as keyof typeof projects} />
                ))}
            </div>
        </div>
    );
}