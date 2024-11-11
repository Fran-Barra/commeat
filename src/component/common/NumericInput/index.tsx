import {cva, VariantProps} from "class-variance-authority";
import Plus from "../../../assets/Icon/Plus";
import Subtract from "../../../assets/Icon/Subtract";

export interface NumericInputAttributes {
    value: number;
    handleChange: (value: number) => void;
    min?: number;
    max: number;
    step?: number;
    disabled?: boolean;
}

const numericInputVariant = cva(['rounded-full', 'border-black', 'flex', 'row', 'justify-center', 'items-center', 'border', 'border-gray-700'], {
    variants: {
        size: {
            small: ['px-3 py-1 text-md gap-3'],
            large: ['px-3 py-1 text-lg gap-4'],
        },
    },
    defaultVariants:{
        size:'small'
    }
});

export interface NumericButtonProps extends NumericInputAttributes, VariantProps<typeof numericInputVariant> {}

const NumericInput = ({size = 'small', value, max, handleChange, disabled,  min = 1, step = 1}: NumericButtonProps) => {

    const iconDimensions = {
        small: { width: 12, height: 3 },
        large: { width: 16, height: 6 }
    };

    const { width, height } = iconDimensions[size ? size : 'small'];

    const handleValueChange = (value: number) => {
        if (!disabled){
            if (value < min){
                value = min;
            }
            if (value > max){
                value = max;
            }
            handleChange(value);
        }
    }

    return (
        <div className={numericInputVariant({size})}>
            <Subtract width={width} height={height} onClick={() => handleValueChange(value - step)}/>
            {value}
            <Plus width={width} height={height} onClick={() => handleValueChange(value + step)}/>
        </div>

    )

}
export default NumericInput;