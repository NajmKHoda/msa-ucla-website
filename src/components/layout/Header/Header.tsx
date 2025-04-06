import MajorNav from './MajorNav';
import MinorNav from './MinorNav';
import ResponsiveHeader from './ResponsiveHeader';
import projects from '@/../data/projects.json';
import committees from '@/../data/committees.json';

export default function Header() {
    return (
        <ResponsiveHeader>
            <MajorNav title='About' href='/about'>
                <MinorNav title='Constitution' href='/constitution'/>
            </MajorNav>
            <MajorNav title='Initiatives' href='/initiatives'>
                <MinorNav title='Projects' href='/initiatives/projects'>
                    {Object.entries(projects).map(([id, { shortName }]) => (
                        <MinorNav key={id} title={shortName} href={`/initiatives/projects/${id}`} />
                    ))}
                </MinorNav>
                <MinorNav title='Committees' href='/initiatives/committees'>
                    {Object.entries(committees).map(([id, { name }]) => (
                        <MinorNav key={id} title={name} href={`/initiatives/committees#${id}`} />
                    ))}
                </MinorNav>
            </MajorNav>
            <MajorNav title='Resources'>
                <MinorNav title='Linktree' href='https://linktr.ee/uclamsa' />
                <MinorNav title='Newsletter' href='https://msabruins.us5.list-manage.com/subscribe?u=afd87c320d17a0be7b1a0ac9a&id=3f7c841056' />
                <MinorNav title='New Students' href='/resources/new-students' />
                <MinorNav title='Chaplaincy' href='/resources/chaplaincy' />
            </MajorNav>
            <MajorNav title='Events' href='/events' />
            <MajorNav title='Donate' href='https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ZD6GK28V6E7ZA&ssrt=1743963248042' />
            <MajorNav title='Contact' href='/contact' />
        </ResponsiveHeader>
    );
}