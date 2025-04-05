import AboutSection from './AboutSection';

export default function AboutPage() {
    return (
        <>
            <div className='h-[50vh] max-h-[450px]' style={{
                background: 'url(images/banners/about/top.jpg) lightgray no-repeat',
                backgroundPosition: '50% 35%',
                backgroundSize: 'cover',
            }}/>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='mt-5 mb-2 text-4xl text-center font-bold'>We are <span className='text-msa-blue'>MSA UCLA</span>.</h1>
                <p className='max-w-[750] px-4 pb-5 md:pb-0 text-center'>
                    Since its establishment in 1964, the MSA at UCLA has focused on three fundamentals of the Muslim college experience:
                    rooting Muslim Bruins in their faith, establishing a unified family across our diverse community,
                    and empowering members to find personal success.
                </p>
            </div>
            <hr className='hidden md:block my-8' />
            <div className='flex flex-col items-stretch gap-0 md:gap-8 px-0 md:px-6 mb-6'>
                <AboutSection title='FAITH' imageUrl='/images/banners/about/faith.jpg'>
                    The first mission of the MSA is to educate our members about what unifies our organization: our common faith of Islam.
                    Through religious events such as our weekly Jummah prayers, halaqas, and Quran classes, we ensure that Muslim Bruins remain attached to their faith, no matter how busy their college schedule gets.
                    <br/>
                    Additionally, we educate the larger UCLA community about Islam and Muslim voices through initiatives such as Islam Awareness Week and the Al-Talib Newsmagazine.
                    In an era of increasing Islamophobia and misinformation about Islam, these efforts are critical to ensure the safety and prosperity of our students.
                </AboutSection>
                <AboutSection title='COMMUNITY' imageUrl='/images/banners/about/community.jpg' reversed backgroundPosition='50% 30%'>
                    A Muslim cannot be without their community, and a community cannot be without its Muslims.
                    The MSA provides a space for Muslim Bruins to connect with one another through several social events, fostering friendships and support systems that last a lifetime.
                    <br/>
                    As a part of the larger UCLA community, we also strive to build bridges with other student organizations and communities on campus.
                    Through interfaith events, collaborations with cultural organizations, and outreach projects like MAPS for the greater Los Angeles community, we ensure that our members are connected to the world around them.
                </AboutSection>
                <AboutSection title='EMPOWERMENT' imageUrl='/images/banners/about/empowerment.jpg' backgroundPosition='50% 35%'>
                    The MSA is dedicated to empowering our members to find personal success in their academic and professional journeys.
                    We provide resources such as mentorship programs like AMPD and networking opportunities to help Muslim Bruins thrive in their chosen fields.
                    <br/>
                    Additionally, we advocate for our members on campus, ensuring that their voices are heard and their needs are met.
                    Through our student organization partnerships during events such as Anti-Oppression Week, we work to create a campus environment that is inclusive and supportive of all students.
                </AboutSection>
            </div>
        </>
    );
}