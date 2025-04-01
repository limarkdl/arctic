'use client';

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, Menu, Settings} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { t } = useLanguage('home')

    return (
        <div className="bg-black text-white h-screen w-screen flex flex-col relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <p className="text-2xl font-bold">ARctic</p>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <Link href="/settings">
                        <Settings className="text-white w-6 h-6" />
                    </Link>
                    <button onClick={() => setMenuOpen(true)}>
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Desktop Settings */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/settings">
                        <Settings className="text-white w-6 h-6" />
                    </Link>
                </div>

            </header>

            {/* Hamburger Menu */}
            <div
                className={`fixed inset-0 bg-black text-white z-50 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <button onClick={() => setMenuOpen(false)}>
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <div className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="logo" width={30} height={30} />
                        <p className="text-xl font-bold">ARctic</p>
                    </div>
                    <div className="w-6" />
                </div>

                {/* Menu Links */}
                <nav className="flex flex-col items-center px-6 py-10 gap-5">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
                        <div className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg text-center transition-all">
                            {t('home')}
                        </div>
                    </Link>

                    <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
                        <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">
                            {t('contact')}
                        </div>
                    </Link>

                    <Link href="/terms" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
                        <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">
                            {t('terms')}
                        </div>
                    </Link>

                </nav>
            </div>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-10 max-w-2xl mx-auto">
                <Image src="/ar-icon.png" alt="AR Icon" width={200} height={200} className="mb-8" />
                <p className="text-xl font-medium leading-relaxed">
                    {t('experience')}<br />
                    {t('explore')}
                </p>

                <a href="https://www.britannica.com/technology/augmented-reality"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm text-blue-400 underline hover:text-blue-300 transition"
                >
                    {t('learnMore')}
                </a>

                <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">
                    <Link href="/ar.html">
                        <div className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg text-center transition">
                            {t('start')}
                        </div>
                    </Link>

                    <Link href="/rules">
                        <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition">
                            {t('howToPlay')}
                        </div>
                    </Link>

                </div>

            </main>
        </div>
    );
}
