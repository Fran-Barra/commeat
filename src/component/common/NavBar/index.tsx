import Icon, {IconProps} from "../Icon";

interface NavBarProps {
    icons: Array<IconProps['variant']>;
    selected?: IconProps['variant'];
}

const NavBar = ({ icons, selected='home' }: NavBarProps) => {

    return (
        <div className="flex w-[430px] p-[10px_46px_10px_46px] justify-between items-center gap-[57px] flex-shrink-0 bg-white">
            {icons.map((icon, index) => (
                <div key={index}>
                    <Icon width={42} height={42} variant={icon} color={"black"} />
                </div>
            ))}
        </div>
    );
};

export default NavBar;
