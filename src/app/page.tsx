import EventView from '@/components/info/EventView';
import PrayerTimesList from '@/components/info/PrayerTimes/PrayerTimesList';
import TextCarousel from '@/components/animated/TextCarousel';
import getEvents from '@/lib/calendar';

export default async function Home() {
    const events = await getEvents();

    return (
        <>
            <section className='flex flex-col h-[60vh] px-3 justify-center items-center bg-cover' style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.68) 100%), url(/images/eyecatcher.jpeg)',
                backgroundPosition: '0% 75%'
            }}>
                <h1 className='text-5xl sm:text-6xl text-center font-bold text-msa-yellow'>Muslim Student Association at UCLA</h1>
                <TextCarousel texts={['Assalamualaikum!', '!السلام علیکم', 'अस्सलामु अलैकुम!', 'Esselâmü aleyküm!']} />
            </section>
            <section className='flex flex-col py-5 px-6 gap-4'>
                <h2 className='text-5xl text-center font-semibold'>Prayer Times</h2>
                <PrayerTimesList />
            </section>
            <section className='flex flex-col py-5 px-6 gap-4'>
                <h2 className='text-5xl text-center font-semibold'>Upcoming Events</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    {events.map(event => (
                        <EventView key={event.id} eventName={event.title} start={event.start} end={event.end} />
                    ))}
                </div>
            </section>
        </>
    );
}
