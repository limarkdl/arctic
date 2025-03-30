'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, ArrowLeft } from "lucide-react";

export default function HowToPlayPage() {
    const [language, setLanguage] = useState<'en' | 'ru'>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('arctic-language');
        if (savedLang === 'ru' || savedLang === 'en') {
            setLanguage(savedLang);
        }
    }, []);

    const t = {
        en: {
            howToPlay: "How to Play ARctic",
            steps: [
                {
                    title: "Scan the AR Marker",
                    desc: "Tap 'Start' and point your camera at the AR marker to initialize the AR experience."
                },
                {
                    title: "Explore the AR Map",
                    desc: "Move your device around to discover AR objects anchored in your environment."
                },
                {
                    title: "Interact with AR Objects",
                    desc: "Tap on AR elements to hear descriptions, get information, or follow audio cues."
                },
                {
                    title: "Follow the Directions",
                    desc: "Use on-screen arrows and markers to navigate toward your next objective."
                }
            ],
            scanNote: "Scan this AR marker to begin",
            back: "Back"
        },
        ru: {
            howToPlay: "Как играть в ARctic",
            steps: [
                {
                    title: "Сканируйте AR-маркер",
                    desc: "Нажмите 'Начать' и наведите камеру на AR-маркер для инициализации."
                },
                {
                    title: "Исследуйте карту AR",
                    desc: "Перемещайте устройство, чтобы находить объекты AR в окружении."
                },
                {
                    title: "Взаимодействуйте с объектами",
                    desc: "Нажимайте на элементы AR, чтобы услышать описания или получить информацию."
                },
                {
                    title: "Следуйте указаниям",
                    desc: "Используйте стрелки и маркеры для навигации к цели."
                }
            ],
            scanNote: "Сканируйте этот AR-маркер, чтобы начать",
            back: "Назад"
        }
    }[language];

    return (
        <div className="bg-black text-white h-screen w-screen flex flex-col relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <ArrowLeft className="w-6 h-6 text-white mr-2 hover:opacity-80" />
                    </Link>
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <p className="text-2xl font-bold">ARctic</p>
                </div>
                <Link href="/settings">
                    <Settings className="text-white w-6 h-6" />
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center text-center px-6 py-10 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-10">{t.howToPlay}</h1>

                <div className="flex flex-col gap-6 w-full text-left">
                    {t.steps.map((step, index) => (
                        <div key={index} className="bg-white text-black p-5 rounded-xl border border-gray-200 shadow-md">
                            <h2 className="text-lg font-semibold mb-2">
                                {index + 1}. {step.title}
                            </h2>
                            <p className="text-sm text-gray-700">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/*<div className="mt-16 flex flex-col items-center">*/}
                {/*    <Image*/}
                {/*        src="/AR-marker.png"*/}
                {/*        alt="Example of an AR marker to scan"*/}
                {/*        width={180}*/}
                {/*        height={180}*/}
                {/*        className="object-contain mb-2"*/}
                {/*    />*/}
                {/*    <p className="text-sm text-gray-300">{t.scanNote}</p>*/}
                {/*</div>*/}
            </main>
        </div>
    );
}
