import React, { useState } from 'react';
import Icon, { IconProps } from "../Icon";

interface SearchBarProps {
    placeholder: string;
    width?: number;
    icon?: IconProps['variant'];
    iconPosition?: 'left' | 'right'; // New prop to determine icon position
}

const SearchBar = ({
                       placeholder,
                       width = 249,
                       icon,
                       iconPosition = 'left', // Default position is left
                   }: SearchBarProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasContent(event.target.value.length > 0);
    };

    return (
        <div className="inline-flex flex-col items-start" style={{ width: `${width}px` }}>
            <div className={`flex items-center p-3.5 gap-2 w-full rounded-lg border bg-white ${
                (isFocused || hasContent)
                    ? 'border-black text-black' 
                    : 'border-gray-400 text-gray-500' 
            } font-normal leading-normal outline-none mt-2`}>

                {/* Conditionally render icon on the left */}
                {icon && iconPosition === 'left' && (
                    <div className="flex-shrink-0 mr-2">
                        <Icon variant={"trash"} color={"secondary"} />
                    </div>
                )}

                <input
                    type="text"
                    placeholder={placeholder}
                    className="flex-1 outline-none bg-white placeholder:text-gray-300 placeholder:text-[16px] placeholder:font-normal"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleInputChange}
                />

                {/* Conditionally render icon on the right */}
                {icon && iconPosition === 'right' && (
                    <div className="flex-shrink-0 ml-2">
                        <Icon variant={icon} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
