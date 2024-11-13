import {Meta, StoryObj} from "@storybook/react";
import Chip from "./index.tsx";

const meta: Meta<typeof Chip> ={
    title: 'Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['filled', 'stroked'],
        },
        label: { control: 'text' },
    },
} as Meta;

export default meta

type Story = StoryObj<typeof Chip>

export const Default: Story = {
    name: 'Filled',
    args: {
        variant: 'filled',
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
