import EventView from '@/components/info/EventView';
import PrayerTimesList from '@/components/info/PrayerTimes/PrayerTimesList';

const events = ["Brothers' Basketball", "Sisters' Soccer", "Halaqa", "Jummah", "Qiyam", "Tahajjud"];
const start = new Date();
const end = new Date(start);
end.setHours(end.getHours() + 1);

export default function Home() {
    return (
        <>
            <section className='flex flex-col h-[60vh] justify-center items-center bg-cover' style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.68) 100%), url(/eyecatcher.jpeg)',
                backgroundPosition: '0% 75%'
            }}>
                <h1 className='text-6xl text-center font-bold text-msa-yellow'>Muslim Student Association at UCLA</h1>
                <p className='text-5xl text-center font-semibold text-text-secondary'>Assalamualaikum!</p>
            </section>
            <section className='flex flex-col py-5 px-6 gap-4'>
                <h2 className='text-5xl text-center font-semibold'>Prayer Times</h2>
                <PrayerTimesList />
            </section>
            <section className='flex flex-col py-5 px-6 gap-4'>
                <h2 className='text-5xl text-center font-semibold'>Upcoming Events</h2>
                <div className='grid grid-cols-3 gap-[20px]'>
                    {events.map((event, index) => (
                        <EventView key={index} eventName={event} start={start} end={end} />
                    ))}
                </div>
            </section>
        </>
    );
}
