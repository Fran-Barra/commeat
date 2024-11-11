import {IconProps} from "../../../utils/types.tsx";


const Subtract = ({width = 24, height = 24, color = '#6E7174', onClick}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.199097 1.28589C0.199097 0.733604 0.646812 0.285889 1.1991 0.285889H9.9491C10.5014 0.285889 10.9491 0.733604 10.9491 1.28589C10.9491 1.83817 10.5014 2.28589 9.9491 2.28589H1.1991C0.646812 2.28589 0.199097 1.83817 0.199097 1.28589Z"
                  fill={color}/>
        </svg>
    )
}
export default Subtract;