import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useStickyState from './hooks/useStickyState';
import AB from './screens/AB';
import ABTemplate from './screens/ABTemplate';
import About from './screens/About';
import Community from './screens/Community';
import Docs from './screens/Docs';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Staff from './screens/Staff';
// import UnderConstruction from './screens/UnderConstruction';
import setTheme from './styles/setTheme';

const App = () => {
    const [isDarkMode] = useStickyState<boolean>(false, 'darkMode');

    useEffect(() => setTheme(isDarkMode), [isDarkMode]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/community" element={<Community />} />
                <Route path="/ab/" element={<AB />} />
                <Route path="/ab/template/" element={<ABTemplate />} />
                <Route path="/voting" element={<Redirect />} />
                <Route path="/voting/auth" element={<RedirectAuth />} />
            </Routes>
        </BrowserRouter>
    );
};

const Redirect = () => {
    useEffect(() => {
        window.location.href = 'https://voting-9c79.onrender.com';
    }, []);

    return <div></div>;
};

const RedirectAuth = () => {
    useEffect(() => {
        window.location.href = 'https://voting-9c79.onrender.com/auth';
    }, []);

    return <div></div>;
};

export default App;
