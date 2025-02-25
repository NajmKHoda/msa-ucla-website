'use client';

import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useLayoutEffect(() => {
        // Set initial scroll position on the client side
        setScrollPosition(window.scrollY);

        // Update scroll position on scroll
        const onScroll = () => { setScrollPosition(window.scrollY); }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const floatClass = scrollPosition > 0 ? 'bg-msa-blue shadow-md' : '';

    return (
        <header className={`fixed flex justify-between items-center w-full transition duration-200 px-6 py-3 ${floatClass}`}>
            <div className='flex gap-2 items-center'>
                <Image src='/logo.png' width={48} height={48} alt='MSA UCLA logo' />
                <h1 className='text-4xl text-msa-yellow font-bold'>MSA UCLA</h1>
            </div>
            <nav className='flex justify-between items-center gap-16 font-semibold text-2xl text-text-secondary'>
                <a>About</a>
                <a>Events</a>
                <a>Initiatives</a>
                <a>Resources</a>
                <a>Donate</a>
                <a>Contact</a>
            </nav>
        </header>
    );
}