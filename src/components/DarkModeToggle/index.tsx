import { Switch } from 'antd';

import useStickyState from '../../hooks/useStickyState';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useStickyState<boolean>(
        false,
        'darkMode'
    );
    return (
        <Switch
            defaultChecked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            checkedChildren={<i className="fas fa-moon" />}
            unCheckedChildren={<i className="fas fa-sun" />}
        />
    );
};

export default DarkModeToggle;
