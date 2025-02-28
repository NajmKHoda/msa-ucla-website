'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const { scrollYProgress } = useScroll();
    const [isFloating, setIsFloating] = useState(false);
    
    useMotionValueEvent(scrollYProgress, 'change', scrollYValue => {
        if (scrollYValue > 0 && !isFloating) {
            setIsFloating(true);
        } else if (scrollYValue === 0 && isFloating) {
            setIsFloating(false);
        }
    })

    const navLinkStyle = 'relative transition-[color] duration-200 ease-out after:bg-msa-yellow after:absolute after:inset-x-0 after:bottom-[-2px] after:h-[3px] after:scale-x-0 after:origin-left after:transition-all after:duration-200 after:ease-out hover:text-msa-yellow hover:after:scale-x-100';
    const floatClass = isFloating ? 'bg-msa-blue shadow-md' : '';

    return (
        <header className={`fixed z-50 flex justify-between items-center w-full transition duration-200 px-6 py-3 ${floatClass}`}>
            <div className='flex gap-2 items-center'>
                <Image src='/logo.png' width={48} height={48} alt='MSA UCLA logo' />
                <h1 className='text-4xl text-msa-yellow font-bold'>MSA UCLA</h1>
            </div>
            <nav className='flex justify-between items-center gap-16 font-semibold text-2xl text-text-secondary'>
                <a href="#" className={navLinkStyle}>About</a>
                <a href="#" className={navLinkStyle}>Events</a>
                <a href="#" className={navLinkStyle}>Initiatives</a>
                <a href="#" className={navLinkStyle}>Resources</a>
                <a href="#" className={navLinkStyle}>Donate</a>
                <a href="#" className={navLinkStyle}>Contact</a>
            </nav>
        </header>
    );
}