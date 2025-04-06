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
                <MinorNav title='Projects' href='/projects'>
                    {Object.entries(projects).map(([id, { shortName }]) => (
                        <MinorNav key={id} title={shortName} href={`/projects/${id}`} />
                    ))}
                </MinorNav>
                <MinorNav title='Committees' href='/committees'>
                    {Object.entries(committees).map(([id, { name }]) => (
                        <MinorNav key={id} title={name} href={`/committees#${id}`} />
                    ))}
                </MinorNav>
            </MajorNav>
            <MajorNav title='Resources'>
                <MinorNav title='Linktree' href='https://linktr.ee/uclamsa' />
                <MinorNav title='New Students' href='/resources/new-students' />
                <MinorNav title='Chaplaincy' href='/resources/chaplaincy' />
                <MinorNav title='Report an Incident' />
            </MajorNav>
            <MajorNav title='Events' href='/events' />
            <MajorNav title='Donate' />
            <MajorNav title='Contact' />
        </ResponsiveHeader>
    );
}