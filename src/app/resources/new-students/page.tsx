import ImageCarousel from '@/components/animated/ImageCarousel';
import Icon from '@/components/wrappers/Icon';
import Image from 'next/image';

export default function NewStudentsPage() {
    const gradYear = new Date().getFullYear() + 4;
    const numPhotos = 4;
    const photoURLS = Array.from({ length: numPhotos }, (_, i) => `/images/banners/new-students/carousel-${i + 1}.jpg`);

    return (
        <>
        <div className='relative h-[50vh] flex justify-center items-center'>
            <div className='p-2 bg-bg-primary'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold z-10 text-center'>Welcome, class of <span className='text-msa-blue'>{gradYear}</span>!</h1>
            </div>
            <ImageCarousel images={photoURLS} className='-z-10' />
        </div>
        <div className='text-center p-5'>
            <div className='flex justify-center'>
                <p className='max-w-[600px]'>
                    As a Muslim Bruin, you&apos;ll be part of one of the largest Muslim student organizations on the West Coast.
                    The UCLA MSA is here to support you throughout your college journey, no matter which path you plan to take.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 items-center'>
                <section>
                    <h2 className='text-4xl font-semibold my-3'>College Day</h2>
                    <p>
                        The MSA&apos;s College Day introduces new students to life at UCLA through the lens of a Muslim student.
                        It is intended as an additional experience to Bruin Day, serving as a more personalized welcome.
                        You&apos;ll also get to meet other Muslim freshmen and familiarize yourself with important MSA resources.
                    </p>
                </section>
                <section>
                    <h2 className='text-4xl font-semibold my-3'>Welcome Week</h2>
                    <p>
                        During your first week at UCLA, the MSA will host a variety of events to get you settled into our atmosphere.
                        Come see us at Enormous Activities Fair, meet other Muslims from all class levels, and enjoy some amazing food!
                    </p>
                </section>
                <section>
                    <h2 className='text-4xl font-semibold my-3 md:text-start'>Must-Knows</h2>
                    <p className='md:text-start'>
                        This Al-Talib article by MSA member Mahnoor Ahmad details important MSA resources
                        that every incoming Muslim Bruin should know about. Go give it a read!
                    </p>
                </section>
                <div className='flex flex-col items-center p-3 mt-4 bg-bg-secondary rounded-xl'>
                    <Image
                        src='/images/newstudentarticle.png'
                        width={256} height={256}
                        alt='What I Wish I Knew as a New Muslim Student at UCLA thumbnail'
                        className='rounded-xl' />
                    <h3 className='text-2xl font-semibold mt-4'>What I Wish I Knew as a New Muslim Student at UCLA</h3>
                    <p className='mb-4'>By Mahnoor Ahmad</p>
                    <a className='text-msa-blue' href='https://al-talib.org/what-i-wish-i-knew-as-a-new-muslim-student-at-ucla/'>
                        Read article <Icon name='arrow_forward' inline/>
                    </a>

                </div>
            </div>
        </div>
        </>
    )
}