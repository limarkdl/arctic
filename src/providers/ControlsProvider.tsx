'use client';

import React, {createContext, ReactNode, useEffect, useState} from 'react';

export interface ControlsContextType {
    controlsOn: boolean;
    setControlsOn: (state: boolean) => void;
    toggleControlsOn: () => void;
}

export const ControlsContext = createContext<ControlsContextType | undefined>(undefined);


interface ControlsProviderProps {
    children: ReactNode;
}

export default function ControlsProvider({children}: ControlsProviderProps) {
    const [controlsOn, setControlsOnState] = useState(true);

    useEffect(() => {
        const savedControls = localStorage.getItem('arctic-controls') === 'on';

        setControlsOnState(savedControls);
    }, []);

    const setControlsOn = (state: boolean) => {
        setControlsOnState(state);
        localStorage.setItem('arctic-controls', state ? 'on' : 'off');
    };

    const toggleControlsOn = () => {
        setControlsOn(!controlsOn);
    }

    const value = {
        controlsOn,
        setControlsOn,
        toggleControlsOn,
    };

    return (
        <ControlsContext.Provider value={value}>
            {children}
        </ControlsContext.Provider>
    );
};
