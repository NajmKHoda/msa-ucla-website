import PrayerTimeView from '@/components/info/PrayerTimeView';

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
                <div className='flex flex-row gap-[10px] rounded-[30px] overflow-hidden'>
                    <PrayerTimeView prayerName='Fajr' prayerStartTime='5:30 AM' symbol='flare' isCurrent />
                    <PrayerTimeView prayerName='Dhuhr' prayerStartTime='12:10 PM' symbol='sunny' />
                    <PrayerTimeView prayerName='Asr' prayerStartTime='3:20 PM' symbol='wb_sunny' />
                    <PrayerTimeView prayerName='Maghrib' prayerStartTime='5:45 PM' symbol='wb_twilight' />
                    <PrayerTimeView prayerName='Isha' prayerStartTime='7:00 PM' symbol='bedtime' />
                    <PrayerTimeView prayerName='Jummah' prayerStartTime='1:10 PM' symbol='mosque' />
                </div>
            </section>
        </>
    );
}
