import {IconProps} from "../../../utils/types.tsx";

const Plus = ({width = 24, height = 24, color = '#6E7174', onClick}: IconProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.4259 0.910889C5.97819 0.910889 6.4259 1.3586 6.4259 1.91089V5.28589H9.8009C10.3532 5.28589 10.8009 5.7336 10.8009 6.28589C10.8009 6.83817 10.3532 7.28589 9.8009 7.28589H6.4259V10.6609C6.4259 11.2132 5.97819 11.6609 5.4259 11.6609C4.87362 11.6609 4.4259 11.2132 4.4259 10.6609V7.28589H1.0509C0.498619 7.28589 0.0509033 6.83817 0.0509033 6.28589C0.0509033 5.7336 0.498619 5.28589 1.0509 5.28589H4.4259V1.91089C4.4259 1.3586 4.87362 0.910889 5.4259 0.910889Z"
                  fill={color}/>
        </svg>
    )
};

export default Plus;