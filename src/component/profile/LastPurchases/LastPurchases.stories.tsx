import {Meta, StoryObj} from "@storybook/react";
import LastPurchases from "./index.tsx";

const meta: Meta<typeof LastPurchases> = {
    title: 'LastPurchases',
    component: LastPurchases,
    tags: ['autodocs'],
    argTypes: {
        status: {
            options: ['ordered', 'inProgress', 'delivered'],
            control: {type: 'radio'}
        }
    }
}

export default meta

type Story = StoryObj<typeof LastPurchases>

export const Default: Story = {
    name: 'Default',
    args: {
        items: [{
            name: 'Banana',
            price: 3000,
            img: 'https://st5.depositphotos.com/80422288/67672/i/450/depositphotos_676726570-stock-photo-bananas-isolated-white-background.jpg',
            amount: '2kg'
        }, {
            name: 'Manzana',
            price: 2000,
            img: 'https://static7.depositphotos.com/1001651/762/i/450/depositphotos_7620915-stock-photo-ripe-red-apple-isolated-on.jpg',
            amount: '1kg'
        }],
        status: 'ordered',
        date: '3 de noviembre 2023'
    },

    render: (args) => <LastPurchases {...args}/>
}
