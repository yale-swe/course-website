import { Switch } from 'antd';
import { useEffect } from 'react';

import useStickyState from '../../hooks/useStickyState';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useStickyState<boolean>(
        false,
        'darkMode'
    );
    useEffect(() => {
        const html = document.querySelector('html');
        if (html) {
            html.dataset.theme = isDarkMode ? 'theme-dark' : 'theme-light';
        }
    }, [isDarkMode]);
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
