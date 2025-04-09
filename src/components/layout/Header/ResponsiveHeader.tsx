'use client';

import { AnimatePresence, useMotionValueEvent, useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, ReactNode, useEffect } from 'react';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import Icon from '@/components/wrappers/Icon';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface ResponsiveHeaderProps {
    children?: ReactNode;
}

export default function ResponsiveHeader({ children }: ResponsiveHeaderProps) {
    const { scrollYProgress } = useScroll();
    const [isFloating, setIsFloating] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const pathname = usePathname();

    useMotionValueEvent(scrollYProgress, 'change', scrollYValue => {
        if (pathname !== '/') return;
        if (scrollYValue > 0 && !isFloating) {
            setIsFloating(true);
        } else if (scrollYValue === 0 && isFloating) {
            setIsFloating(false);
        }
    });

    useEffect(() => {
        if (!isMobile && showMenu) setShowMenu(false);
    }, [isMobile]);

    useEffect(() => {
       document.body.style.overflow = showMenu ? 'hidden' : 'auto';
    }, [showMenu]);

    const positioning = pathname === '/' ? 'fixed' : 'sticky top-0';
    const floatClass = pathname !== '/' || isFloating || showMenu ? 'bg-msa-blue shadow-md' : 'hover:bg-msa-blue hover:shadow-md';

    return (
        <div className={`${positioning} z-50 w-full ${showMenu ? 'h-full' : ''} flex flex-col items-stretch`}>
            <header className={`flex z-[1] justify-between items-stretch w-full transition duration-200 px-6 ${floatClass}`}>
                <Link href='/' className='flex py-3 gap-2 items-center'>
                    <Image src='/images/logo.svg' width={36} height={36} alt='MSA UCLA logo' />
                    <h1 className='text-4xl text-msa-yellow font-bold'>UCLA MSA</h1>
                </Link>
                {isMobile ? 
                <button type='button' onClick={() => setShowMenu(!showMenu)}>
                    <Icon name='menu' size={48} className='text-text-secondary' />
                </button>
                :
                <nav className='flex justify-end items-stretch gap-[3vw]'>
                    {children}
                </nav>}
            </header>
            <AnimatePresence>
                {showMenu &&
                <motion.div 
                    initial={{ translateY: '-100%' }}
                    animate={{ translateY: 0 }}
                    exit={{ translateY: '-100%' }}
                    transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
                    className='z-0 flex-1 overflow-y-scroll bg-msa-blue'>
                    {children}
                </motion.div>}
            </AnimatePresence>
        </div>
    );
}
