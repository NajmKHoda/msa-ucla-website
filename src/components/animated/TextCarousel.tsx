'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextCarouselProps {
    texts: string[];
    className?: string;
    intervalMs?: number;
}

export default function TextCarousel({ 
    texts, 
    className = '',
    intervalMs = 3000
}: TextCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        if (texts.length <= 1) return;
        
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, intervalMs);
        
        return () => clearInterval(timer);
    }, [texts, intervalMs]);
    
    return (
        <div className='overflow-hidden'>
            <AnimatePresence mode='wait'>
                <motion.p
                    key={currentIndex}
                    initial={{ translateY: '50%', opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    exit={{ translateY: '-50%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl sm:text-5xl leading-normal text-center font-semibold text-text-secondary no-wrap ${className}`}
                >
                    {texts[currentIndex]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
