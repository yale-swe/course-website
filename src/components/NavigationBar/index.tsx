import { useWindowWidth } from '@react-hook/window-size';

import FullNavigationBar from './FullNavigationBar';
import SideNavigationBar from './SideNavigationBar';

export const NavigationBar = () => {
    const windowWidth = useWindowWidth();
    return windowWidth > 900 ? <FullNavigationBar /> : <SideNavigationBar />;
};

export default NavigationBar;
