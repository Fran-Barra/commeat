import {Meta, StoryObj} from "@storybook/react";
import Switch from "./index.tsx";

const meta: Meta<typeof Switch> ={
    title: 'Switch',
    component: Switch,
    tags: ['autodocs'],
} as Meta;

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
    name: 'Default',
    render: (args) => <Switch {...args} />
}

