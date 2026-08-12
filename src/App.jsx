import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Posts from "./pages/Posts";
import { LanguageProvider } from "./i18n/LanguageContext";

import './App.css';

// 마크다운 렌더러가 무거워서 글을 열 때만 받아온다.
const Post = lazy(() => import("./pages/Post"));

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
                            <Suspense fallback={null}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/resume" element={<Resume />} />
                                    <Route path="/portfolio" element={<Portfolio />} />
                                    <Route path="/posts" element={<Posts />} />
                                    <Route path="/posts/:slug" element={<Post />} />
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;