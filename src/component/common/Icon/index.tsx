import Cart from '../../../assets/Icon/cart.svg';
import Trash from '../../../assets/Icon/trash.svg';
import ThreeDots from '../../../assets/Icon/three-dots.svg';

export interface IconProps {
    variant: 'shopping-cart' | 'trash' | 'three-dots';
}

const Icon = ({variant}: IconProps) => {
    switch (variant) {
        case 'shopping-cart':
            return <img src={Cart} alt="Cart" />;
        case 'trash':
            return <img src={Trash} alt="Trash" />;
        case 'three-dots':
            return <img src={ThreeDots} alt="ThreeDots" />;
    }
};

export default Icon;