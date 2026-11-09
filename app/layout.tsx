import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
    title: "Contact Manager",
    description: "A simple Contact management application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className="h-full antialiased">
            <body className="min-h-screen bg-gray-50">
                <Navbar />

                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    );
}