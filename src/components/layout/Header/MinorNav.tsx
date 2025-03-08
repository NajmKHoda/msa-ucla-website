'use client';

import Icon from '@/components/wrappers/Icon';
import { ReactNode, useState } from 'react';
import NavMenu from './NavMenu';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import Link from 'next/link';

interface MinorNavProps {
    title: string;
    href?: string;
    children?: ReactNode;
}

export default function MinorNav({ title, href = '#', children }: MinorNavProps) {
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return isMobile ? (
        <div className='flex flex-col py-1 gap-2 items-stretch'>
            <div className='flex justify-between items-center pr-5 text-lg text-text-primary'>
                <Link href={href}>{title}</Link>
                {children !== undefined &&
                <button type='button' onClick={() => setIsSubNavOpen(!isSubNavOpen)}>
                    <Icon name={isSubNavOpen ? 'arrow_drop_up' : 'arrow_drop_down'} size={28} />
                </button>}
            </div>
            {children !== undefined &&
                <NavMenu isOpen={isSubNavOpen}>
                    {children}
                </NavMenu>
            }
        </div>
    ) : (
        <div className='relative'>
            <Link 
                href={href}
                className='peer flex items-center justify-between py-2 pl-10 lg:px-2 text-lg text-nowrap text-text-primary bg-bg-primary hover:text-msa-blue hover:bg-bg-secondary transition-colors duration-200 ease-out'
            >
                {title}
                {!!children && (
                    <Icon name='chevron_right' size={24} />
                )}
            </Link>
            {children !== undefined &&
                <NavMenu dropDirection='right'>
                    {children}
                </NavMenu>
            }
        </div>
    );
}