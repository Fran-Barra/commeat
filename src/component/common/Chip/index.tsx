export interface ChipProps {
    variant: 'filled' | 'stroked';
    label: string;
}

const chipBaseClass = 'inline-flex px-2 py-1 justify-center items-center gap-[10px] rounded-full';
const chipVariantClasses = {
    filled: 'bg-primary-500 text-white',
    stroked: 'border border-primary-500 text-primary-500',
};

const Chip = ({ variant, label }: ChipProps) => {
    const chipClass = chipVariantClasses[variant];

    return (
        <div className={`${chipBaseClass} ${chipClass} text-p3 font-regular`}>
            {label}
        </div>
    );
};

export default Chip;
