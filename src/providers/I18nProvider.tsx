'use client';

import {ReactNode, useEffect, useState} from 'react';
import {I18nextProvider} from 'react-i18next';
import {i18n} from "i18next";
import initI18n from "@/features/localization/i18n";

interface I18nProviderProps {
    children: ReactNode;
}

export default function I18nProvider({children}: I18nProviderProps) {
    const [instance, setInstance] = useState<i18n | null>(null);

    useEffect(() => {
        const i18nInstance = initI18n();
        setInstance(i18nInstance);
    }, []);

    if (!instance) {
        return <div>Loading translations...</div>;
    }

    return (
        <I18nextProvider i18n={instance}>
            {children}
        </I18nextProvider>
    );
}
