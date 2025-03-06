import Icon from '@/components/wrappers/Icon';
import Image from 'next/image';

export interface ProjectTemplateProps {
    id: string;
    name: string;
    summary: string;
    description: string;
    directors: string[];
    website?: string;
    email: string;
    instagram: string;
}

export default function ProjectTemplate({
    id,
    name,
    summary,
    description,
    directors,
    website,
    email,
    instagram,
}: ProjectTemplateProps) {
    return (
        <div className='flex-grow flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[1fr_min-content] lg:grid-cols-[max-content_1fr] px-10 lg:px-20 py-8 gap-6'>
                <div className='flex justify-center sm:justify-end lg:row-span-2'>
                    <Image className='rounded-2xl object-cover lg:w-auto'
                        src={`/images/projects/${id}.png`}
                        width={250} height={250}
                        alt={`${name} logo`} />
                </div>
                <div className='flex flex-col justify-center text-center sm:text-left'>
                    <div className='mb-4'>
                        <h1 className='text-4xl font-bold'>{name}</h1>
                        <h2 className='text-2xl'>{summary}</h2>
                    </div>
                    {directors.length > 0 && (
                        <p className='mb-4'>
                            <strong>{directors.length > 1 ? 'Directors:' : 'Director:'}</strong> {directors.join(', ')}
                        </p>
                    )}
                    <div className='self-stretch flex flex-col py-4 sm:py-0 gap-3 border-y-4 sm:border-y-0 border-black'>
                        {website && (
                        <a href={website} className='flex justify-center sm:justify-start gap-1 hover:text-msa-blue transition-colors duration-200 ease-out'>
                            <Icon name='language' size={24} />
                            {new URL(website).hostname}
                        </a>
                        )}
                        <a href={`mailto:${email}`} className='flex justify-center sm:justify-start gap-1 hover:text-msa-blue transition-colors duration-200 ease-out'>
                            <Icon name='mail' size={24} />
                            {email}
                        </a>
                        <a 
                            href={`https://www.instagram.com/${instagram.substring(1)}/`} 
                            className='flex justify-center sm:justify-start gap-1 hover:text-msa-blue transition-colors duration-200 ease-out'
                        >
                            <Image src='/images/glyphs/insta_black.svg' width={24} height={24} alt={`${name} Instagram`} className='text-black' />
                            {instagram}
                        </a>
                    </div>
                </div>
                <div className='flex justify-center col-span-1 sm:max-lg:col-span-2'>
                    <p className='text-center lg:text-start'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
