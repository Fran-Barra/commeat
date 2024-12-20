import Icon from "../Icon";
import HeaderLogo from "./headerLogo";
import {useNavigate} from "react-router-dom";

interface HeaderProps {
    leftIcon?: boolean;
    title?: string;
    logo?: boolean;
}

const Header = ({ leftIcon, title, logo }: HeaderProps) => {
    const shouldShowLogo = logo && !title;
    const nav = useNavigate();

    return (
        <div className="flex w-full p-[16px_10px_10px_10px] justify-between items-center gap-[10px] flex-shrink-0 bg-primary-500 text-white">
            {leftIcon && (
                <div className="flex-shrink-0" onClick={() => {nav(-1)}}>
                    <Icon width={32} height={32} variant={"arrow-back"} color={"white"} />
                </div>
            )}
            <div className="flex-1 flex justify-center">
                {title && <div className="text-h5 font-medium">{title}</div>}
                {shouldShowLogo && <HeaderLogo />}
            </div>
            {leftIcon && (
            //     Agrego un elemento vacío del tamaño del icono para compensar y que el título quede en el medio
            <div className="w-[32px] "></div>
            )}
        </div>
    );
};

export default Header;
