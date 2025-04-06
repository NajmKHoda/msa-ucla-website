import committeesData from '@/../data/committees.json'

export default function CommitteesPage() {
    return (
        <div className='flex flex-col gap-8 p-10'> 
            <h1 className='text-center text-5xl font-bold'>Committees</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {Object.entries(committeesData).map(([id, { name, description, heads }]) =>
                <section key={id} className='flex flex-col items-center justify-center p-6 text-center lg:items-start lg:text-start gap-2 bg-bg-secondary rounded-2xl'>
                    <h2 id={id} className="text-4xl font-semibold text-msa-blue">{name}</h2>
                    <p><strong>Committee {heads.length > 1 ? 'Heads' : 'Head'}:</strong> {heads.join(', ')}</p>
                    <p>{description}</p>
                </section>
            )}
            </div>
        </div>
    );
}