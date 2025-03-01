'use client';

import Icon from '@/components/wrappers/Icon';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { useState } from 'react';

interface MajorNavProps {
    title: string;
    href?: string;
    children?: React.ReactNode;
}

export default function MajorNav({ title, href = '#', children }: MajorNavProps) {
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return isMobile ? (
        <div className='flex flex-col py-1 gap-2 items-stretch'>
            <div className='flex justify-between items-center px-5 font-semibold text-2xl text-text-secondary'>
                <a href={href}>{title}</a>
                {children !== undefined &&
                <button type='button' onClick={() => setIsSubNavOpen(!isSubNavOpen)}>
                    <Icon name={isSubNavOpen ? 'arrow_drop_up' : 'arrow_drop_down'} size={36} />
                </button>}
            </div>
            {isSubNavOpen && children !== undefined &&
            <div className='flex flex-col items-stretch bg-bg-secondary'>
                {children}
            </div>}
        </div>
    ) : (
        <div className='relative flex items-stretch'>
            <a href={href} className='peer group flex justify-end items-center font-semibold text-2xl text-text-secondary'>
                <span className='relative transition-[color] duration-200 ease-out after:bg-msa-yellow after:absolute after:inset-x-0 after:bottom-[-2px] after:h-[3px] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out group-hover:text-msa-yellow group-hover:after:scale-x-100'>{title}</span>
            </a>
            <div className='absolute top-full left-0 w-40 min-w-min flex flex-col gap-[3px] origin-top scale-y-0 peer-hover:scale-y-100 hover:scale-y-100 transition-transform duration-200 ease-out bg-bg-secondary shadow-md rounded-b-lg overflow-hidden'>
                {children}
            </div>
        </div>
    );
}