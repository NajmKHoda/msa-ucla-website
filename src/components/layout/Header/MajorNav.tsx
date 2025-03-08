'use client';

import Icon from '@/components/wrappers/Icon';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { useState } from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';

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
                <Link href={href}>{title}</Link>
                {children !== undefined &&
                <button type='button' onClick={() => setIsSubNavOpen(!isSubNavOpen)}>
                    <Icon name={isSubNavOpen ? 'arrow_drop_up' : 'arrow_drop_down'} size={36} />
                </button>}
            </div>
            {children !== undefined &&
                <NavMenu isOpen={isSubNavOpen}>
                    {children}
                </NavMenu>
            }
        </div>
    ) : (
        <div className='relative flex items-stretch'>
            <Link href={href} className='peer group flex justify-end items-center font-semibold text-2xl text-text-secondary'>
                <span className='relative transition-[color] duration-200 ease-out after:bg-msa-yellow after:absolute after:inset-x-0 after:bottom-[-2px] after:h-[3px] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out group-hover:text-msa-yellow group-hover:after:scale-x-100'>{title}</span>
            </Link>
            {children !== undefined &&
                <NavMenu dropDirection='down'>
                    {children}
                </NavMenu>
            }
        </div>
    );
}