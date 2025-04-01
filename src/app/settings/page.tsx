'use client';

import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, Home} from "lucide-react";
import {LanguageSwitcher, useLanguage} from "@/features/localization";
import {ScalingSwitcher} from "@/features/scaling";
import ControlsToggle from "@/features/controls";

export default function Page() {
    const {t} = useLanguage('settings');

    return (
        <div className="bg-black text-white min-h-screen w-full px-4 py-6 flex flex-col items-center">
            <header
                className="w-full flex items-center justify-between mb-8 max-w-5xl border-b border-white/10 pb-4 px-2">
                <Link href="/">
                    <ArrowLeft className="w-6 h-6 text-white"/>
                </Link>

                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                    <p className="text-xl font-bold">ARctic</p>
                </div>

                <Link href="/">
                    <Home className="w-6 h-6 text-white"/>
                </Link>
            </header>

            <h1 className="text-3xl font-bold mb-10 text-center leading-normal">{t('title')}</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-12 justify-evenly max-w-5xl">
                    <ScalingSwitcher/>
                    <ControlsToggle/>
                    <LanguageSwitcher/>
                </div>
        </div>
    );
}
