import { useState } from 'react';
import Icon, { IconProps } from "../Icon";

interface NavBarProps {
    selected?: IconProps['variant'];
}

const NavBar = ({ selected = 'home' }: NavBarProps) => {
    const [selectedIcon, setSelectedIcon] = useState<IconProps['variant']>(selected);
    const icons: IconProps['variant'][] = ['home', 'book', 'calendar', 'person'];

    return (
        <div className="flex w-full px-[24px] py-[8px] shadow-custom-nav justify-between items-center gap-[57px] flex-shrink-0 bg-white">
            {icons.map((icon, index) => (
                <div key={index} onClick={() => setSelectedIcon(icon)}>
                    <Icon
                        width={42}
                        height={42}
                        variant={icon}
                        color={selectedIcon === icon ? "primary" : "icon"}
                        filled={selectedIcon === icon}
                    />
                </div>
            ))}
        </div>
    );
};

export default NavBar;
