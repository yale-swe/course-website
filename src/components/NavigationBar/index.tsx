import { useWindowWidth } from '@react-hook/window-size';

import FullNavigationBar from './FullNavigationBar';
import SideNavigationBar from './SideNavigationBar';

const NavigationBar = () => {
    const windowWidth = useWindowWidth();
    return windowWidth > 1200 ? <FullNavigationBar /> : <SideNavigationBar />;
};

export default NavigationBar;
