'use client';

import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, Settings} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage";

export default function HowToPlayPage() {
    const {t} = useLanguage('rules')

    const steps = t('steps', {returnObjects: true}) as { "title": string, "desc": string }[];

    return (
        <div className="bg-black text-white h-screen w-screen flex flex-col relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <ArrowLeft className="w-6 h-6 text-white mr-2 hover:opacity-80"/>
                    </Link>
                    <Image src="/logo.svg" alt="logo" width={40} height={40}/>
                    <p className="text-2xl font-bold">ARctic</p>
                </div>
                <Link href="/settings">
                    <Settings className="text-white w-6 h-6"/>
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center text-center px-6 py-10 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-10">{t('howToPlay')}</h1>

                <div className="flex flex-col gap-6 w-full text-left">
                    {steps.map((step, index) => (
                        <div key={index}
                             className="bg-white text-black p-5 rounded-xl border border-gray-200 shadow-md">
                            <h2 className="text-lg font-semibold mb-2">
                                {index + 1}. {step.title}
                            </h2>
                            <p className="text-sm text-gray-700">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
