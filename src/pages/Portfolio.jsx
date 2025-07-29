import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Portfolio() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>회사 프로젝트</h2>
            <div className="project-preview">
                <ProjectCard id="AL-record-module" title="웹 녹화 모듈" navigate={navigate} />
                <ProjectCard id="AL-mini-crm" title="Mini-crm" navigate={navigate} />
            </div>

            <h2>개인 프로젝트</h2>
            <div className="project-preview">
                <ProjectCard id="light-crm" title="소규모 기업을 위한 경량 CRM 시스템" navigate={navigate} />
            </div>

            <h2>팀 프로젝트</h2>
            <div className="project-preview">
                <ProjectCard id="alledin" title="Alledin - 나만의 알레르기 보디가드" navigate={navigate} />
                <ProjectCard id="distrip" title="Distrip - Discover your Trip" navigate={navigate} />
            </div>
        </div>
    );
}

function ProjectCard({ id, title, navigate }) {
    return (
        <div className="card" onClick={() => navigate(`/portfolio/${id}`)} >
            <h3>{title}</h3>
        </div>
    );
}