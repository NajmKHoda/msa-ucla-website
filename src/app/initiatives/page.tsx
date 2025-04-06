import ThumbnailPage from '@/components/layout/ThumbnailPage';
import Icon from '@/components/wrappers/Icon';
import Link from 'next/link';

export default function InitiativesPage() {
    return (
        <ThumbnailPage
            thumbnailImage='/images/initiatives.jpg'
            imageAlt='Muslim women (left) serving food such as sushi to other students (right).'
            className='flex flex-col justify-center text-center px-8 py-2 md:py-8 gap-6'
        >
            <h1 className='text-5xl'>Faith through <span className='text-msa-blue'>action</span>.</h1>
            <p>
                The UCLA MSA believes that faith is more than just belief—it&apos;s action.
                Our initiatives bring together students to serve, uplift, and strengthen our Muslim community while embodying the values of Islam.
                Whether through advocacy, service, education, or social engagement, each of our projects and committees is dedicated to making a tangible impact on campus and beyond.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <section className='flex flex-col gap-2'>
                <h2 className='text-4xl'>Committees</h2>
                <p>
                    Committees operate directly under the MSA, giving members a way to get involved
                    in critical functions such as planning end-of-year banquets and facilitating the Ramadan experience.
                </p>
                <Link href='/committees' className='flex justify-center items-center text-2xl text-msa-blue'>View all committees <Icon name='chevron_right'/></Link>
            </section>
            <section className='flex flex-col gap-2'>
                <h2 className='text-4xl'>Projects</h2>
                <p>
                    Projects are independent organizations associated with the MSA, each with its own leadership and goals.
                    Our projects focus on community service, outreach, and education, allowing students to engage with the broader community.
                </p>
                <Link href='/projects' className='flex justify-center items-center text-2xl text-msa-blue'>View all projects <Icon name='chevron_right'/></Link>
            </section>
            </div>
        </ThumbnailPage>
    )
}