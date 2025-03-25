'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function Page() {
    type FontSizeOption = 'small' | 'normal' | 'big' | 'huge';
    const [language, setLanguage] = useState<'en' | 'ru'>('en');
    const [fontSize, setFontSize] = useState<FontSizeOption>('normal');
    const [controlsOn, setControlsOn] = useState(true);

    // Load saved settings from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem('arctic-language');
        const savedFontSize = localStorage.getItem('arctic-font-size') as FontSizeOption;
        const savedControls = localStorage.getItem('arctic-controls') === 'on';

        if (savedLang === 'ru' || savedLang === 'en') setLanguage(savedLang);
        if (['small', 'normal', 'big', 'huge'].includes(savedFontSize)) setFontSize(savedFontSize);
        setControlsOn(savedControls);
    }, []);

    // Translations
    const t = {
        en: {
            title: "Settings",
            textSize: "Text Size",
            small: "Small",
            normal: "Normal",
            big: "Big",
            huge: "Huge",
            controls: "Controls",
            on: "On",
            off: "Off",
            language: "Language",
            eng: "English 🇬🇧",
            rus: "Russian 🇷🇺"
        },
        ru: {
            title: "Настройки",
            textSize: "Размер текста",
            small: "Мелкий",
            normal: "Обычный",
            big: "Большой",
            huge: "Огромный",
            controls: "Управление",
            on: "Вкл",
            off: "Выкл",
            language: "Язык",
            eng: "Английский 🇬🇧",
            rus: "Русский 🇷🇺"
        },
    }[language];

    // Font size classes
    const fontSizeMap: Record<FontSizeOption, string> = {
        small: 'text-sm',
        normal: 'text-base',
        big: 'text-lg',
        huge: 'text-xl'
    };
    const fontClass = fontSizeMap[fontSize];

    // Handlers
    const handleLanguageChange = (lang: 'en' | 'ru') => {
        setLanguage(lang);
        localStorage.setItem('arctic-language', lang);
    };

    const handleFontSizeChange = (size: FontSizeOption) => {
        setFontSize(size);
        localStorage.setItem('arctic-font-size', size);
    };

    const toggleControls = () => {
        const newState = !controlsOn;
        setControlsOn(newState);
        localStorage.setItem('arctic-controls', newState ? 'on' : 'off');
    };

    return (
        <div className={`bg-black text-white min-h-screen w-full px-4 py-6 flex flex-col items-center ${fontClass}`}>
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
            <h1 className="text-2xl font-bold mb-10 text-center">{t.title}</h1>

            {/* Settings Sections */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-y-10 md:gap-x-16 w-full max-w-5xl">
                {/* Font Size */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">{t.textSize}</h2>
                    <div className="flex flex-col gap-3 w-40">
                        {[
                            { label: `${t.small} 🔹`, value: 'small' },
                            { label: `${t.normal} 🔸`, value: 'normal' },
                            { label: `${t.big} 🔷`, value: 'big' },
                            { label: `${t.huge} 🔶`, value: 'huge' },
                        ].map(({ label, value }) => (
                            <button
                                key={value}
                                onClick={() => handleFontSizeChange(value as FontSizeOption)}
                                className={`py-2 rounded font-semibold transition ${
                                    fontSize === value ? 'bg-orange-500 text-white scale-105' : 'bg-white text-black'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">{t.controls}</h2>
                    <div className="flex flex-col gap-3 w-32">
                        <button
                            onClick={toggleControls}
                            className={`py-2 rounded font-semibold transition ${
                                controlsOn ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                            }`}
                        >
                            {controlsOn ? t.on : t.off}
                        </button>
                    </div>
                </div>

                {/* Language */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">{t.language}</h2>
                    <div className="flex flex-col gap-3 w-40">
                        <button
                            className={`py-2 rounded font-semibold transition ${
                                language === 'en' ? 'bg-orange-500 text-white scale-105' : 'bg-white text-black'
                            }`}
                            onClick={() => handleLanguageChange('en')}
                        >
                            {t.eng}
                        </button>
                        <button
                            className={`py-2 rounded font-semibold transition ${
                                language === 'ru' ? 'bg-orange-500 text-white scale-105' : 'bg-white text-black'
                            }`}
                            onClick={() => handleLanguageChange('ru')}
                        >
                            {t.rus}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
