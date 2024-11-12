import { ButtonHTMLAttributes, cloneElement, ReactElement } from "react"
import {cva, VariantProps} from "class-variance-authority";
import { IconProps } from "../Icon"

const buttonVariant = cva(['flex item-center', 'justify-center'],{
    variants: {
        variant:{
            fulfilled: [
                'bg-primary-500 text-white',
                'active:bg-primary-600',
                'disabled:bg-grey-300 disabled:text-grey-700',
            ],
            outlined:[
                'bg-white text-primary-500 border border-primary-500',
                'active:bg-gray-100',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',
            ]
        },
        size: {
            small:['h-10 w-full px-4 py-2 text-p3'],
            medium:['h-11 w-full px-4 py-3 text-p2'],
            large: ['h-12 w-full px-4 py-3 text-h6']
        }
    },
    defaultVariants: {
        variant: 'fulfilled',
        size: 'large'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
    text: string
    icon?: ReactElement<IconProps>
}

const Button = ({text, variant, size, icon = undefined, ...props} : ButtonProps) => {
    const cloneWithColor = () => {
        if (!icon) return undefined
        const iconColor : "white" | "primary" = variant == 'fulfilled' ? 'white' : 'primary'
        return cloneElement(icon, {
            color: iconColor,
            ...icon.props,
          })
    }

    return (
        <button className={buttonVariant({size, variant})} {...props} >
            {cloneWithColor()}
            <p>{text}</p>
        </button>
    )
}

export default Button