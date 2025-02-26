import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="flex p-[24px] px-[20px] gap-[5vw] items-center bg-msa-blue text-text-secondary">
            <div className='flex flex-1 flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                    <Image src='/logo.png' width={64} height={64} alt='MSA Logo' />
                    <h1 className='text-5xl text-msa-yellow font-bold'>MSA UCLA</h1>
                </div>
                <p>
                    The Muslim Student Association at UCLA is dedicated to fostering a welcoming and inclusive community for Muslim students.
                    Our mission is to strengthen faith, build lasting connections, and empower students to make a positive impact on campus and beyond.
                </p>
            </div>
            <div className='flex-1'>
                <h2 className='text-center text-2xl font-bold'>Quick Links</h2>
                <div className='grid grid-cols-3 gap-x-[50px] text-msa-yellow text-xl text-center leading-loose'>
                    <a href='#'>About Us</a>
                    <a href='#'>Resources</a>
                    <a href='#'>Alumni Assoc.</a>
                    <a href='#'>Events</a>
                    <a href='#'>New Students</a>
                    <a href='#'>Manara West</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Chaplaincy</a>
                    <a href='https://ca.cair.com/'>CAIR-CA</a>
                    <a href='#'>Committees</a>
                    <a href='#'>Contact Us</a>
                    <a href='https://ca.cair.com/losangeles/'>CAIR-LA</a>
                </div>
            </div>
            <div className='flex flex-col gap-[10px] items-end justify-between text-end'>
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
        </footer>
    );
}
