import PrayerTimesList from '@/components/info/PrayerTimes/PrayerTimesList';
import { CalculationMethod, Coordinates, PrayerTimes } from 'adhan';

const UCLA_COORDS = new Coordinates(34.0722, -118.4427);
const ISNA_METHOD = CalculationMethod.NorthAmerica();
const DATE_FORMATTER = Intl.DateTimeFormat('en-US', { timeStyle: 'short' });

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
        </>
    );
}
