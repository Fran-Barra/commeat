import {IconProps} from "../../../utils/types.tsx";


const Clock = ({width = 24, height = 24, color}: IconProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                className={`${color}`}
                d="M6.99333 0.0654297C3.31333 0.0654297 0.333332 3.0521 0.333332 6.7321C0.333332 10.4121 3.31333 13.3988 6.99333 13.3988C10.68 13.3988 13.6667 10.4121 13.6667 6.7321C13.6667 3.0521 10.68 0.0654297 6.99333 0.0654297ZM7 12.0654C4.05333 12.0654 1.66667 9.67876 1.66667 6.7321C1.66667 3.78543 4.05333 1.39876 7 1.39876C9.94667 1.39876 12.3333 3.78543 12.3333 6.7321C12.3333 9.67876 9.94667 12.0654 7 12.0654Z"
                fill={color}/>
            <path className={`${color}`} d="M7.33333 3.39844H6.33333V7.39844L9.83333 9.49844L10.3333 8.67844L7.33333 6.89844V3.39844Z"
                  fill={color}/>
        </svg>
    )

}
export default Clock;