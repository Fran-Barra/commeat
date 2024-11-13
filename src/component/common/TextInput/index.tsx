import { useState } from 'react';

interface TextInputProps {
    label: string;
    placeholder: string;
    helperText: string;
    error?: boolean;
    width?: number;  // Allow for dynamic width
}

const TextInput = ({ label, placeholder, helperText, error = false, width = 249 }: TextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasContent(event.target.value.length > 0);
    };

    return (
        <div className="inline-flex flex-col items-start" style={{ width: `${width}px` }}> {/* Set dynamic width here */}
            {/* Label */}
            <label
                className={`text-sm font-normal leading-normal ${error ? 'text-error-500' : (isFocused || hasContent ? 'text-black' : 'text-gray-600')}`}
            >
                {label}
            </label>

            {/* Input Field */}
            <input
                type="text"
                placeholder={placeholder}
                className={`flex p-3.5 gap-2 w-full rounded-lg border bg-white ${
                    error
                        ? 'border-error-500 text-error-500'
                        : (isFocused || hasContent)
                            ? 'border-black text-black'
                            : 'border-gray-600 text-gray-500'
                } font-normal leading-normal outline-none mt-2`} // mt-2 to add a gap between label and input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInputChange}
            />

            {/* Helper Text */}
            <span className={`text-xs font-normal leading-normal ${error ? 'text-error-500' : 'text-black'} mt-1`}>
                {helperText}
            </span>
        </div>
    );
};

export default TextInput;
