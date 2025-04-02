'use client';

import CalendarControl from '@/components/controls/CalendarControl';
import getEvents, { CalendarEvent } from '@/lib/calendar';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';

const TIME_FORMATTER = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    timeZone: 'America/Los_Angeles'
});

export default function EventsPage() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState<CalendarEvent[] | null>(null);

    useEffect(() => {
        async function fetchEvents() {
            const endDate = new Date(date);
            endDate.setDate(date.getDate() + 1);
            const fetchedEvents = await getEvents(date, endDate);
            setEvents(fetchedEvents);
        }

        setEvents(null);
        fetchEvents();
    }, [date]);

    let eventDisplay;
    if (events === null) {
        eventDisplay = <>
            <Image
                src='/images/logo.svg'
                width={64} height={64}
                alt='MSA UCLA logo'
                className='animate-spin animation-time self-center' />
            <p className='italic'>Loading events...</p>
        </>;
    } else if (events.length === 0) {
        eventDisplay = <p className='italic'>No events planned for this date.</p>;
    } else {
        eventDisplay = events.map((event, i) => (
            <Fragment key={event.id}>
                {i > 0 && <hr/>}
                <section className='flex flex-col items-center md:items-start text-center md:text-start'>
                    <h2 className='text-3xl font-bold text-msa-blue'>{event.title}</h2>
                    <p>
                        {TIME_FORMATTER.format(event.start)}
                        {event.end ? ` to ${TIME_FORMATTER.format(event.end)}` : ''}
                        <br/>
                    {event.location?.split(',')[0] ?? ''}
                    </p>
                </section>
            </Fragment>
        ));
    }

    return (
        <div className='flex flex-col items-center justify-center p-8 gap-6'>
            <h1 className='text-4xl font-bold'>Events</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 self-stretch'>
                <CalendarControl date={date} onDateChange={setDate} />
                <div className='flex flex-col gap-3 mt-2'>
                    {eventDisplay}
                </div>
            </div>
        </div>
    );
}