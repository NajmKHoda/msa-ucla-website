'use client';

import MajorNav from './MajorNav';
import MinorNav from './MinorNav';
import ResponsiveHeader from './ResponsiveHeader';

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
                <MinorNav title='Projects' />
                <MinorNav title='Committees' />
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