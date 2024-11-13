import { Meta, StoryObj } from "@storybook/react";
import MyCalendar from "./index";

const meta: Meta<typeof MyCalendar> = {
    title: 'Calendar',
    component: MyCalendar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyCalendar>;

export const Default: Story = {
    name: 'Default',
    args: {},
    render: () => <div className={'w-[350px]'}><MyCalendar /></div>,
};
