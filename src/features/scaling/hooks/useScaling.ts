import {useContext} from "react";
import {ScalingContext, ScalingContextType} from "@/providers/ScalingProvider";

export const useScaling = (): ScalingContextType => {
    const context = useContext(ScalingContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a ScalingProvider');
    }
    return context;
};