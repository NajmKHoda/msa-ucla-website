import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-wrap p-[24px] px-[20px] gap-x-[5vw] gap-y-5 items-center bg-msa-blue text-text-secondary">
            <div className='flex flex-1 flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                    <Image src='/images/logo.png' width={64} height={64} alt='MSA Logo' />
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
                            <Link href='#'>About Us</Link>
                            <Link href='#'>Events</Link>
                            <Link href='#'>Projects</Link>
                            <Link href='#'>Committees</Link>
                        </div>
                        <div className='flex flex-col flex-grow basis-[min-content]'>
                            <Link href='#'>Resources</Link>
                            <Link href='#'>New Students</Link>
                            <Link href='#'>Chaplaincy</Link>
                            <Link href='#'>Contact Us</Link>
                        </div>
                        <div className='flex flex-col flex-grow basis-[min-content]'>
                            <Link href='#'>Alumni Assoc.</Link>
                            <Link href='#'>Manara West</Link>
                            <Link href='https://ca.cair.com/'>CAIR-CA</Link>
                            <Link href='https://ca.cair.com/losangeles/'>CAIR-LA</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-grow md:flex-grow-0 flex-col gap-[10px] items-center md:items-end justify-between text-center md:text-end'>
                    <Link href='https://www.instagram.com/msa_ucla/'>
                        <Image src='/images/glyphs/insta_white.svg' width={36} height={36} alt='Instagram' />
                    </Link>
                    <p>
                        146 Kerckhoff Hall<br />
                        308 Westwood Plaza<br />
                        Los Angeles, CA 90024
                    </p>
                    <p>
                        Website created by <Link href='https://www.linkedin.com/in/najmkhoda/'>Najm Hoda &apos;28.</Link><br />
                        Website maintained by AMIN.<br />
                        © {new Date().getFullYear()} MSA UCLA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
