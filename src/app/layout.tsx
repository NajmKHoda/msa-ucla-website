import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MSA UCLA",
    description: "The official website for the Muslim Student Association at UCLA",
};

interface RootLayoutProps {
    readonly children?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
