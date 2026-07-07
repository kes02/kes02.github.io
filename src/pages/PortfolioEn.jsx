import '../App.css';

export default function PortfolioEn() {

    return (
        <div>
            <a href="/portfolio/AllPortfolio.pdf" className="pdf-link" target="_blank" rel="noopener noreferrer"><h3>Download full portfolio</h3></a>
            <h2>Team Projects</h2>
            <div className="project-preview">
                <ProjectCard
                    id="alledin"
                    title="Alledin - Your Personal Allergy Bodyguard"
                    pdfLink="/portfolio/alledin/Portfolio_Alledin.pdf"
                />
                <ProjectCard
                    id="distrip"
                    title="Distrip - Discover your Trip"
                    pdfLink="/portfolio/distrip/Portfolio_Distrip.pdf"
                />
            </div>
            <h2>Personal Projects</h2>
            <div className="project-preview">
                <ProjectCard
                    id="light-crm"
                    title="Lightweight CRM for Small Businesses"
                    pdfLink="/portfolio/crm/Portfolio_CRM.pdf"
                />
            </div>
        </div>
    );
}

function ProjectCard({ id, title, pdfLink }) {
    const handleClick = () => {
        if (pdfLink) {
            window.open(pdfLink, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            <h3>{title}</h3>
        </div>
    );
}
