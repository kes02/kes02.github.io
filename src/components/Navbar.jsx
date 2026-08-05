import React, {useState} from 'react';
import { NavLink} from "react-router-dom";
import "./navbar.css";
import updateData from '../data/lastUpdated.json';
import velogData from '../data/velog.json';
import { useLanguage } from '../i18n/LanguageContext';

const VELOG_FEED_SIZE = 3;

export default function Navbar() {
    const { lang, toggleLang } = useLanguage();
    // const updatedDate = useState(new Date().toDateString().substring(3));
    const [updatedDate] = useState(updateData.lastUpdated);
    const [showContact, setShowContact] = useState(false);

    const toggleContact = () => {
        setShowContact(prev => !prev);
    };

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
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "menulink active-menulink" : "menulink"
                        }
                    >
                        Heejin Jung
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            isActive ? "menulink active-menulink" : "menulink"
                        }
                    >
                        {lang === 'en' ? 'Resume' : '이력서'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive ? "menulink active-menulink" : "menulink"
                        }
                    >
                        {lang === 'en' ? 'Portfolio' : '포트폴리오'}
                    </NavLink>
                </li>
            </ul>

            {velogData.posts.length > 0 && (
                <div className="velog-feed">
                    <p className="velog-feed-heading">
                        {lang === 'en' ? 'Latest on velog' : '최근 velog 글'}
                    </p>
                    <ul className="velog-feed-list">
                        {velogData.posts.slice(0, VELOG_FEED_SIZE).map((post) => (
                            <li key={post.slug}>
                                <NavLink to={`/posts/${post.slug}`} className="velog-feed-link">
                                    <span className="velog-feed-title">{post.title}</span>
                                    <span className="velog-feed-date">{post.date}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://velog.io/@kes02/posts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="velog-feed-more"
                    >
                        {lang === 'en' ? 'See all posts' : '전체 글 보기'}
                    </a>
                </div>
            )}

            <button className="lang-toggle" onClick={toggleLang}>
                {lang === 'ko' ? 'ENGLISH' : '한국어'}
            </button>

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
                <div className="contact-wrapper">
                    <button onClick={toggleContact} className="reveal-button">
                        {showContact ? (
                            <>
                                hjjung1220@gmail.com<br />
                            </>
                        ) : (
                            'Contact Me'
                        )}
                    </button>
                </div>
                <p className="updated-date-text">
                    Updated {updatedDate}
                </p>
            </div>
        </nav>
    );
}