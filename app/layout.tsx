/* eslint-disable */
import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"], // bold but clean
});

export const metadata = {
    title: "Irol Morillo | Portfolio",
    description: "Software Engineer Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative font-sans bg-gray-950 text-white">
                <Navbar />
                <main className="">{children}</main>
            </body>
        </html>
    );
}
