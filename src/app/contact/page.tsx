import ThumbnailPage from '@/components/layout/ThumbnailPage';
import Icon from '@/components/wrappers/Icon';
import ResourceCard from '@/components/common/ResourceCard';
import Image from 'next/image';

export default function ContactPage() {

    return (
        <ThumbnailPage
            thumbnailImage='/images/contact.jpg'
            imageAlt='A group of Muslim men praying in Ackerman Grand Ballroom at UCLA.'
            className='text-center py-2 md:py-8 p-4'
        >
            <h1 className='text-5xl font-bold'>Contact Us</h1>
            <p className='my-4'>Want to learn more about the UCLA MSA? There are a variety of ways to contact our organization.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <ResourceCard 
                    url="https://www.instagram.com/msa_ucla"
                    icon={
                        <Image
                            src='/images/glyphs/insta_black.svg'
                            alt='Instagram logo'
                            width={128} height={128} />
                    }
                >
                    <h2 className='font-semibold text-msa-blue'>Instagram DMs</h2>
                    <p>@msa_ucla</p>
                </ResourceCard>
                
                <ResourceCard 
                    url="mailto:msa.ucla@gmail.com"
                    icon={<Icon name='stacked_email' size={128} />}
                >
                    <h2 className='font-semibold text-msa-blue'>Email</h2>
                    <p>msa.ucla@gmail.com</p>
                </ResourceCard>
                
                <ResourceCard 
                    url="https://maps.app.goo.gl/eRRsH1CvDoNACQmA7" 
                    icon={<Icon name='location_on' size={128} />}
                    className="col-span-1 md:col-span-2"
                >
                    <h2 className='font-semibold text-msa-blue'>MSA Room</h2>
                    <p>
                        146 Kerckhoff Hall<br />
                        308 Westwood Plaza<br />
                        Los Angeles, CA 90024
                    </p>
                </ResourceCard>
            </div>
        </ThumbnailPage>
    );
}