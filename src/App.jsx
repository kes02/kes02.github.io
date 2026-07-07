import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { LanguageProvider } from "./i18n/LanguageContext";

import './App.css';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="app-container">
                    <Navbar />

                    <div className="main-content-wrapper">
                        <div className="page-content-area">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;