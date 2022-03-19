import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useStickyState from './hooks/useStickyState';
import Home from './screens/Home';
import setTheme from './styles/setTheme';

const App = () => {
    const [isDarkMode] = useStickyState<boolean>(false, 'darkMode');

    useEffect(() => setTheme(isDarkMode), [isDarkMode]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<p>About Page Placeholder</p>} />
                <Route path="/staff" element={<p>Staff Page Placeholder</p>} />
                <Route
                    path="/projects"
                    element={<p>Projects Page Placeholder</p>}
                />
                <Route path="/docs" element={<p>Docs Page Placeholder</p>} />
                <Route
                    path="/contact"
                    element={<p>Contact Page Placeholder</p>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
