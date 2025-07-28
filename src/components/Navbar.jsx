import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id="top-menu">
            <ul>
                <li><Link to="/resume" className="menulink">이력</Link></li>
                <li><Link to="/portfolio" className="menulink">포트폴리오</Link></li>
                <li><Link to="/posts" className="menulink">게시물</Link></li>
                <li><Link to="/books" className="menulink">지식공유/도서</Link></li>
            </ul>
        </nav>
    );
}
