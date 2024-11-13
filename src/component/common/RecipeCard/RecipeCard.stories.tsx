import {Meta, StoryObj} from "@storybook/react";
import RecipeCard from "./index.tsx";



const meta: Meta<typeof RecipeCard> ={
    title:'RecipeCard',
    component:RecipeCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RecipeCard>

export const Default: Story = {
    name:'Default',
    args: {
        recipeName: 'Empanadas de carne',
        recipeTimeInMin: 60,
        recipeImg: 'https://assets.elgourmet.com/wp-content/uploads/2023/10/EMPANADAS-1-1024x683.jpg.webp',
        recipePortions: 4,
        recipeChips: ['Carne', 'Empanadas', 'Fritura'],
        optionsOnClick: () => console.log('Options Clicked')
    },
    render: (args) => <div style={{width:'388px'}}><RecipeCard {...args}/></div>
}