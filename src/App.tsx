import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useStickyState from './hooks/useStickyState';
import Home from './screens/Home';
import UnderConstruction from './screens/UnderConstruction';
import setTheme from './styles/setTheme';

const App = () => {
    const [isDarkMode] = useStickyState<boolean>(false, 'darkMode');

    useEffect(() => setTheme(isDarkMode), [isDarkMode]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<UnderConstruction />} />
                <Route path="/staff" element={<UnderConstruction />} />
                <Route path="/projects" element={<UnderConstruction />} />
                <Route path="/docs" element={<UnderConstruction />} />
                <Route path="/contact" element={<UnderConstruction />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
