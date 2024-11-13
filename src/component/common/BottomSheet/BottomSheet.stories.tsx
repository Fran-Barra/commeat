import {Meta, StoryObj} from "@storybook/react";
import BottomSheet from "./index.tsx";
import Logo from "../Logo";

const meta: Meta<typeof BottomSheet> = {
    title: 'BottomSheet',
    component: BottomSheet,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        },
        buttonText: {
            control: 'text',
        },
    },
}

export default meta

type Story = StoryObj<typeof BottomSheet>

export const Default: Story = {
    name: 'Default',
    args: {
        title: 'Title',
        buttonText: 'Button',
    },
    render: (args) => <BottomSheet {...args}/>
}

export const WithChildren: Story = {
    name: 'With Children',
    args: {
        title: 'Title',
        buttonText: 'Button',
        children:
            <div className="w-[200px] flex flex-col gap-4">
                {[...Array(7)].map((_, index) => (
                    <div key={index} >
                        <Logo variant="light"/>
                    </div>
                ))}
            </div>
    },
    render: (args) => <BottomSheet {...args}/>
}

export const WithCancelButton: Story = {
    name: 'With Cancel Button',
    args: {
        title: 'Title',
        buttonText: 'Button',
        showCancelButton: true,
    },
    render: (args) => <BottomSheet {...args}/>
}