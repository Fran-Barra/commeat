import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./index.tsx";

const meta: Meta<typeof TextInput> = {
    title: "TextInput",
    component: TextInput,
    tags: ['autodocs'],
    argTypes: {
        label: { control: "text" },
        placeholder: { control: "text" },
        helperText: { control: "text" },
        error: { control: "boolean" },
    },
} as Meta;

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Normal: Story = {
    name: "Normal",
    args: {
        label: "Label",
        placeholder: "Placeholder",
        helperText: "Helpertext",
        error: false,
    },
    render: (args) => <TextInput {...args} />,
};

export const WithInput: Story = {
    name: "With Input",
    args: {
        label: "Label",
        placeholder: "Placeholder",
        helperText: "Helpertext",
        error: false,
    },
    render: (args) => <TextInput {...args} />,
};

export const ErrorState: Story = {
    name: "Error State",
    args: {
        label: "Label",
        placeholder: "Placeholder",
        helperText: "Helpertext",
        error: true,
    },
    render: (args) => <TextInput {...args} />,
};
