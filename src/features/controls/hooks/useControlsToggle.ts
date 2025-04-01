import {useContext} from "react";
import {ControlsContext, ControlsContextType} from "@/providers/ControlsProvider";

export const useControlsToggle = (): ControlsContextType => {
    const context = useContext(ControlsContext);
    if (context === undefined) {
        throw new Error('useControlsToggle must be used within a ControlsProvider');
    }
    return context;
};