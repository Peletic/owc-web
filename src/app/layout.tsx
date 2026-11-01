import type {Metadata} from "next";
import {Alata} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const alata = Alata({
    variable: "--font-alata",
    weight: '400',
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Outdoor Walking Club",
    description: "The University of Toronto Scarborough Outdoor Walking Club",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${alata.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}
        <Footer/>
        </body>
        </html>
    );
}
