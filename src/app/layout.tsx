import type { Metadata } from 'next';
import { Poltawski_Nowy } from 'next/font/google'
import 'material-symbols/outlined.css'
import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header/Header';

export const metadata: Metadata = {
    title: "MSA UCLA",
    description: "The official website for the Muslim Student Association at UCLA",
};

const poltawskiNowy = Poltawski_Nowy({ subsets: ['latin'] });

interface RootLayoutProps {
    readonly children?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={poltawskiNowy.className}>
            <body className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex flex-col flex-grow'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
