import {Meta, StoryObj} from "@storybook/react";
import StoreItemCard from "./index.tsx";

const meta: Meta<typeof StoreItemCard> ={
    title:'StoreItemCard',
    component:StoreItemCard,
    tags: ['autodocs'],
    argTypes:{

    }
}

export default meta

type Story = StoryObj<typeof StoreItemCard>

export const Default: Story = {
    name:'Default',
    args: {
        item: {
            name: 'Item 1',
            price: 1000,
        },
    },
    render: (args) => <StoreItemCard {...args}/>
}