import {Meta, StoryObj} from "@storybook/react";
import NavBar from "./index.tsx";

const meta: Meta<typeof NavBar> = {
    title: "NavBar",
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof NavBar>;
export const Default: Story = {
    name: "Default",
    args: {
    },
    render: (args) => <NavBar {...args} />,
};