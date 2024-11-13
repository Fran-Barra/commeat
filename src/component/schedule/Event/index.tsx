
export interface Event {
    name: string;
    category: string;
}

export interface EventCardProps {
    event: Event;
    size: 'small' | 'large';
}

const EventCard = ({ event, size }: EventCardProps) => {
    const cardBaseClass = "w-full h-full p-5 rounded-lg overflow-hidden border-2 border-dotted border-[#9747FF] flex items-start justify-start gap-7";
    const containerClass = "w-[429px] h-[63px] bg-[#F1F2F3] flex items-start gap-2.5 px-[15px] pt-[10px]";
    const textBaseClass = "text-black font-poppins break-words";
    const borderClass = "w-[4px] h-[38px] bg-[#F5CB82] rounded-full";
    const titleClass = "text-p1 font-medium";
    const categoryClass = "text-[14px] font-[400]";

    const textSizeClass = size === 'small' ? 'text-[14px]' : 'text-[16px]';
    const borderBottomClass = size === 'small' ? 'pb-1' : 'pb-2';

    return (
        <div className={cardBaseClass}>
            <div className={containerClass}>
                <div className={borderClass} />
                <div className={`flex-1 flex flex-row justify-between border-b border-[#AEAEB2] ${borderBottomClass} gap-2.5 h-full`}>
                    <div className={`${textBaseClass} ${titleClass} ${textSizeClass}`}>
                        {event.name}
                    </div>
                    <div className={`${textBaseClass} ${categoryClass}`}>
                        {event.category}
                    </div>
                </div>
            </div>

            {/*/!* Segunda sección *!/*/}
            {/*<div className="w-[429px] h-[63px] bg-[#F1F2F3] flex justify-center items-start">*/}
            {/*    <div className={`w-[335px] h-[63px] ${paddingClass} flex items-start gap-2.5`}>*/}
            {/*        <div className={borderClass} />*/}
            {/*        <div className={`w-[308px] flex-1 py-1 border-b border-[#AEAEB2] flex flex-col gap-4`}>*/}
            {/*            <div className={`${textBaseClass} ${titleClass} ${textSizeClass}`}>*/}
            {/*                {event.name}*/}
            {/*            </div>*/}
            {/*            <div className={`${textBaseClass} ${categoryClass}`}>*/}
            {/*                {event.category}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="w-[94px] h-[63px] pt-4 pb-4 px-8 bg-[#FF3B30] flex justify-center items-center">*/}
            {/*        <div className={buttonClass}>*/}
            {/*            <div className={buttonInnerClass} />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default EventCard;
