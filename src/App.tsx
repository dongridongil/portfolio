import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter를 Router로 변경

import Home from './Routes/Home.tsx';
import About from './Components/Main/About.tsx';
import Skills from './Components/Main/Skills.tsx';
import Projects from './Components/Main/Projects.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Header from './Components/Header/Header.tsx';
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <>
                            <Home />
                            <Header />
                            <About />
                            <Projects projectsData={[]} />
                            <Skills />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </HashRouter>
    );
}

export default App;
