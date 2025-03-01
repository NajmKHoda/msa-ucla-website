'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import MajorNav from './MajorNav';
import MinorNav from './MinorNav';

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

    const floatClass = isFloating ? 'bg-msa-blue shadow-md' : 'hover:bg-msa-blue hover:shadow-md';

    return (
        <header className={`fixed z-50 flex justify-between items-stretch w-full transition duration-200 px-6 ${floatClass}`}>
            <div className='flex py-3 gap-2 items-center'>
                <Image src='/logo.png' width={48} height={48} alt='MSA UCLA logo' />
                <h1 className='text-4xl text-msa-yellow font-bold'>MSA UCLA</h1>
            </div>
            <nav className='flex justify-end items-stretch gap-[3vw] font-semibold text-2xl text-text-secondary'>
                <MajorNav title='About'>
                    <MinorNav title='Mission Statement' />
                    <MinorNav title='Constitution' />
                </MajorNav>
                <MajorNav title='Events'>
                    <MinorNav title='Calendar' />
                    <MinorNav title='Upcoming' />
                    <MinorNav title='Past' />
                </MajorNav>
                <MajorNav title='Initiatives'>
                    <MinorNav title='Projects' />
                    <MinorNav title='Committees' />
                    <MinorNav title='Organizations' />
                </MajorNav>
                <MajorNav title='Resources'>
                    <MinorNav title='New Students' />
                    <MinorNav title='Housing and Dining' />
                    <MinorNav title='Chaplaincy' />
                    <MinorNav title='Report an Incident' />
                </MajorNav>
                <MajorNav title='Donate' />
                <MajorNav title='Contact' />
            </nav>
        </header>
    );
}