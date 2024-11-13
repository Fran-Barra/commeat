import {Meta, StoryObj} from "@storybook/react";
import EventCard from "./index.tsx";

const meta: Meta<typeof EventCard> = {
    title: 'Event',
    component: EventCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EventCard>

export const Default: Story = {
    name: 'Default',
    args: {
        event: {
            name: 'Event name',
            category: 'Category',
        },
    },
    render: (args) => <EventCard {...args} />
}