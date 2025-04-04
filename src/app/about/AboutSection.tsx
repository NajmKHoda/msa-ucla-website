import Image from 'next/image';
import React from 'react';

interface AboutSectionProps {
    title: string;
    imageUrl: string;
    children: React.ReactNode;
    backgroundPosition?: string;
    reversed?: boolean;
}

const LINEAR_GRADIENT = 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 20%, rgba(255, 255, 255, 0.00) 65.38%, #FFF 100%)';

export default function AboutSection({ 
    title, 
    imageUrl, 
    children, 
    backgroundPosition = '50% 50%',
    reversed = false
}: AboutSectionProps) {
    const gradientImageBG = `url(${imageUrl}) lightgray ${backgroundPosition} / cover no-repeat`;
    const fontAlign = reversed ? 'text-end' : 'text-start';
    
    return (
        <>
            {/* Mobile view */}
            <section className='block md:hidden'>
                <div className={`flex md:hidden justify-center items-end h-[40vh] max-h-[350px]`} style={{
                    background: `${LINEAR_GRADIENT}, ${gradientImageBG}`
                }}>
                    <h2 className='text-4xl font-semibold text-msa-blue'>{title}</h2>
                </div>
                <p className='px-4 pt-2 pb-5 text-center'>{children}</p>
            </section>

            {/* Desktop view */}
            <section className={`hidden md:flex ${reversed ? 'flex-row-reverse' : 'flex-row'} items-center gap-5`}>
                <div className='relative flex-1 self-stretch p-4'>
                    <Image src={imageUrl} alt={title} fill className='object-cover rounded-xl' style={{
                        objectPosition: backgroundPosition
                    }} />
                </div>
                <div className='flex-1 my-12'>
                    <h2 className={`text-4xl font-semibold text-msa-blue ${fontAlign}`}>{title}</h2>
                    <p className={`pt-2 ${fontAlign}`}>{children}</p>
                </div>
            </section>
        </>
    );
}
