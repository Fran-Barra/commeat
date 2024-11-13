import Filter from "./Filter";
import {cva} from "class-variance-authority";
import Icon from "../Icon";

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

const Filters = ({ filters, handleFilter }: FiltersProps) => {
    return (
        <div className={mainContainer()}>
            <div className={filterButton()}>
                <Icon variant={'controls'}/>
                <h6>Filtrar</h6>
            </div>
            <div className={filtersContainer()}>
                {filters.map((filter, index) => <Filter key={index} {...filter} onClick={() => handleFilter(index)}/>)}
            </div>
        </div>
    );
};

export default Filters;