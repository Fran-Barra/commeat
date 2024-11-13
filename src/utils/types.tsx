export interface StoreItem {
    name: string;
    price: number;
    img: string;
}

export interface IconProps {
    color?: string
    width?: number
    height?: number
    filled?: boolean
}

interface StoreItemWithAmount extends StoreItem {
    amount: number
}

export interface Recipe {
    name: string;
    img: string;
    description: string;
    cooking_method: string;
    ingredients: StoreItemWithAmount[]
}