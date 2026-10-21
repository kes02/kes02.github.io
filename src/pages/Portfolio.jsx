import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import projects from '../data/portfolioProjects';
import '../App.css';

export default function Portfolio() {
    const { lang } = useLanguage();
    const copy = lang === 'en'
        ? { title: 'Portfolio', intro: 'Projects, decisions, and the work behind them.', all: 'Download complete portfolio PDF', view: 'Read project', download: 'Download PDF', team: 'Team projects', personal: 'Personal project' }
        : { title: '포트폴리오', intro: '프로젝트에서 무엇을 만들고 어떤 문제를 풀었는지 정리했습니다.', all: '전체 포트폴리오 PDF 다운로드', view: '프로젝트 보기', download: 'PDF 다운로드', team: '팀 프로젝트', personal: '개인 프로젝트' };

    return (
        <main className="portfolio-index page-content">
            <header className="portfolio-index-header">
                <h1>{copy.title}</h1>
                <p>{copy.intro}</p>
                <a className="portfolio-all-download" href={lang === 'en' ? '/portfolio/AllPortfolio_EN.pdf?v=1400-20261021' : '/portfolio/AllPortfolio.pdf?v=1400-20261021'} download>{copy.all} ↓</a>
            </header>

            <div className="portfolio-list">
                {projects.map(project => (
                    <article className="portfolio-list-item" key={project.id}>
                        <div>
                            <p className="portfolio-type">{project.category === 'team' ? copy.team : copy.personal} · {project[lang].period}</p>
                            <h2><Link to={`/portfolio/${project.id}`}>{project[lang].title}</Link></h2>
                            <p>{project[lang].subtitle}</p>
                        </div>
                        <div className="portfolio-index-actions">
                            <Link to={`/portfolio/${project.id}`}>{copy.view} →</Link>
                            <a href={project.pdf[lang]} download>{copy.download}</a>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
