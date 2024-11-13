
export interface Event {
    name: string;
    category: string;
}

export interface EventCardProps {
    event: Event;
    size: 'small' | 'large';
}

const EventCard = ({ event }: EventCardProps) => {
    const cardBaseClass = "w-full h-full p-5 rounded-lg overflow-hidden border-2 border-dotted border-[#9747FF] flex items-start justify-start gap-7";
    const containerClass = "w-[429px] h-[63px] bg-gray-100 flex items-start gap-2.5 px-[15px] pt-[10px]";
    const borderClass = "w-[4px] h-[38px] bg-primary-500 rounded-full";
    const titleClass = "text-p1 font-medium";
    const categoryClass = "text-p2 font-light";

    return (
        <div className={cardBaseClass}>
            <div className={containerClass}>
                <div className={borderClass} />
                <div className={`flex-1 flex flex-row justify-between border-b border-gray-500 pb-1 gap-2.5 h-full`}>
                    <p className={` ${titleClass}`}>
                        {event.name}
                    </p>
                    <div className={`${categoryClass}`}>
                        {event.category}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
