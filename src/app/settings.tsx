'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function Settings() {
    const [language, setLanguage] = useState<'en' | 'ru'>('en');

    // Load saved language from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem('arctic-language');
        if (savedLang === 'ru' || savedLang === 'en') {
            setLanguage(savedLang);
        }
    }, []);

    // Save language on change
    const handleLanguageChange = (lang: 'en' | 'ru') => {
        setLanguage(lang);
        localStorage.setItem('arctic-language', lang);
    };

    return (
        <div className="bg-black text-white min-h-screen w-full px-4 py-6 flex flex-col items-center">
            {/* Header */}
            <header className="w-full flex justify-between items-center mb-8 max-w-5xl">
                <Link href="/">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </Link>
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" width={32} height={32} />
                    <p className="text-xl font-bold">ARctic</p>
                </div>
                <Link href="/">
                    <Home className="w-6 h-6 text-white" />
                </Link>
            </header>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-10 text-center">Settings</h1>

            {/* Settings Sections */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-y-10 md:gap-x-16 w-full max-w-5xl">
                {/* Color Blind Mode */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">Color Blind Mode</h2>
                    <div className="flex flex-col gap-2 text-sm">
                        {[
                            { label: 'Normal', colors: 'bg-red-500 bg-yellow-400 bg-green-400 bg-blue-500 bg-purple-500' },
                            { label: 'Deuteranopia', colors: 'bg-yellow-400 bg-yellow-300 bg-gray-400 bg-blue-500 bg-blue-700' },
                            { label: 'Protanopia', colors: 'bg-orange-400 bg-yellow-400 bg-gray-400 bg-cyan-500 bg-indigo-500' },
                            { label: 'Tritanopia', colors: 'bg-red-300 bg-green-300 bg-blue-300 bg-cyan-300 bg-pink-400' }
                        ].map(({ label, colors }, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="w-28 text-left">{label}</span>
                                <div className="flex gap-1">
                                    {colors.split(' ').map((color, j) => (
                                        <div key={j} className={`${color} w-5 h-5 rounded-sm`} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">Controls</h2>
                    <div className="flex flex-col gap-3 w-32">
                        <button className="bg-white text-black py-2 rounded font-semibold">On</button>
                        <button className="bg-white text-black py-2 rounded font-semibold">Off</button>
                    </div>
                </div>

                {/* Language with Logic */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">Language</h2>
                    <div className="flex flex-col gap-3 w-32">
                        <button
                            className={`py-2 rounded font-semibold ${
                                language === 'en' ? 'bg-orange-500 text-white' : 'bg-white text-black'
                            }`}
                            onClick={() => handleLanguageChange('en')}
                        >
                            Eng
                        </button>
                        <button
                            className={`py-2 rounded font-semibold ${
                                language === 'ru' ? 'bg-orange-500 text-white' : 'bg-white text-black'
                            }`}
                            onClick={() => handleLanguageChange('ru')}
                        >
                            Рус
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
