import React, { useState } from 'react';
import Icon from "../Icon";

const MenuComponent = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="flex flex-col items-start w-[250px] rounded-[12px] shadow-recipe-actions">
            <MenuItem
                iconVariant="bookmark"
                text="Agregar a favoritos"
                size={27}
                isFirst={true}
                filled={isFavorite}
                onClick={toggleFavorite}
            />
            <MenuItem iconVariant="shopping-cart" text="Agregar a carrito" size={23} filled={true} />
            <MenuItem iconVariant="calendar-clock" text="Programar" size={23} />
        </div>
    );
};

interface MenuItemProps {
    iconVariant: string;
    text: string;
    size: number;
    filled?: boolean;
    isFirst?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconVariant, text, size, filled, isFirst, onClick }) => {
    const rightPadding = size === 27 ? 'pr-3.5' : 'pr-4';

    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-between w-full h-[44px] cursor-pointer ${!isFirst ? 'border-t border-solid border-gray-400' : ''} ${rightPadding} pl-4`}
        >
            <span className="flex-1 overflow-hidden text-ellipsis text-black font-poppins text-p1 font-normal leading-normal whitespace-nowrap">
                {text}
            </span>
            <Icon variant={iconVariant as any} color="black" width={size} height={size} filled={filled} />
        </div>
    );
};

export default MenuComponent;
