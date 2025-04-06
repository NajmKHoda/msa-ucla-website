import ThumbnailPage from '@/components/layout/ThumbnailPage';
import Icon from '@/components/wrappers/Icon';
import ResourceCard from '@/components/common/ResourceCard';

export default function ResourcesPage() {

    return (
        <ThumbnailPage
            thumbnailImage='/images/resources.jpg'
            imageAlt='A group of Muslim students talking on a brigt sunny day.'
            imagePosition='50% 25%'
            className='text-center py-2 md:py-8 p-4'
        >
            <h1 className='text-5xl font-bold'>Resources</h1>
            <p className='my-4'>The UCLA MSA is here to support your college journey throughout your time at UCLA. Check out some resources you may find helpful here.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <ResourceCard 
                    url="https://linktr.ee/uclamsa"
                    icon={<Icon name='flowchart' size={128} />}
                >
                    <h2 className='font-semibold text-msa-blue'>Linktree</h2>
                </ResourceCard>
                
                <ResourceCard 
                    url="https://msabruins.us5.list-manage.com/subscribe?u=afd87c320d17a0be7b1a0ac9a&id=3f7c841056"
                    icon={<Icon name='newspaper' size={128} />}
                >
                    <h2 className='font-semibold text-msa-blue'>Newsletter</h2>
                </ResourceCard>
                
                <ResourceCard 
                    url="/resources/new-students" 
                    icon={<Icon name='diversity_3' size={128} />}
                >
                    <h2>New Students</h2>
                </ResourceCard>

                <ResourceCard 
                    url="/resources/chaplaincy" 
                    icon={<Icon name='mosque' size={128} />}
                >
                    <h2>Chaplaincy</h2>
                </ResourceCard>
            </div>
        </ThumbnailPage>
    );
}