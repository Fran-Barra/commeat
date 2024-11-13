import { Meta, StoryObj } from "@storybook/react";
import Filter from "./index";

const meta: Meta<typeof Filter> = {
    title: 'Filter',
    component: Filter,
    tags: ['autodocs'],
    argTypes: {
        selected: {
            options: [true, false],
            control: { type: 'boolean' },
            defaultValue: false,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
    name: 'Default',
    render: (args) => <Filter {...args} name="Default Filter" />,
};

export const Selected: Story = {
    name: 'Selected',
    render: (args) => <Filter {...args} name="Selected Filter" selected={true} />,
};