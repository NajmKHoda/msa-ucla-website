import type { Metadata } from "next";
import { Poltawski_Nowy } from 'next/font/google'
import "./globals.css";
import Header from '@/components/layout/Header';

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
            <body>
                <Header />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
