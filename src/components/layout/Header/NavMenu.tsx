'use client';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

interface NavMenuProps {
    isOpen?: boolean;
    children: React.ReactNode;
    dropDirection?: 'down' | 'right';
}

export default function NavMenu({ isOpen = false, children, dropDirection = 'down' }: NavMenuProps) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    if (isMobile) {
        return isOpen ? (
            <div className='flex flex-col items-stretch bg-bg-secondary pl-6'>
                {children}
            </div>
        ) : null;
    }
    
    const dropClass = dropDirection === 'down' ?
        'absolute top-full left-0 origin-top scale-y-0 peer-hover:scale-y-100 hover:scale-y-100' :
        'left-full top-0 origin-left scale-x-0 peer-hover:scale-x-100 hover:scale-x-100';

    return (
        <div className={`${dropClass} invisible peer-hover:visible hover:visible flex absolute w-40 min-w-min flex-col transition-all duration-200 ease-out divide-y-4 divide-bg-secondary shadow-md`}>
            {children}
        </div>
    );
}
