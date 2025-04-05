import Icon from '@/components/wrappers/Icon';
import Image from 'next/image';

export default function NewStudentsPage() {
    const gradYear = new Date().getFullYear() + 4;
    return (
        <div className='text-center p-5'>
            <h1 className='text-5xl font-bold mb-4'>Welcome, class of <span className='text-msa-blue'>{gradYear}</span>!</h1>
            <p>
                As a Muslim Bruin, you&apos;ll be part of one of the largest Muslim student organizations on the West Coast.
                The UCLA MSA is here to support you throughout your college journey, no matter which path you plan to take.
            </p>
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
                <h2 className='text-4xl font-semibold my-3'>Must-Knows</h2>
                <p>
                    This Al-Talib article by MSA member Mahnoor Ahmad details important MSA resources
                    that every incoming Muslim Bruin should know about. Go give it a read!
                </p>
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
            </section>
        </div>
    )
}