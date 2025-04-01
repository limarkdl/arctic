import React from 'react';
import {FontSizeOption} from "@/providers/ScalingProvider";
import {useLanguage} from '@/features/localization';
import {useScaling} from "@/features/scaling";

const ScalingSwitcher = () => {
    const {t} = useLanguage('settings');
    const {fontSize, setFontSize} = useScaling();

    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-y-10 md:gap-x-16 w-fit max-w-5xl">
            <div className="flex flex-col items-center w-full md:w-auto text-center">
                <h2 className="text-xl font-semibold mb-4">{t('textSize')}</h2>
                <div className="flex text-base flex-col gap-3 w-40">
                    {[
                        {label: `${t('small')} 🔹`, value: 'small'},
                        {label: `${t('normal')} 🔸`, value: 'normal'},
                        {label: `${t('big')} 🔷`, value: 'big'},
                        {label: `${t('huge')} 🔶`, value: 'huge'},
                    ].map(({label, value}) => (
                        <button
                            key={value}
                            onClick={() => setFontSize(value as FontSizeOption)}
                            className={`py-2 rounded font-semibold transition ${
                                fontSize === value ? 'bg-orange-500 text-white scale-105' : 'bg-white text-black'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ScalingSwitcher;