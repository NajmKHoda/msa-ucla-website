interface MinorNavProps {
    title: string;
    href?: string;
}

export default function MinorNav({ title, href = '#' }: MinorNavProps) {
    return <a href={href} className='p-2 text-lg text-nowrap text-text-primary bg-bg-primary hover:text-msa-blue hover:bg-bg-secondary transition-colors duration-200 ease-out'>{title}</a>;
}