
export interface ItemPurchase{
    name: string;
    price: number;
    img: string;
    amount: string;
}

export interface LastPurchasesProps {
    items: ItemPurchase[];
    buyAgain: () => void;
    status: 'ordered' | 'inProgress' | 'delivered';
    date: string;
}

const containerClass = 'w-100 flex justify-between flex-col border border-gray-300 rounded-md';
const baseEdgeContainer = 'flex justify-between flex-row items-center w-100 p-2';
const itemClass = 'flex justify-between items-center w-100 p-4 border-b border-gray-300';
const itemImageClass = 'flex justify-between items-center w-100 gap-2';
const itemNameContainerClass = 'flex flex-col gap'
const headerClass = baseEdgeContainer + ' border-b border-gray-300'
const imageClass = 'w-20 h-20 flex items-center'
const footerClass = baseEdgeContainer



const LastPurchases = ({date, items, buyAgain, status}: LastPurchasesProps) => {

    const statusText = {
        ordered: 'Ordenado',
        inProgress: 'En camino',
        delivered: 'Entregado'
    }

    return (
        <div className={containerClass}>
            <div className={headerClass}>
                <p className={'text-p2 font-semibold'}>{date}</p>
                <p onClick={buyAgain} className={'text-primary-500'}>Volver a comprar</p>
            </div>
            <div>
                {items.map((item) => (
                    <div className={itemClass}>
                        <div className={itemImageClass}>
                            <div className={imageClass}>
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <div className={itemNameContainerClass}>
                                <p className={'text-h5 text-gray-800'}>{item.name}</p>
                                <p className={'text-p1 text-gray-500 font-bold'}>{item.amount}</p>
                            </div>
                        </div>
                            <p className={'text-h5 font-regular text-gray-700'}>${item.price}</p>
                    </div>
                ))}
            </div>
            <div className={footerClass}>
                <p className={'text-p1 text-gray-600'}>{statusText[status]}</p>
            </div>
        </div>
    )
}
export default LastPurchases;