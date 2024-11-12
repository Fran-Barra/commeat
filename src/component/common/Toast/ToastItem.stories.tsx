import { Meta, StoryObj } from '@storybook/react';
import ToastNotification from './index';

const meta: Meta<typeof ToastNotification> = {
    title: 'Components/ToastNotification',
    component: ToastNotification,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToastNotification>;

// Default toast story
export const Default: Story = {
    name: 'Default',
    args: {
        message: 'This is a default toast message!',
    },
    render: (args) => <ToastNotification message={args.message}/>,
};

// Custom message toast story
export const CustomMessage: Story = {
    name: 'CustomMessage',
    args: {
        message: 'This is a custom toast message!',
    },
    render: (args) => <ToastNotification message={args.message}/>,
};
