import '../App.css';

export default function Portfolio() {

    return (
        <div>
            <a href="/portfolio/AllPortfolio.pdf" className="pdf-link" target="_blank" rel="noopener noreferrer"><h3>포트폴리오 전체 다운로드</h3></a>
            <h2>팀 프로젝트</h2>
            <div className="project-preview">
                <ProjectCard
                    id="alledin"
                    title="Alledin - 나만의 알레르기 보디가드"
                    pdfLink="/portfolio/alledin/Portfolio_Alledin.pdf"
                />
                <ProjectCard
                    id="distrip"
                    title="Distrip - Discover your Trip"
                    pdfLink="/portfolio/distrip/Portfolio_Distrip.pdf"
                />
            </div>
            <h2>개인 프로젝트</h2>
            <div className="project-preview">
                <ProjectCard
                    id="light-crm"
                    title="소규모 기업을 위한 경량형 CRM"
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
        } else {
            // navigate 로직이 필요한 경우 추가
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            <h3>{title}</h3>
        </div>
    );
}