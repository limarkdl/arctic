import React from 'react';
import {useLanguage} from '../hooks/useLanguage';
import {LANGUAGES} from "../i18n";

const LanguageSwitcher = () => {
    const {t, currentLanguage, changeLanguage} = useLanguage();

    const handleLanguageChange = (lang: 'en' | 'ru') => {
        changeLanguage(lang);
    };

    return (
        <div className="flex flex-col items-center w-full md:w-auto text-center">
            <h2 className="text-lg font-semibold mb-4">{t('language')}</h2>
            <div className="flex flex-col gap-3 w-40">
                {Object.entries(LANGUAGES).map(([key]) => (
                    <button key={key}
                            className={`py-2 rounded font-semibold transition ${
                                currentLanguage === key ? 'bg-orange-500 text-white scale-105' : 'bg-white text-black'
                            }`}
                            onClick={() => handleLanguageChange(key as 'en' | 'ru')}
                    >
                        {t(key)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;