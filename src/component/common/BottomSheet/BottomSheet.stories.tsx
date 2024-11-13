import {Meta, StoryObj} from "@storybook/react";
import BottomSheet from "./index.tsx";
import Logo from "../Logo";

const meta: Meta<typeof BottomSheet> = {
    title: 'BottomSheet',
    component: BottomSheet,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
        },
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
        open: true,
        title: 'Title',
        buttonText: 'Button',
    },
    render: (args) => (
        <div className={"bg-white h-[800px]"}>
            <BottomSheet {...args}/>
        </div>
    )
}

export const WithChildren: Story = {
    name: 'With Children',
    args: {
        open: true,
        title: 'Title',
        buttonText: 'Button',
        children:
            <div className="flex flex-col gap-4">
                {[...Array(7)].map((_, index) => (
                    <div key={index} >
                        <Logo variant="light"/>
                    </div>
                ))}
            </div>
    },
    render: (args) => (
        <div className={"bg-white h-[800px]"}>
            <BottomSheet {...args}/>
        </div>
    )
}