import Image from 'next/image';
import { ReactNode } from 'react';

interface ThumbnailPageProps {
    thumbnailImage: string;
    imageAlt: string;
    children: ReactNode;
    className?: string;
    imagePosition?: string;
}

export default function ThumbnailPage({
    thumbnailImage,
    imageAlt,
    imagePosition = '50% 50%',
    children,
    className = '',
}: ThumbnailPageProps) {
    return (
        <div className='flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4'>
            <div className='relative self-stretch h-[40vh] md:h-auto'>
                <Image
                    src={thumbnailImage}
                    alt={imageAlt}
                    className='object-cover z-0'
                    fill
                    style={{ objectPosition: imagePosition }}
                />
                <div className='block md:hidden absolute w-full h-full bg-cover z-10' style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 75%, #FFF 100%)`
                }}/>
            </div>
            <div className={`col-span-1 md:col-span-2 ${className}`}>
                {children}
            </div>
        </div>
    );
}
