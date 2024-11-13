import { Meta, StoryObj } from "@storybook/react";
import AddItemCard from ".";
import { useState } from "react";

import Flour from "../../../../src/assets/Sample/flour.png";


const meta : Meta<typeof AddItemCard> = {
    title:"AddItemCard",
    component: AddItemCard
}

export default meta

type Story = StoryObj<typeof AddItemCard>

export const Default : Story = {
    name: 'Default',
    render: (_args) => {
        const [amount, setAmount] = useState<number>(1)
        const item = {
            name: 'Harina',
            price: 1000,
            img: Flour
        }
        return (
            <AddItemCard 
                item={item}
                amount={amount}
                handleAmountChanged={setAmount}
                handleCancel={()=>console.log('canceled')}
            />
        )
    }
} 