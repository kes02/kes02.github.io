import { Link, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import projects from '../data/portfolioProjects';
import '../App.css';

export default function ProjectDetail() {
    const { projectId } = useParams();
    const { lang } = useLanguage();
    const project = projects.find(item => item.id === projectId);

    if (!project) return <Navigate to="/portfolio" replace />;

    const content = project[lang];
    const copy = lang === 'en'
        ? { back: 'Portfolio', pdf: 'Download PDF', features: 'What it does', work: 'My contribution', problem: 'Problem', solution: 'How I solved it', stack: 'Technology', architecture: 'System architecture', paper: 'Read paper' }
        : { back: '포트폴리오', pdf: 'PDF 다운로드', features: '주요 기능', work: '담당한 일', problem: '문제', solution: '해결', stack: '기술 스택', architecture: '시스템 구조', paper: '논문 보기' };

    return (
        <main className="portfolio-detail page-content">
            <Link className="portfolio-back no-print" to="/portfolio">← {copy.back}</Link>
            <header className="portfolio-detail-header">
                <div>
                    <h1>{content.title}</h1>
                    <p className="portfolio-detail-subtitle">{content.subtitle}</p>
                    <p className="portfolio-detail-summary">{content.summary}</p>
                </div>
                <dl className="portfolio-meta">
                    <div><dt>{lang === 'en' ? 'Period' : '기간'}</dt><dd>{content.period}</dd></div>
                    <div><dt>{lang === 'en' ? 'Role' : '역할'}</dt><dd>{content.role}</dd></div>
                </dl>
            </header>

            {content.result && <p className="portfolio-result">{content.result}</p>}

            <div className="portfolio-detail-actions no-print">
                <a className="portfolio-primary-link" href={project.pdf[lang]} download>{copy.pdf} ↓</a>
                {project.external && <a href={project.external} target="_blank" rel="noopener noreferrer">{content.externalLabel} ↗</a>}
                {project.paper && <a href={project.paper} target="_blank" rel="noopener noreferrer">{copy.paper} ↗</a>}
            </div>

            {project.image && <figure className={`portfolio-visual portfolio-visual-${project.id}`}><img src={typeof project.image === 'string' ? project.image : project.image[lang]} alt={content.subtitle} /></figure>}

            <div className="portfolio-detail-grid">
                <section>
                    <h2>{copy.features}</h2>
                    <ul>{content.features.map(item => <li key={item}>{item}</li>)}</ul>
                </section>
                <section>
                    <h2>{copy.work}</h2>
                    <ul>{content.work.map(item => <li key={item}>{item}</li>)}</ul>
                </section>
            </div>

            <section className="portfolio-problem">
                <h2>{lang === 'en' ? 'A problem I worked through' : '문제 해결'}</h2>
                <div><h3>{copy.problem}</h3><p>{content.problem}</p></div>
                <div><h3>{copy.solution}</h3><p>{content.solution}</p></div>
            </section>

            {content.details && <section className="portfolio-story">
                <h2>{lang === 'en' ? 'Process and decisions' : '구현 과정과 판단'}</h2>
                <div className="portfolio-story-grid">{content.details.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
            </section>}

            {content.review && <section className="portfolio-review">
                <div className="portfolio-review-heading"><h2>{content.review.title}</h2><span>{content.review.period}</span></div>
                <p>{content.review.intro}</p>
                <div className="portfolio-review-metrics">
                    {content.review.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
                </div>
                <h3>{content.review.pipelineTitle}</h3>
                <ol>{content.review.pipeline.map(step => <li key={step}>{step}</li>)}</ol>
                <p>{content.review.validation}</p>
                <p className="portfolio-review-note">{content.review.next}</p>
            </section>}

            {project.diagram && <section className="portfolio-architecture"><h2>{copy.architecture}</h2><img src={project.diagram} alt={`${content.title} ${copy.architecture}`} /></section>}

            <section className="portfolio-stack">
                <h2>{copy.stack}</h2>
                <ul>{content.stack.map(item => <li key={item}>{item}</li>)}</ul>
            </section>
        </main>
    );
}
