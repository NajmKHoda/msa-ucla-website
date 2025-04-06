import Link from 'next/link';
import { ReactNode } from 'react';

interface ResourceCardProps {
    url: string;
    icon: ReactNode;
    children: ReactNode;
    className?: string;
}

export default function ResourceCard({ url, icon, children, className = '' }: ResourceCardProps) {
    return (
        <Link href={url} className={`flex flex-col items-center justify-center p-4 gap-3 text-2xl rounded-xl bg-bg-secondary ${className}`}>
            {icon}
            <div className='text-center'>
                {children}
            </div>
        </Link>
    );
}
