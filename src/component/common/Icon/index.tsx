import Plus from "../../../assets/Icon/Plus";
import Cart from "../../../assets/Icon/Cart";
import Trash from "../../../assets/Icon/Trash";
import ThreeDots from "../../../assets/Icon/ThreeDots";
import Subtract from "../../../assets/Icon/Subtract";
import Search from "../../../assets/Icon/Search";
import ArrowBack from "../../../assets/Icon/ArrowBack";
import Book from "../../../assets/Icon/Book";
import Calendar from "../../../assets/Icon/Calendar";
import Home from "../../../assets/Icon/Home";
import Person from "../../../assets/Icon/Person/person.tsx";

export interface IconProps {
    variant: 'shopping-cart' | 'trash' | 'three-dots' | 'plus' | 'subtract' | 'search' | 'arrow-back' | 'book' | 'calendar' | 'home' | 'profile';
    color?: 'primary' | 'secondary' | 'icon' | 'black' | 'white'
    width?: number
    height?: number
    filled?: boolean
}

const Icon = ({variant, color= 'icon', width, height, filled=false}: IconProps) => {

    const colors = {
        primary: 'fill-primary-500',
        secondary: 'fill-secondary-500',
        icon: 'fill-gray-600',
        white: 'fill-white',
        black: 'fill-black'
    }

    switch (variant) {
        case 'shopping-cart':
            return <Cart color={colors[color]} width={width} height={height} filled={filled}/>
        case 'trash':
            return <Trash color={colors[color]} width={width} height={height} filled={filled}/>
        case 'three-dots':
            return <ThreeDots color={colors[color]} width={width} height={height} filled={filled}/>
        case 'plus':
            return <Plus color={colors[color]} width={width} height={height} filled={filled}/>
        case 'subtract':
            return <Subtract color={colors[color]} width={width} height={height} filled={filled}/>
        case "search":
            return <Search color={colors[color]} width={width} height={height} filled={filled}/>
        case "arrow-back":
            return <ArrowBack color={colors[color]} width={width} height={height} filled={filled} />
        case "book":
            return <Book color={colors[color]} width={width} height={height} filled={filled} />
        case "calendar":
            return <Calendar color={colors[color]} width={width} height={height} filled={filled} />
        case "home":
            return <Home color={colors[color]} width={width} height={height} filled={filled} />
        case "profile":
            return <Person color={colors[color]} width={width} height={height} filled={filled} />
    }
};

export default Icon;