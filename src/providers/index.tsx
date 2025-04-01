import React, {ReactNode} from 'react';
import I18nProvider from "@/providers/I18nProvider";
import ScalingProvider from '@/providers/ScalingProvider';
import ControlsProvider from "@/providers/ControlsProvider";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({children}: ProvidersProps) => {

    return (
        <I18nProvider>
            <ScalingProvider>
                <ControlsProvider>
                    {children}
                </ControlsProvider>
            </ScalingProvider>
        </I18nProvider>
    );
};

export default Providers;