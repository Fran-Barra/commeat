import Filter from "./Filter";
import {cva} from "class-variance-authority";
import Icon from "../Icon";
import {useState} from "react";
import BottomSheet from "../BottomSheet";

interface FiltersProps {
    filters: {
        name: string;
        selected: boolean;
    }[];
    handleFilter: (index: number) => void;
}

const mainContainer = cva([
    'relative',
    'flex',
    'flex-row',
    'items-center',
    'gap-3',
]);

const filterButton = cva([
    'flex',
    'flex-row',
    'items-center',
    'gap-1',
    'underline',
    'min-w-max',
]);

const filtersContainer = cva([
    'flex',
    'gap-2.5',
    'items-center',
]);

const initialExtendedFilters = {
    ingredients: [
        { name: 'Carne', selected: false },
        { name: 'Vegetariano', selected: false },
        { name: 'Vegano', selected: false },
        { name: 'Sin gluten', selected: false },
        { name: 'Sin lactosa', selected: false },
        { name: 'Sin frutos secos', selected: false },
        { name: 'Sin huevo', selected: false },
        { name: 'Sin soja', selected: false },
        { name: 'Sin marisco', selected: false },
        { name: 'Sin pescado', selected: false },
    ],
    preparationTime: [
        { name: '10-20 min', selected: false },
        { name: '30-45 min', selected: false },
        { name: '45-60 min', selected: false },
        { name: '60-120 min', selected: false },
    ],
    ration: [
        { name: '1 Ración', selected: false },
        { name: '2 Raciones', selected: false },
        { name: '3 Raciones', selected: false },
        { name: '4 o más', selected: false },
    ],
};

type ExtendedFilterKeys = keyof typeof initialExtendedFilters;

const Filters = ({ filters, handleFilter }: FiltersProps) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [extendedFilters, setExtendedFilters] = useState(initialExtendedFilters);

    const handleExtendedFilter = (index: number, attribute: ExtendedFilterKeys) => {
        const newFilters = extendedFilters[attribute].map((filter: { name: string; selected: boolean }, i: number) => {
            if (i === index) {
                return {
                    ...filter,
                    selected: !filter.selected
                }
            }
            return filter
        })
        setExtendedFilters({
            ...extendedFilters,
            [attribute]: newFilters
        })
    }

    return (
        <div className={mainContainer()}>
            <div className={filterButton()} onClick={() => setIsFilterOpen(true)}>
                <Icon variant={'controls'} color={"white"}/>
                <p className={"text-p3"}>Filtrar</p>
            </div>
            <div className={filtersContainer()}>
                {filters.map((filter, index) => <Filter key={index} {...filter} onClick={() => handleFilter(index)}/>)}
            </div>
            <BottomSheet open={isFilterOpen} onClose={() => setIsFilterOpen(false)} title={"Filtrar"} buttonText={"Confirmar"}>
                <div className={"flex flex-col gap-4 pt-5 pb-5"}>
                    <p className={"text-h5"}>Ingredientes</p>
                    <div className={"flex flex-wrap gap-2.5"}>
                        {extendedFilters.ingredients.map((filter, index) => <Filter key={index} {...filter} onClick={() => handleExtendedFilter(index, 'ingredients')}/>)}
                    </div>
                    <p className={"text-h5"}>Tiempo de preparación</p>
                    <div className={"flex flex-wrap gap-2.5"}>
                        {extendedFilters.preparationTime.map((filter, index) => <Filter key={index} {...filter} onClick={() => handleExtendedFilter(index, 'preparationTime')}/>)}
                    </div>
                    <p className={"text-h5"}>Raciones</p>
                    <div className={"flex flex-wrap gap-2.5"}>
                        {extendedFilters.ration.map((filter, index) => <Filter key={index} {...filter} onClick={() => handleExtendedFilter(index, 'ration')}/>)}
                    </div>
                </div>
            </BottomSheet>
        </div>
    );
};

export default Filters;