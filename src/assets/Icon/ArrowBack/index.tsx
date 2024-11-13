import {IconProps} from "../../../utils/types.tsx";


const ArrowBack = ({width = 24, height = 24, color}: IconProps) => {
    return (
        <svg width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`${color}`} d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#1D1B20"/>
        </svg>

    )
}
export default ArrowBack;