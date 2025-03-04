import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="flex flex-wrap p-[24px] px-[20px] gap-x-[5vw] gap-y-5 items-center bg-msa-blue text-text-secondary">
            <div className='flex flex-1 flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                    <Image src='/logo.png' width={64} height={64} alt='MSA Logo' />
                    <h1 className='text-5xl text-msa-yellow font-bold text-nowrap'>MSA UCLA</h1>
                </div>
                <p className='md:min-w-[440px]'>
                    The Muslim Student Association at UCLA is dedicated to fostering a welcoming and inclusive community for Muslim students.
                    Our mission is to strengthen faith, build lasting connections, and empower students to make a positive impact on campus and beyond.
                </p>
            </div>
            <div className='flex flex-wrap gap-[5vw] flex-grow items-center'>
                <div className='flex-grow'>
                    <h2 className='text-center text-2xl font-bold'>Quick Links</h2>
                    <div className='flex flex-wrap gap-x-[20px] gap-y-[10px] text-msa-yellow text-xl text-center leading-loose text-nowrap'>
                        <div className='flex flex-col flex-grow basis-[min-content]'>
                            <a href='#'>About Us</a>
                            <a href='#'>Events</a>
                            <a href='#'>Projects</a>
                            <a href='#'>Committees</a>
                        </div>
                        <div className='flex flex-col flex-grow basis-[min-content]'>
                            <a href='#'>Resources</a>
                            <a href='#'>New Students</a>
                            <a href='#'>Chaplaincy</a>
                            <a href='#'>Contact Us</a>
                        </div>
                        <div className='flex flex-col flex-grow basis-[min-content]'>
                            <a href='#'>Alumni Assoc.</a>
                            <a href='#'>Manara West</a>
                            <a href='https://ca.cair.com/'>CAIR-CA</a>
                            <a href='https://ca.cair.com/losangeles/'>CAIR-LA</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-grow flex-col gap-[10px] items-center md:items-end justify-between text-center md:text-end'>
                    <a href='https://www.instagram.com/msa_ucla/'>
                        <Image src='/insta.svg' width={36} height={36} alt='Instagram' />
                    </a>
                    <p>
                        146 Kerckhoff Hall<br />
                        308 Westwood Plaza<br />
                        Los Angeles, CA 90024
                    </p>
                    <p>
                        Website created by <a href='https://www.linkedin.com/in/najmkhoda/'>Najm Hoda '28.</a><br />
                        Website maintained by AMIN.<br />
                        © {new Date().getFullYear()} MSA UCLA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
