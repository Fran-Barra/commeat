import Plus from "../../../assets/Icon/Plus";
import Cart from "../../../assets/Icon/Cart";
import Trash from "../../../assets/Icon/Trash";
import ThreeDots from "../../../assets/Icon/ThreeDots";
import Subtract from "../../../assets/Icon/Subtract";
import Search from "../../../assets/Icon/Search";

export interface IconProps {
    variant: 'shopping-cart' | 'trash' | 'three-dots' | 'plus' | 'subtract' | 'search';
    color?: 'primary' | 'secondary' | 'icon' | 'black' | 'white'
    width?: number
    height?: number
}

const Icon = ({variant, color= 'icon', width, height}: IconProps) => {

    const colors = {
        primary: 'fill-primary-500',
        secondary: 'fill-secondary-500',
        icon: 'fill-gray-600',
        white: 'fill-white',
        black: 'fill-black'
    }

    switch (variant) {
        case 'shopping-cart':
            return <Cart color={colors[color]} width={width} height={height}/>
        case 'trash':
            return <Trash color={colors[color]} width={width} height={height}/>
        case 'three-dots':
            return <ThreeDots color={colors[color]} width={width} height={height}/>
        case 'plus':
            return <Plus color={colors[color]} width={width} height={height}/>
        case 'subtract':
            return <Subtract color={colors[color]} width={width} height={height}/>
        case "search":
            return <Search color={colors[color]} width={width} height={height}/>
    }
};

export default Icon;