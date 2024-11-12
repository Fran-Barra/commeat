import {Meta, StoryObj} from "@storybook/react";
import Chip from "./index.tsx";

const meta: Meta<typeof Chip> ={
    title: 'Chip',
    component: Chip,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['fulfilled', 'stroked'],
        },
        label: { control: 'text' },
    },
} as Meta;

export default meta

type Story = StoryObj<typeof Chip>

export const Default: Story = {
    name: 'Fulfilled',
    args: {
        variant: 'fulfilled',
        label: 'Chip',
    },
    render: (args) => <Chip {...args} />
}

export const Stroked: Story = {
    name: 'Stroked',
    args: {
        variant: 'stroked',
        label: 'Chip',
    },
    render: (args) => <Chip {...args} />
}
