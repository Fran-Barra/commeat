import {StoreItem} from "./interface.ts";
import Icon from "../Icon";

export interface StoreItemCardProps {
    item: StoreItem;
}

const StoreItemCard = ({item}: StoreItemCardProps) => {
    return (
        <div className={"bg-white w-[191px] h-[179px] border-amber-500 rounded-lg drop-shadow-md"}>
            <div className={'justify-items-center mt-[11px]'}>
                <img src={item.img} alt={'Item Photo'} />
            </div>
                <div className={'ml-[18px] pt-8 flex justify-between w-[155px]'}>
                    <div>
                        <p className={"text-black"}>{item.name}</p>
                        <p className={"text-primary-500 font-bold"}>${item.price}</p>

                    </div>
                    <div className={"bg-primary-500 rounded-full w-[32px] h-[32px] place-content-center justify-items-center"}>
                    <Icon variant={'plus-white'}/>
                    </div>
                </div>
        </div>
    );
};

export default StoreItemCard;