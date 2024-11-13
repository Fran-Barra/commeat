import { cva } from "class-variance-authority";

interface FilterProps {
    name: string;
    selected: boolean;
    onClick: () => void;
}

const filterVariant = cva([
    'p-2.5',
    'rounded',
    'border',
    'border-primary-500',
    'flex',
    'h-7',
    'items-center',
    'justify-center'
], {
    variants: {
        selected: {
            true: ['bg-primary-500 text-white'],
            false: ['bg-white text-primary-500'],
        }
    },
    defaultVariants: {
        selected: false,
    },
});

const Filter = ({ name, selected, onClick }: FilterProps) => {
    return (
        <div className={filterVariant({ selected })} onClick={onClick}>
            <p className={"text-p2"}>{name}</p>
        </div>
    );
};

export default Filter;
