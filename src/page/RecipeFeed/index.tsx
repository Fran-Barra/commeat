import RecipeCard, {RecipeCardProps} from "../../component/common/RecipeCard";
import Header from "../../component/common/Header";
import SearchBar from "../../component/common/SearchBar";
import Icon from "../../component/common/Icon";
import Filters from "../../component/common/Filters";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface RecipeFeedProps {
    recipes: RecipeCardProps[];
    filters: {
        name: string;
        selected: boolean;
    }[];

}


const RecipeFeed = ({recipes, filters}: RecipeFeedProps) => {
    const [shownFilters, setShownFilters] = useState(filters);

    const navigate = useNavigate();



    const handleFilter = (index: number) => {
        const newFilters = shownFilters.map((filter, i) => {
            if (i === index) {
                return {
                    ...filter,
                    selected: !filter.selected
                }
            }
            return filter;
        });
        setShownFilters(newFilters);
    }

    return (
        <div className={'gap-[24px] flex flex-col bg-gray-100 h-full'}>
            <Header logo={true}/>
            <div className={'flex items-center w-full gap-[24px] flex-col px-4'}>
                <div className={'flex flex-row gap-3 items-center w-full'}>
                    <SearchBar placeholder={'Buscar recetas, ingredientes o chef...'} icon={'search'} iconPosition={'right'}/>
                    <Icon variant={'shopping-cart'} width={36} height={36}/>
                </div>
                <div className={'flex w-full'}>
                    <Filters filters={shownFilters} handleFilter={handleFilter}/>
                </div>
                <div className={'flex w-full flex-col gap-[24px]'}>
                    {recipes.map((recipe) => (<div onClick={() => navigate('/recipe')}><RecipeCard {...recipe}/></div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeFeed;