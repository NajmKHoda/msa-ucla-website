import Link from 'next/link';
import ThumbnailPage from '@/components/layout/ThumbnailPage';

export default function ChaplaincyPage() {
    return (
        <ThumbnailPage
            thumbnailImage="/images/tabari.jpg"
            imageAlt="Ustadh Tabari Zahir"
            imagePosition='50% 10%'
            className='text-center md:text-start p-4'
        >
            <h1 className='text-4xl font-bold text-msa-blue'>Ustadh Tabari Zahir</h1>
            <p>UCLA MSA CHAPLAIN</p>
            <div className='flex justify-center md:justify-start items-center gap-4 my-4'>
                <Link href='https://iok-counseling.clientsecure.me/' className='block p-3 bg-msa-blue text-text-secondary rounded-lg'>Advising Sessions</Link>
                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfmq0PUE2Ci-otLePW_yZGrSo2LfpnVIdVnLXvnKF2m6I0CPQ/viewform' className='block p-3 bg-msa-blue text-text-secondary rounded-lg'>Question Box</Link>
            </div>
            <p>
                Tabari Zahir is the Muslim chaplain at UCLA through <Link href='https://iokchess.com/chaplaincy/' className='text-msa-blue'>the IOK CHESS chaplaincy program</Link>.
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
                        <li><Link href='https://lampsoflight.org/' className='text-msa-blue'>Lamps of Light Project</Link></li>
                        <li>Khutbahs across Southern California</li>
                        <li>LA&apos;s first Muslim inpatient recovery center</li>
                    </ul>
                </div>
            </div>
        </ThumbnailPage>
    )
}