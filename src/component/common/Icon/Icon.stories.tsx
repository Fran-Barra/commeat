import {Meta, StoryObj} from "@storybook/react";
import Icon from "./index.tsx";

const meta: Meta<typeof Icon> ={
    title:'Icon',
    component:Icon,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['shopping-cart', 'trash', 'three-dots'],
            control:{type:'select'},
        },
    }
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
    name:'Default',
    args: {
        variant: 'shopping-cart',
    },
    render: (args) => <Icon {...args}/>
}