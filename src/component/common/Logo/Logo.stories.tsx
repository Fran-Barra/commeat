import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import Logo from "./index";

const meta: Meta<typeof Button> ={
    title:'Logo',
    component:Logo,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['dark','light'],
            control:{type:'select'},
        },
    }
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
    name:'Default',
    args: {
        variant: 'light',
    },
    render: (args) => <Logo {...args}/>
}