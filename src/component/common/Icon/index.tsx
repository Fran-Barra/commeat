import Cart from '../../../assets/Icon/cart.svg';
import Trash from '../../../assets/Icon/trash.svg';
import ThreeDots from '../../../assets/Icon/three-dots.svg';
import PlusWhite from '../../../assets/Icon/plus-white.svg';
import Search from '../../../assets/Icon/search.svg';

export interface IconProps {
    variant: 'shopping-cart' | 'trash' | 'three-dots' | 'plus-white' | 'search';
}

const Icon = ({variant}: IconProps) => {
    switch (variant) {
        case 'shopping-cart':
            return <img src={Cart} alt="Cart" />;
        case 'trash':
            return <img src={Trash} alt="Trash"/>;
        case 'three-dots':
            return <img src={ThreeDots} alt="ThreeDots" />;
        case 'plus-white':
            return <img src={PlusWhite} alt={'PlusWhite'}/>
        case 'search':
            return <img src={Search} alt={'Search'}/>
    }
};

export default Icon;