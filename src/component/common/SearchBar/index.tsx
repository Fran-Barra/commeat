import React, { useState } from 'react';
import Icon, { IconProps } from "../Icon";

interface SearchBarProps {
    placeholder: string;
    icon?: IconProps['variant'];
    iconPosition?: 'left' | 'right';
}

const SearchBar = ({
                       placeholder,
                       icon,
                       iconPosition = 'left',
                   }: SearchBarProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasContent(event.target.value.length > 0);
    };

    const iconColor = hasContent ? "black" : "icon";

    return (
        <div className="inline-flex flex-col items-start w-full">
            <div className={`flex items-center p-3.5 gap-2 w-full rounded-lg border bg-transparent ${
                (isFocused || hasContent)
                    ? 'border-black text-black'
                    : 'border-gray-600 text-gray-500'
            } font-normal leading-normal outline-none`}>

                {/* Renderizar el ícono condicionalmente a la izquierda */}
                {icon && iconPosition === 'left' && (
                    <div className="flex-shrink-0 mr-2">
                        <Icon variant={icon} color={iconColor} width={16} height={16}/>
                    </div>
                )}

                <input
                    type="text"
                    placeholder={placeholder}
                    className="flex-1 bg-transparent outline-none placeholder:text-gray-500 placeholder:text-p1 placeholder:font-normal"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleInputChange}
                />

                {/* Renderizar el ícono condicionalmente a la derecha */}
                {icon && iconPosition === 'right' && (
                    <div className="flex-shrink-0 ml-2">
                        <Icon variant={icon} color={iconColor} width={16} height={16}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
