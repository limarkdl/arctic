'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon, Settings, Menu, ArrowLeft } from "lucide-react";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'ru'>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('arctic-language');
        if (savedLang === 'ru' || savedLang === 'en') {
            setLanguage(savedLang);
        }
    }, []);

    const t = {
        en: {
            home: "Home",
            settings: "Settings",
            contact: "Contact us",
            experience: "Experience the world of Augmented Reality!",
            explore: "Explore, interact, and enjoy.",
            learnMore: "Learn more about AR",
            start: "Start",
            howToPlay: "How to Play?",
            terms: "Terms of Use",
        },
        ru: {
            home: "Главная",
            settings: "Настройки",
            contact: "Связаться с нами",
            experience: "Откройте мир дополненной реальности!",
            explore: "Исследуйте, взаимодействуйте и наслаждайтесь.",
            learnMore: "Узнать больше о AR",
            start: "Начать",
            howToPlay: "Как играть?",
            terms: "Условия использования",
        },
    }[language];

    return (
        <div className="bg-black text-white h-screen w-screen flex flex-col relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <p className="text-2xl font-bold">ARctic</p>
                </div>

                <button className="md:hidden" onClick={() => setMenuOpen(true)}>
                    <Menu className="w-6 h-6 text-white" />
                </button>

                <Link href="/" className="hidden md:block">
                    <HomeIcon className="text-white w-6 h-6" />
                </Link>
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
                            {t.home}
                        </div>
                    </Link>

                    <Link href="/settings" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
                        <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">
                            {t.settings}
                        </div>
                    </Link>

                    <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
                        <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">
                            {t.contact}
                        </div>
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-10 max-w-2xl mx-auto">
                <Image src="/ar-icon.png" alt="AR Icon" width={200} height={200} className="mb-8" />
                <p className="text-xl font-medium leading-relaxed">
                    {t.experience}<br />
                    {t.explore}
                </p>
                <Link
                    href="/definition"
                    className="mt-2 text-sm text-blue-400 underline hover:text-blue-300 transition"
                >
                    {t.learnMore}
                </Link>
                <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">
                    <Link href="/ar.html">
                        <div className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg transition">
                            {t.start}
                        </div>
                    </Link>
                    <Link href="/how-to-play">
                        <div className="bg-white text-black text-sm font-semibold py-2 rounded">
                            {t.howToPlay}
                        </div>
                    </Link>
                    <button className="bg-white text-black py-2 rounded text-sm">
                        {t.terms}
                    </button>
                </div>
            </main>

            {/* Page Icon */}
            <div className="absolute bottom-6 right-6 hidden md:block">
                <Link href="/settings">
                    <Settings className="text-white w-6 h-6" />
                </Link>
            </div>
        </div>
    );
}
