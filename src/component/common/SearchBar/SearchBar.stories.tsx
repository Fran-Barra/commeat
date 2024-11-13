import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./index.tsx";

const meta: Meta<typeof SearchBar> = {
    title: 'SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'Search...',
        },
        icon: {
            options: ['search'],
            control: { type: 'radio' },
            defaultValue: 'search',
        },
        iconPosition: {
            options: ['left', 'right'],
            control: { type: 'radio' },
            defaultValue: 'left',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

// Default story with icon on the left
export const Default: Story = {
    name: 'Default',
    args: {
        placeholder: 'Search...',
        icon: 'search',
        iconPosition: 'left',
    },
    render: (args) => <SearchBar {...args} />,
};

// Story with icon on the right
export const IconOnRight: Story = {
    name: 'IconOnRight',
    args: {
        placeholder: 'Search...',
        icon: 'search',
        iconPosition: 'right',
    },
    render: (args) => <SearchBar {...args} />,
};