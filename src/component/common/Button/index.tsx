import { ButtonHTMLAttributes } from "react"
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva([],{
    variants: {
        variant:{
            fulfilled: [
                'bg-primary-500 text-white',
                'active:bg-primary-600',
                'disabled:bg-grey-300 disabled:text-grey-700',
            ],
            outlined:[
                'bg-white text-primary-500 border border-primary-500',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',
            ]
        },
        size: {
            small:['h-10 w-full px-4 py-2 text-xs'],
            medium:['h-11 w-full px-4 py-3 text-sm'],
            large: ['h-12 w-full px-4 py-3 text-base']
        }
    },
    defaultVariants: {
        variant: 'fulfilled',
        size: 'large'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Button = ({variant, size, ...props} : ButtonProps) => {
    return (
        <button className={buttonVariant({size, variant})} {...props} />
    )
}

export default Button