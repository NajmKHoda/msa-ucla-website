import Image from 'next/image';
import Link from 'next/link';

export default function ChaplaincyPage() {
    return (
        <div className='flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4'>
            <div className='block md:hidden h-[40vh] bg-cover' style={{
                backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 75%, #FFF 100%), url(/images/tabari.jpg)',
                backgroundPosition: '50% 10%'
            }}/>
            <div className='hidden md:block p-5 relative self-stretch'>
                <Image
                    src='/images/tabari.jpg'
                    alt='Ustadh Tabari Zahir'
                    className='object-cover object-center'
                    fill
                />
            </div>
            <div className='text-center md:text-start p-4 flex-0 col-span-1 md:col-span-2'>
                <h1 className='text-4xl font-bold text-msa-blue'>Ustadh Tabari Zahir</h1>
                <p>UCLA MSA CHAPLAIN</p>
                <div className='flex justify-center md:justify-start items-center gap-4 my-4'>
                    <Link href='https://iok-counseling.clientsecure.me/' className='block p-3 bg-msa-blue text-text-secondary rounded-lg'>Advising Sessions</Link>
                    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfmq0PUE2Ci-otLePW_yZGrSo2LfpnVIdVnLXvnKF2m6I0CPQ/viewform' className='block p-3 bg-msa-blue text-text-secondary rounded-lg'>Question Box</Link>
                </div>
                <p>
                    Tabari Zahir is the Muslim chaplain at UCLA through the IOK CHESS chaplaincy program.
                    A dedicated student and teacher of Islamic knowledge, he&apos;s known for integrating spirituality with social justice. 
                    He provides spiritual guidance, counseling, and mentorship to students on campus.
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                        <h2 className='text-2xl my-2 text-msa-blue'>Certifications</h2>
                        <ul className='list-disc list-inside'>
                            <li>Master&apos;s degree in Clinical Social Work</li>
                            <li>Licensed Clinical Social Worker (LCSW)</li>
                            <li>Certified Alcohol and Drug Counselor (CADC)</li>
                            <li>20 years of experience in the field of mental health</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl my-2 text-msa-blue'>Other Initiatives</h2>
                        <ul className='list-disc list-inside'>
                            <li>Lamps of Light Project</li>
                            <li>Khutbahs across Southern California</li>
                            <li>LA&apos;s first Muslim inpatient recovery center</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}