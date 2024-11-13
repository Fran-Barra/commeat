import {Meta, StoryObj} from "@storybook/react";
import Icon from "./index.tsx";

const meta: Meta<typeof Icon> ={
    title:'Icon',
    component:Icon,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['shopping-cart', 'trash', 'three-dots', 'plus', 'subtract', 'search', 'arrow-back', 'book', 'calendar', 'home', 'profile'],
            control:{type:'select'},
            filled: {control: 'boolean'}
        },
    }
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
    name:'Default',
    args: {
        variant: 'shopping-cart',
        filled: false
    },
    render: (args) => <Icon {...args}/>
}