import MajorNav from './MajorNav';
import MinorNav from './MinorNav';
import ResponsiveHeader from './ResponsiveHeader';
import projects from '@/../data/projects.json';
import committees from '@/../data/committees.json';

export default function Header() {


    return (
        <ResponsiveHeader>
            <MajorNav title='About'>
                <MinorNav title='Mission Statement' />
                <MinorNav title='Constitution' />
            </MajorNav>
            <MajorNav title='Events'>
                <MinorNav title='Calendar' />
                <MinorNav title='Upcoming' />
                <MinorNav title='Past' />
            </MajorNav>
            <MajorNav title='Initiatives'>
                <MinorNav title='Projects'>
                    {Object.entries(projects).map(([id, { shortName }]) => (
                        <MinorNav key={id} title={shortName} href={`/projects/${id}`} />
                    ))}
                </MinorNav>
                <MinorNav title='Committees'>
                    {Object.entries(committees).map(([id, { name }]) => (
                        <MinorNav key={id} title={name} href={`/committees#${id}`} />
                    ))}
                </MinorNav>
                <MinorNav title='Organizations' />
            </MajorNav>
            <MajorNav title='Resources'>
                <MinorNav title='New Students' />
                <MinorNav title='Housing and Dining' />
                <MinorNav title='Chaplaincy' />
                <MinorNav title='Report an Incident' />
            </MajorNav>
            <MajorNav title='Donate' />
            <MajorNav title='Contact' />
        </ResponsiveHeader>
    );
}