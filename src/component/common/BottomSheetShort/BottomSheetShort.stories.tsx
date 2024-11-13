import {Meta, StoryObj} from "@storybook/react";
import BottomSheetShort from "./index.tsx";

const meta: Meta<typeof BottomSheetShort> ={
    title:'BottomSheetShort',
    component: BottomSheetShort,
    tags: ['autodocs'],
    argTypes:{
        rightText: {
            control: 'text',
        },
        buttonText: {
            control: 'text',
        },
        leftText: {
            control: 'text',
        },
    },
}

export default meta

type Story = StoryObj<typeof BottomSheetShort>

export const Default: Story = {
    name:'Default',
    args: {
        rightText: 'Right text',
        buttonText: 'Button',
        leftText: 'Left text',
    },
    render: (args) => <BottomSheetShort {...args}/>
}

export const NumericInput: Story = {
    name:'Numeric Input',
    args: {
        rightText: 'Right text',
        buttonText: 'Button',
    },
    render: (args) => <BottomSheetShort {...args}/>
}