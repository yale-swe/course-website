import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useStickyState from './hooks/useStickyState';
import About from './screens/About';
import Docs from './screens/Docs';
import Home from './screens/Home';
import Projects from './screens/Projects';
import UnderConstruction from './screens/UnderConstruction';
import setTheme from './styles/setTheme';

const App = () => {
    const [isDarkMode] = useStickyState<boolean>(false, 'darkMode');

    useEffect(() => setTheme(isDarkMode), [isDarkMode]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/staff" element={<UnderConstruction />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/contact" element={<UnderConstruction />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
