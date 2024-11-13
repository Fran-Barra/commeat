import { Meta, StoryObj } from "@storybook/react";
import Header from "./index.tsx";

const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        leftIcon: {control: "boolean"},
        title: { control: "text"},
        logo: { control: "boolean" },
    },
};

export default meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {
    name: "Default",
    args: {
        leftIcon: true,
        title: "Title",
        logo: false,
    },
    render: (args) => <Header {...args} />,
};

export const WithoutIcons: Story = {
    name: "Without Icons",
    args: {
        title: "Title",
    },
    render: (args) => <Header {...args} />,
};

export const WithLogo: Story = {
    name: "With Logo",
    args: {
        logo: true,
    },
    render: (args) => <Header {...args} />,
};

