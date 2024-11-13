import {Meta, StoryObj} from "@storybook/react";
import EventCard from "./index.tsx";

const meta: Meta<typeof EventCard> = {
    title: 'Event',
    component: EventCard,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'large'],
        },
    }
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
        size: 'small',
    },
    render: (args) => <EventCard {...args} />
}