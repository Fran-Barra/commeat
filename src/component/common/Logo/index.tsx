
import DarkLogoSvg from '../../../assets/logo-dark-gray.svg';
import LightLogoSvg from '../../../assets/logo-light-gray.svg';

export interface LogoProps {
    variant: 'light' | 'dark';
}

const Logo = ({variant}: LogoProps) => {
    switch (variant) {
        case 'light':
            return <img src={LightLogoSvg} alt="LogoLigth" />;
        case 'dark':
            return <img src={DarkLogoSvg} alt="LogoDark" />;
    }

};

export default Logo;