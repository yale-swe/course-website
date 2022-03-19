import { useWindowWidth } from '@react-hook/window-size';

import FullNavigationBar from './FullNavigationBar';

const NavigationBar = () => {
    const windowWidth = useWindowWidth();
    return windowWidth > 1200 ? <FullNavigationBar /> : <></>;
};

export default NavigationBar;
