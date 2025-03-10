import committeesData from '@/../data/committees.json'

export default function CommitteesPage() {
    return (
        <div className='flex flex-col gap-8 p-10'> 
            <h1 className='text-center text-5xl font-bold'>Committees</h1>
            {Object.entries(committeesData).map(([id, { name, description, heads }]) =>
                <section key={id} className='flex flex-col items-center text-center sm:items-start sm:text-start gap-2'>
                    <h2 id={id} className="text-4xl font-semibold">{name}</h2>
                    <p><strong>Committee {heads.length > 1 ? 'Heads' : 'Head'}:</strong> {heads.join(', ')}</p>
                    <p>{description}</p>
                </section>
            )}
        </div>
    );
}