import { useState } from "react";
import On from "../../../assets/Switch/on.tsx";
import Off from "../../../assets/Switch/off.tsx";

export interface SwitchProps {
    initialIsOn: boolean; // Renombrado para inicializar el estado
}

const Switch = ({ initialIsOn }: SwitchProps) => {
    const [isOn, setIsOn] = useState(initialIsOn);

    const toggleSwitch = () => {
        setIsOn(prevIsOn => !prevIsOn);
    };

    return (
        <div onClick={toggleSwitch}>
            {isOn ? <On /> : <Off />}
        </div>
    );
};

export default Switch;
