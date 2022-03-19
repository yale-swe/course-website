import { Switch } from 'antd';
import { useEffect } from 'react';

import useStickyState from '../../hooks/useStickyState';
import setTheme from '../../styles/setTheme';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useStickyState<boolean>(
        false,
        'darkMode'
    );

    useEffect(() => setTheme(isDarkMode), [isDarkMode]);

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
