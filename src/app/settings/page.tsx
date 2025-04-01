'use client';

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, Home} from "lucide-react";
import {LanguageSwitcher, useLanguage} from "@/features/localization";

export default function Page() {
    type FontSizeOption = 'small' | 'normal' | 'big' | 'huge';
    const [fontSize, setFontSize] = useState<FontSizeOption>('normal');
    const [controlsOn, setControlsOn] = useState(true);

    const {t} = useLanguage('settings');

    useEffect(() => {
        const savedFontSize = localStorage.getItem('arctic-font-size') as FontSizeOption;
        const savedControls = localStorage.getItem('arctic-controls') === 'on';

        if (['small', 'normal', 'big', 'huge'].includes(savedFontSize)) setFontSize(savedFontSize);
        setControlsOn(savedControls);
    }, []);


    const fontSizeMap: Record<FontSizeOption, string> = {
        small: 'text-sm',
        normal: 'text-base',
        big: 'text-lg',
        huge: 'text-xl'
    };
    const fontClass = fontSizeMap[fontSize];


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
            <header
                className="w-full flex items-center justify-between mb-8 max-w-5xl border-b border-white/10 pb-4 px-2">
                {/* Left - Back */}
                <Link href="/">
                    <ArrowLeft className="w-6 h-6 text-white"/>
                </Link>

                {/* Center - Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                    <p className="text-xl font-bold">ARctic</p>
                </div>

                {/* Right - Home */}
                <Link href="/">
                    <Home className="w-6 h-6 text-white"/>
                </Link>
            </header>


            {/* Title */}
            <h1 className="text-2xl font-bold mb-10 text-center">{t('title')}</h1>

            {/* Settings Sections */}
            <div
                className="flex flex-col md:flex-row justify-center items-stretch gap-y-10 md:gap-x-16 w-full max-w-5xl">
                {/* Font Size */}
                <div className="flex flex-col items-center w-full md:w-auto text-center">
                    <h2 className="text-lg font-semibold mb-4">{t('textSize')}</h2>
                    <div className="flex flex-col gap-3 w-40">
                        {[
                            {label: `${t('small')} 🔹`, value: 'small'},
                            {label: `${t('normal')} 🔸`, value: 'normal'},
                            {label: `${t('big')} 🔷`, value: 'big'},
                            {label: `${t('huge')} 🔶`, value: 'huge'},
                        ].map(({label, value}) => (
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
                    <h2 className="text-lg font-semibold mb-4">{t('controls')}</h2>
                    <div className="flex flex-col gap-3 w-32">
                        <button
                            onClick={toggleControls}
                            className={`py-2 rounded font-semibold transition ${
                                controlsOn ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                            }`}
                        >
                            {controlsOn ? t('on') : t('off')}
                        </button>
                    </div>
                </div>

                <LanguageSwitcher/>
            </div>
        </div>
    );
}
