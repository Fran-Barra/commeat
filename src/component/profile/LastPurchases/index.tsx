
export interface ItemPurchase{
    name: string;
    price: number;
    img: string;
    amount: number;
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
const headerClass = baseEdgeContainer + ' border-b border-gray-300'
const imageClass = 'w-20 h-20'
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
                <p className={'font-semibold'}>{date}</p>
                <p onClick={buyAgain} className={'text-primary-500'}>Volver a comprar</p>
            </div>
            <div>
                {items.map((item) => (
                    <div className={itemClass}>
                        <div className={itemImageClass}>
                            <div className={imageClass}>
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <div>
                                <p className={''}>{item.name}</p>
                                <p>{item.amount}</p>
                            </div>
                        </div>
                        <div>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={footerClass}>
                <p>{statusText[status]}</p>
            </div>
        </div>
    )
}
export default LastPurchases;