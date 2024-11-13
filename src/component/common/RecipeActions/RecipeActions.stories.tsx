import {Meta, StoryObj} from "@storybook/react";
import RecipeActions from "./index.tsx";

const meta: Meta<typeof RecipeActions> ={
    title:'Recipe Actions',
    component:RecipeActions,
    tags: ['autodocs'],

}

export default meta

type Story = StoryObj<typeof RecipeActions>

export const Default: Story = {
    name: 'Default',
    render: () => <RecipeActions />
}
