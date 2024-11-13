import { cva } from "class-variance-authority";
import { StoreItem } from "../../../utils/types"
import NumericInput from "../NumericInput"

interface AddItemCardProps {
    item: StoreItem;
    amount: number;
    handleAmountChanged: (amount : number) => void;
    handleCancel: () => void;
}

const xButtonStyle = cva([
    'absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 p-2 ',
    'bg-gray-400 text-white shadow-md',
    'rounded-full flex items-center justify-center',

])

const AddItemCard = ({item, amount, handleAmountChanged, handleCancel} : AddItemCardProps) => {
    return (
        <div className="relative flex flex-raw justify-between shadow rounded-xl max-w-96 min-h-32">
            <button className={xButtonStyle()} onClick={handleCancel}>
                X
            </button>
            <div className="flex flex-col justify-center">
                <img className="object-contain h-full" src={item.img}/>
            </div>
            <div className="py-4 flex flex-col justify-center">
                <p className={"text-gray-800"}>{item.name}</p>
                <p className={"text-primary-500"}>${item.price}</p>
            </div>
            <div className="py-4 mr-4 flex flex-col justify-end min-w-24">
                <NumericInput min={0} max={99} value={amount} handleChange={handleAmountChanged}/>
            </div>
        </div>
    )
}

export default AddItemCard