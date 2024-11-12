import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import NumericInput from "./index";

const meta: Meta<typeof Button> = {
    title: 'NumericInput',
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'large'],
        },
    }
}

export default meta;

type Story = StoryObj<typeof NumericInput>;

export const Default: Story = {
    name: 'Default',
    args: {
        size: 'small',
    },
    render: (args) => <NumericInput {...args} />
}