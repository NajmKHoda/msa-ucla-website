export default function Home() {
    return (
        <section className='flex flex-col h-[60vh] justify-center items-center bg-cover' style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.68) 100%), url(/eyecatcher.jpeg)',
            backgroundPosition: '0% 75%'
        }}>
            <h1 className='text-6xl text-center font-bold text-msa-yellow'>Muslim Student Association at UCLA</h1>
            <p className='text-5xl text-center font-semibold text-text-secondary'>Assalamualaikum!</p>
        </section>
    );
}
