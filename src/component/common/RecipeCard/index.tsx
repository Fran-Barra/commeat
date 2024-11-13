import Icon from "../Icon";
import Chip from "../Chip";
import RecipeActions from "../RecipeActions";
import {useState} from "react";

export interface RecipeCardProps {
    recipeName: string;
    recipeTimeInMin: number;
    recipeImg: string;
    recipePortions: number;
    recipeChips: string[];
    optionsOnClick?: () => void;
}

const infoContainer = 'flex flex-row gap-4 items-center'
const specificInfoContainer = 'flex flex-row gap-2 items-center'
const infoText = 'text-p2 text-gray-800'
const imageClass = 'object-cover w-full h-[200px] rounded-t-md'
const containerClass = 'flex flex-col w-full gap-4 rounded-lg shadow-recipe-card pb-4 bg-white'
const contentContainer = 'flex flex-col w-full gap-6 px-4'
const titleContainer = 'flex flex-row w-full justify-between items-center'
const titleText = 'text-h6 font-medium'
const separator = 'text-p1 font-light'
const chipsContainer = 'flex flex-row gap-2 overflow-x-auto'


const RecipeCard = ({recipeName, recipeTimeInMin, recipeImg, recipePortions, recipeChips}: RecipeCardProps) => {

    const [recipeActionsOpen, setRecipeActionsOpen] = useState(false);

    const handleOptionsClick = () => {
        setRecipeActionsOpen(!recipeActionsOpen);
    }

    return (
        <div className={containerClass} >
            <img src={recipeImg} alt={'Recipe Photo'} className={imageClass}/>
            <div className={contentContainer}>
                <div className={titleContainer}>
                    <p className={titleText}>{recipeName}</p>
                    <div className={'relative'}>
                        <div onClick={handleOptionsClick}>
                            <Icon color={'black'} variant={'three-dots'}/>
                        </div>
                        {recipeActionsOpen && <div className={'right-0 absolute'}><RecipeActions/></div>}
                    </div>
                </div>
                <div className={infoContainer}>
                    <div className={specificInfoContainer}>
                            <Icon variant={'clock'} color={'primary'} height={14} width={14}/>
                        <p className={infoText}>{recipeTimeInMin} min</p>
                    </div>
                    <p className={separator}>|</p>
                    <div className={specificInfoContainer}>
                        <Icon variant={'person'} color={'primary'} height={14} width={14}/>
                        <p className={infoText}>{recipePortions} porciones</p>
                    </div>
                </div>
                    <div className={chipsContainer}>
                        {recipeChips.map(chip => <Chip variant={'filled'} label={chip}/>)}
                    </div>
            </div>
        </div>
    );

}

export default RecipeCard