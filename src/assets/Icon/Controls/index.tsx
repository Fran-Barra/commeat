import {IconProps} from "../../../utils/types.tsx";


const Controls = ({width = 24, height = 24, color}: IconProps) => {
    return (
        <svg className={`${color}`} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5.5" y1="8" x2="5.5" y2="18" stroke="black"/>
            <line x1="5.5" y1="2" x2="5.5" y2="5" stroke="black"/>
            <circle cx="5.5" cy="6.5" r="2" stroke="black"/>
            <line x1="13.5" y1="12" x2="13.5" y2="2" stroke="black"/>
            <line x1="13.5" y1="18" x2="13.5" y2="15" stroke="black"/>
            <circle cx="13.5" cy="13.5" r="2" transform="rotate(-180 13.5 13.5)" stroke="black"/>
        </svg>
    )
}
export default Controls;