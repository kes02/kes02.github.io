import React from 'react'; // React import 추가 (Date 객체 사용을 위해)
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const current = new Date().toDateString().substring(3, );

    return (
        <nav id="navbar">
            <div className="navbar-image-container">
                <img
                    src="https://velog.velcdn.com/images/kes02/profile/f881807f-593b-422a-8465-257d9b2fe5ce/image.jpeg"
                    alt="Profile"
                    className="navbar-profile-image"
                />
            </div>

            <ul>
                <li><Link to="/" className="menulink">Heejin Jung</Link></li>
                <li><Link to="/resume" className="menulink">이력서</Link></li>
                <li><Link to="/portfolio" className="menulink">포트폴리오</Link></li>
            </ul>

            <div className="navbar-bottom-info">
                <div className="social-links">
                    <a href="https://velog.io/@kes02" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://placehold.co/30x30/20C997/FFFFFF?text=V" // Velog 아이콘
                            alt="Velog"
                            className="social-icon"
                        />
                    </a>
                    <a href="https://github.com/kes02" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://placehold.co/30x30/333333/FFFFFF?text=G" // GitHub 아이콘
                            alt="GitHub"
                            className="social-icon"
                        />
                    </a>
                </div>
                <p className="updated-date-text">
                    Updated {current}
                </p>
            </div>
        </nav>
    );
}