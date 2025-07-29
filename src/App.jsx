import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Posts from "./pages/Posts";

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />

                <div className="main-content-wrapper">
                    <div className="page-content-area">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/posts" element={<Posts />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;