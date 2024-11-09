import {Meta, StoryObj} from "@storybook/react";
import StoreItemCard from "./index.tsx";

import Flour from "../../../../src/assets/Sample/flour.png";


const meta: Meta<typeof StoreItemCard> ={
    title:'StoreItemCard',
    component:StoreItemCard,
    tags: ['autodocs'],
    argTypes:{
        size: {
            options: ['small', 'large'],
            control: {type: 'radio'}
        }
    }
}

export default meta

type Story = StoryObj<typeof StoreItemCard>

export const Default: Story = {
    name:'Default',
    args: {
        item: {
            name: 'Harina',
            price: 1000,
            img: Flour,
        },
        size: 'large'
    },
    render: (args) => <StoreItemCard {...args}/>
}

export const WithAmount: Story = {
    name:'WithAmount',
    args: {
        item: {
            name: 'Harina',
            price: 1000,
            img: Flour,
        },
        amount: 2,
        size: 'small'
    },
    render: (args) => <StoreItemCard {...args}/>
}