import ThumbnailPage from '@/components/layout/ThumbnailPage';
import Icon from '@/components/wrappers/Icon';
import Image from 'next/image';
import Link from 'next/link';

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
                <div className='flex flex-col items-center justify-center p-4 gap-3 text-2xl rounded-xl bg-bg-secondary'>
                    <Image
                        src='/images/glyphs/insta_black.svg'
                        alt='Instagram logo'
                        width={128} height={128} />
                    <div className='text-center'>
                        <h2 className='font-semibold text-msa-blue'>Instagram DMs</h2>
                        <Link href="https://www.instagram.com/yourprofile">@msa_ucla</Link>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center p-4 gap-3 text-2xl rounded-xl bg-bg-secondary'>
                    <Icon name='stacked_email' size={128} />
                    <div className='text-center'>
                        <h2 className='font-semibold text-msa-blue'>Email</h2>
                        <Link href="mailto:msa.ucla@gmail.com">msa.ucla@gmail.com</Link>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-2 flex flex-col items-center justify-center p-4 gap-3 text-2xl rounded-xl bg-bg-secondary'>
                    <Icon name='location_on' size={128} />
                    <div className='text-center'>
                        <h2 className='font-semibold text-msa-blue'>MSA Room</h2>
                        <p>
                            146 Kerckhoff Hall<br />
                            308 Westwood Plaza<br />
                            Los Angeles, CA 90024
                        </p>
                    </div>
                </div>
            </div>
        </ThumbnailPage>
    );
}