import Icon from '@/components/wrappers/Icon';
import Image from 'next/image';

export default function AlTalibPage() {
    return (
        <div className='flex-grow flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[1fr_min-content] lg:grid-cols-[max-content_1fr] px-10 lg:px-20 py-8 gap-6'>
                <div className='flex justify-center sm:justify-end lg:row-span-2'>
                    <Image className='rounded-2xl object-cover lg:w-auto'
                        src='/projects/al-talib.png'
                        width={250} height={250}
                        alt='Al-Talib logo' />
                </div>
                <div className='flex flex-col justify-center text-center sm:text-left'>
                    <div className='mb-4'>
                        <h1 className='text-4xl'>Al-Talib</h1>
                        <h2 className='text-2xl'>Student newsmagazine</h2>
                    </div>
                    <p className='mb-4'><strong>Director:</strong> Maham Kazmi</p>
                    <div className='self-stretch flex flex-col py-4 sm:py-0 gap-3 border-y-4 sm:border-y-0 border-black'>
                        <a href='https://al-talib.org' className='flex justify-center sm:justify-start gap-1 hover:text-msa-blue transition-colors duration-200 ease-out'>
                            <Icon name='language' size={24} />
                            al-talib.org
                        </a>
                        <a href='mailto:johndoe@example.com' className='flex justify-center sm:justify-start gap-1 hover:text-msa-blue transition-colors duration-200 ease-out'>
                            <Icon name='mail' size={24} />
                            johndoe@example.com
                        </a>
                        <a href='https://www.instagram.com/altalibnewsmag/' className='flex justify-center sm:justify-start gap-1 hover:text-msa-blue transition-colors duration-200 ease-out'>
                            <Image src='/images/glyphs/insta_black.svg' width={24} height={24} alt='Al-Talib Instagram' className='text-black' />
                            @altalibnewsmag
                        </a>
                    </div>
                </div>
                <div className='flex justify-center col-span-1 sm:max-lg:col-span-2'>
                    <p className='text-center lg:text-start'>
                        Al-Talib provides an independent perspective on issues important to Muslim communities.
                        Targeting a college-age audience, it seeks to create an outlet for activism on and off campus,
                        a platform for representation of all facets of the Muslim-American communities and a safe space for sensitive topics.
                        This sort of dialogue, no matter how uncomfortable it might be at times, is necessary in order for the community to appreciate and celebrate its diversity.
                    </p>
                </div>
            </div>
        </div>
    )
}