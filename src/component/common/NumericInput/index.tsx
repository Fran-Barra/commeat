import {cva, VariantProps} from "class-variance-authority";
import Icon from "../Icon";

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
        small: {sizeMean:12,  width: 12, height: 3 },
        large: {sizeMean: 16, width: 16, height: 6 }
    };

    const { sizeMean, width, height } = iconDimensions[size ? size : 'small'];

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
            <div onClick={() => handleValueChange(value - step)}>
                <Icon variant={'subtract'} color={'black'} width={width} height={height}/>
            </div>
                {value}
            <div onClick={() => handleValueChange(value + step)}>
                <Icon variant={'plus'} color={'black'} width={sizeMean} height={sizeMean}/>
            </div>
        </div>

    )

}
export default NumericInput;