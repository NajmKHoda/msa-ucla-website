interface MajorNavProps {
    title: string;
    href?: string;
    children?: React.ReactNode;
}

export default function MajorNav({ title, href = '#', children }: MajorNavProps) {
    return (
        <div className='relative flex items-stretch'>
            <a href={href} className='peer group flex justify-end items-center'>
                <span className='relative transition-[color] duration-200 ease-out after:bg-msa-yellow after:absolute after:inset-x-0 after:bottom-[-2px] after:h-[3px] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out group-hover:text-msa-yellow group-hover:after:scale-x-100'>{title}</span>
            </a>
            <div className='absolute top-full left-0 w-40 min-w-min flex flex-col gap-[3px] origin-top scale-y-0 peer-hover:scale-y-100 hover:scale-y-100 transition-transform duration-200 ease-out bg-bg-secondary shadow-md rounded-b-lg overflow-hidden'>
                {children}
            </div>
        </div>
    );
}