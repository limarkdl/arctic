'use client';

import React, {createContext, ReactNode, useEffect, useState} from 'react';

export type FontSizeOption = 'small' | 'normal' | 'big' | 'huge';

export interface ScalingContextType {
    fontSize: FontSizeOption;
    setFontSize: (size: FontSizeOption) => void;
}

export const ScalingContext = createContext<ScalingContextType | undefined>(undefined);

export const fontSizeScales: Record<FontSizeOption, number> = {
    small: 0.875,
    normal: 1,
    big: 1.125,
    huge: 1.25
};

interface ScalingProviderProps {
    children: ReactNode;
}

export default function ScalingProvider({children}: ScalingProviderProps) {
    const [fontSize, setFontSizeState] = useState<FontSizeOption>('normal');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const savedFontSize = localStorage.getItem('arctic-font-size') as FontSizeOption;

        if (['small', 'normal', 'big', 'huge'].includes(savedFontSize)) {
            setFontSizeState(savedFontSize);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            const scale = fontSizeScales[fontSize];

            const baseValues = {
                'xs': 0.75,
                'sm': 0.875,
                'base': 1,
                'lg': 1.125,
                'xl': 1.25,
                '2xl': 1.5,
                '3xl': 1.875,
                '4xl': 2.25,
                '5xl': 3,
                '6xl': 3.75,
                '7xl': 4.5,
                '8xl': 6,
                '9xl': 8
            };

            Object.entries(baseValues).forEach(([size, value]) => {
                const scaledValue = value * scale;
                document.documentElement.style.setProperty(
                    `--arctic-text-${size}`,
                    `${scaledValue}rem`
                );
            });

            const leadingScale = fontSize === 'huge' ? 0.95 : (fontSize === 'small' ? 1.05 : 1);
            document.documentElement.style.setProperty('--arctic-leading-normal', `${1.5 * leadingScale}`);
            document.documentElement.style.setProperty('--arctic-leading-relaxed', `${1.625 * leadingScale}`);
        }
    }, [fontSize, isClient]);

    const setFontSize = (size: FontSizeOption) => {
        setFontSizeState(size);
        localStorage.setItem('arctic-font-size', size);
    };

    const value = {
        fontSize,
        setFontSize,
    };

    return (
        <ScalingContext.Provider value={value}>
            {children}
        </ScalingContext.Provider>
    );
};
