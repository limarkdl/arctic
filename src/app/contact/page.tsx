'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ArrowLeft} from 'lucide-react';
import {useLanguage} from "@/features/localization";

const ContactUs: React.FC = () => {

    const {t} = useLanguage('contact')

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-10">
            {/* Header */}
            <div className="w-full max-w-2xl mb-6">
                <div className="flex items-center justify-between mb-4">
                    <Link href="/" className="hover:text-orange-400 transition">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>

                    <div className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="ARctic Logo" width={32} height={32} />
                        <p className="text-xl font-bold tracking-wide">ARctic</p>
                    </div>

                    <div className="w-6" />
                </div>

                {/* Divider */}
                <div className="border-b border-white/10" />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-8">{t('title')}</h1>

            {/* Content */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-inner w-full max-w-md text-center">
                <p className="text-base mb-4">{t('subtitle')}</p>
                <a
                    href={`mailto:${t('email')}`}
                    className="text-blue-400 underline hover:text-blue-300 transition text-lg font-medium break-all"
                >
                    {t('email')}
                </a>
            </div>
        </div>
    );
};

export default ContactUs;
