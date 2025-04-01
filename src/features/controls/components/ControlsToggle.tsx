import React from 'react';
import {useControlsToggle} from "@/features/controls/hooks/useControlsToggle";
import {useLanguage} from "@/features/localization";

const ControlsToggle = () => {

    const {t} = useLanguage('settings');

    const {toggleControlsOn, controlsOn} = useControlsToggle()

    const toggleControls = () => {
        toggleControlsOn()
    }

    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">{t('controls')}</h2>
            <div className="flex flex-col gap-3 w-32">
                <button
                    onClick={toggleControls}
                    className={`py-2 text-base rounded font-semibold transition ${
                        controlsOn ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                    }`}
                >
                    {controlsOn ? t('on') : t('off')}
                </button>
            </div>
        </div>
    );
};

export default ControlsToggle;