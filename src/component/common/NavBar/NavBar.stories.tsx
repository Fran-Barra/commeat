import {Meta, StoryObj} from "@storybook/react";
import NavBar from "./index.tsx";

const meta: Meta<typeof NavBar> = {
    title: "NavBar",
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
        icons: { control: [] },
    },
};

export default meta;

type Story = StoryObj<typeof NavBar>;
export const Default: Story = {
    name: "Default",
    args: {
        icons: ['home', 'search', 'shopping-cart', 'user']
    },
    render: (args) => <Header {...args} />,
};