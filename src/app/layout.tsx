import type {Metadata} from "next";
import "./globals.css";

import {ADLaM_Display} from "next/font/google";
import {ReactNode} from "react";
import Providers from "@/providers";

const adlam = ADLaM_Display({
    subsets: ["adlam"],
    weight: ["400"]
})

export const metadata: Metadata = {
    title: "Arctic",
    description: "Accessible AR application",
};

export default function RootLayout({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${adlam.className} antialiased bg-background`}
        >
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
