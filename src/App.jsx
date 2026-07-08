import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { LanguageProvider } from "./i18n/LanguageContext";

import './App.css';

// Fire a GA4 page_view on every client-side route change (initial mount included).
// gtag auto page_view is disabled (send_page_view: false) so each route counts exactly once.
function RouteTracker() {
    const location = useLocation();
    useEffect(() => {
        if (window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: location.pathname + location.search,
                page_location: window.location.href,
                page_title: document.title,
            });
        }
    }, [location]);
    return null;
}

function App() {
    return (
        <LanguageProvider>
            <Router>
                <RouteTracker />
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