import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import Icon from "../Icon";

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['fulfilled','outlined'],
            control:{type:'select'},
            defaultValue:'fulfilled'
        },
        size:{
            options:['small','medium','large'],
            control:{type:'select'},
            defaultValue:'medium'
        },
        text: {
            control: 'text',
        },
    },
    args: {
        text: 'Button',
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Default',
    render: (args) => <Button {...args} />
}

export const Fulfilled: Story = {
    name:'Fulfilled',
    render: (args) => <Button variant={'fulfilled'} {...args} />
}
export const Outlined: Story = {
    name:'Outlined',
    render: (args) =>
        <div className={'flex flex-col w-[250px] gap-2'}>
            <Button variant={'outlined'} size={'large'} {...args} />
            <Button variant={'outlined'} size={'medium'}{...args} />
            <Button variant={'outlined'} size={'small'}{...args} />
        </div>
}

export const WithIcon: Story = {
    name: 'With icon',
    render: (args) => 
        <div className={'flex flex-col w-[250px] gap-2'}>
            <Button icon={<Icon variant='shopping-cart'/>} variant={'fulfilled'} {...args}/>
            <Button icon={<Icon variant='shopping-cart'/>} variant={'outlined'} {...args}/>
        </div>
}

