import Button from "../Button";
import NumericInput from "../NumericInput";
import {useState} from "react";


export interface BottomSheetShortProps {
    rightText: string;
    buttonText: string;
    leftText?: string; // If exists, render text instead of NumericInput
}

const BottomSheetShort = ({rightText, buttonText, leftText}: BottomSheetShortProps) => {
    const [value, setValue] = useState(2)

    return (
        <div className='bg-white border rounded-t-lg'>
            <div className='flex flex-row justify-between mt-4 mb-[18px] px-8'>
                {leftText ? (<p className={'text-h5'}>{leftText}</p>) : <NumericInput value={value} max={1000} handleChange={setValue} />}
                <p className={'text-h5'}>{rightText}</p>
            </div>
            <div className='bg-white px-8 pb-4'>
                <Button text={buttonText}/>
            </div>
        </div>
    )
}

export default BottomSheetShort