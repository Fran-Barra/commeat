import { useState } from "react";
import Empanada from "../../../src/assets/Sample/empanadas.png"
import Flour from "../../../src/assets/Sample/flour.png"
import Header from "../../component/common/Header";
import Icon from "../../component/common/Icon";
import RecipeActions from "../../component/common/RecipeActions";
import StoreItemCard from "../../component/common/StoreItemCard";
import { Recipe } from "../../utils/types";
import BottomSheetShort from "../../component/common/BottomSheetShort";


const recipe = {
    img: Empanada,
    name: "Empanadas de carne",
    description: "La lasaña es un tipo de pasta. Se suele servir en láminas superpuestas intercaladas con capas de ingredientes al gusto, más frecuentemente carne en salsa boloñesa y bechamel. ",
    ingredients: [
        {
            name: 'Harina',
            price: 1000,
            img: Flour,
            amount: 1
        },
        {
            name: 'Harina',
            price: 1000,
            img: Flour,
            amount: 1
        },
        {
            name: 'Harina',
            price: 1000,
            img: Flour,
            amount: 1
        },
        {
            name: 'Harina',
            price: 1000,
            img: Flour,
            amount: 1
        },
    ],
    cooking_method: "1. En una olla con aceite caliente agregar la cebolla y el morrón. Dejar dorar unos minutos y cuando estén a medio cocer (cebolla transparente), agregar el ajo y un poco de sal y pimienta." + 
    "\n 2. Subir el fuego y agregar de una toda la carne picada. Mover la carne para que no quede pegada. Cuando la carne esté sellada agregar el tomate en cubos y las 2 cdas de puré de tomates. Condimentar con pimenton y comino, un poco más de sal y pimienta y mezclar bien. Tapar (no del todo, dejar un pequeño hueco) y dejar cocinar una media hora revolviendo de a poco." +
    "\n 3. Sacar del fuego y dejar enfriar en la olla. Agregar las aceitunas picadas y mezclar bien. (En este paso pueden agregar cualquier otra cosa que le quieran poner: huevo duro, pasas, papa, etc)" +
    "\n 4. Repartir el relleno en las tapas de empanada,  y cerrar con un repulgue tradicional. Antes de meterlas en el horno pueden pintarlas con huevo, pero es muy a gusto y opcional." +
    "\n 5. Poner nuestras empanadas de carne en una placa y llevar a horno fuerte hasta que estén doradas y a disfrutar!"
}

const RecipePage = () => {

    // const handleGoBack = () => {
    //     console.log("go back");
        
    // }

    return (
        <div>
            <Header leftIcon={true} title={"Recipe"} />
            <img className="w-full h-auto object-cover max-h-60" src={recipe.img}/>
            <RecipeInfo recipe={recipe}/>
            <div className="fixed bottom-0 w-full z-10">
                <BottomSheetShort
                    buttonText={"comprar"}
                    rightText={"A pagar"}
                    leftText={`$${recipe.ingredients.reduce((total, ing) => total + ing.price * ing.amount, 0)}`}
                />
            </div>
        </div>
    )
}


const RecipeInfo = ({recipe} : {recipe : Recipe}) => {
    const [actionsActive, setActionAtive] = useState<boolean>()

    const tugleAction = () => {
        setActionAtive(v => !v)
    }

    return (
        <div className="bg-gray-200">
            <div className="flex flex-row justify-between">
                <p className="text-h5 ps-4">{recipe.name}</p>
                <div className="relative">
                    <div className="mr-2 mt-2" onClick={tugleAction}>
                        <Icon variant={"three-dots"} color={"black"} />
                    </div>
                    {actionsActive && 
                        <div className="absolute right-0">
                            <RecipeActions />
                        </div>
                    }
                </div>
            </div>
            <p className="text-p1 font-extralight px-4">{recipe.description}</p>
            <p className="text-p1 font-bold px-4">Ingridientes</p>
            <div className="overflow-x-auto hide-scrollbar ps-4">
                <ol className="flex flex-row space-x-2.5 w-max whitespace-nowrap">
                    {recipe.ingredients.map(ing => <StoreItemCard item={ing} amount={ing.amount} size={"small"} />)}
                </ol>
            </div>
            <p className="text-p1 font-bold text-gray-800 px-4">Preparación</p>
            <p className="text-p1 font-extralight px-4">{recipe.cooking_method}</p>
        </div>
    )
}

export default RecipePage