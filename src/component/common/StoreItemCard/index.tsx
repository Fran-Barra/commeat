import {StoreItem} from "./interface.ts";
import Icon from "../Icon";

export interface StoreItemCardProps {
    item: StoreItem;
    amount?: number;
    size: 'small' | 'large';
}

const StoreItemCard = ({item, amount, size}: StoreItemCardProps) => {

    const cardSizeClass = size === 'small' ? 'w-[141px] h-[137px]' : 'w-[191px] h-[179px]';
    const imageClass = size === 'small' ? 'w-[109px] h-[81px]' : '';
    const contentClass = size === 'small' ? 'mx-[16px] pt-2' : 'mx-[18px] pt-8';
    const textClass = size === 'small' ? 'text-sm' : '';
    const circleClass = size === 'small' ? 'w-[24px] h-[24px]' : 'w-[32px] h-[32px]';

    return (
        <div className={`bg-white ${cardSizeClass} border-amber-500 rounded-lg drop-shadow-md`}>
            <div className={`justify-items-center mt-[11px]`}>
                <img src={item.img} alt={'Item Photo'} className={`object-contain ${imageClass}`}/>
            </div>
                <div className={`${contentClass} flex justify-between items-center`}>
                    <div>
                        <p className={`text-black ${textClass}`}>{item.name}</p>
                        <p className={`text-primary-500 font-bold ${textClass}`}>${item.price}</p>

                    </div>
                    <div className={`bg-primary-500 rounded-full ${circleClass} place-content-center justify-items-center`}>
                        {amount ? <p className={`text-white ${textClass}`}>x{amount}</p> : <Icon variant={'plus'} color={'white'} width={12} height={12}/>}
                    </div>
                </div>
        </div>
    );
};

export default StoreItemCard;