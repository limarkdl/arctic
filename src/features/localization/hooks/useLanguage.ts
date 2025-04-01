'use client';

import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n';

export function useLanguage(namespace: string = 'common') {
    const {t, i18n} = useTranslation(namespace);

    const currentLanguage = i18n.language;

    const changeLanguage = (lang: string) => {
        if (Object.keys(LANGUAGES).includes(lang)) {
            void i18n.changeLanguage(lang);
            localStorage.setItem('arctic-lang', lang);
        }
    };

    const availableLanguages = Object.entries(LANGUAGES).map(([code, name]) => ({
        code,
        name,
        active: code === currentLanguage
    }));

    return {
        t,
        currentLanguage,
        changeLanguage,
        availableLanguages
    };
}
