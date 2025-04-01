import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const LANGUAGES = {
    en: 'English',
    ru: 'Русский'
};

const initI18n = () => {
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            supportedLngs: Object.keys(LANGUAGES),
            fallbackLng: 'en',
            defaultNS: 'translation',
            keySeparator: '.',
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
            },
            interpolation: {
                escapeValue: false,
            },
            detection: {
                order: ['localStorage', 'cookie', 'navigator'],
                lookupLocalStorage: 'arctic-lang',
                lookupCookie: 'arctic-lang',
                cookieOptions: {
                    path: '/',
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                }
            },
            react: {
                useSuspense: true
            }
        });

    return i18n;
};

export default initI18n;