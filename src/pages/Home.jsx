import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import HomeEn from './HomeEn';

export default function Home() {
    const { lang } = useLanguage();
    if (lang === 'en') return <HomeEn />;
    return (
        <div className="page-content">
            <h2>정희진 | 개발을 통해 가치를 만드는 소프트웨어 엔지니어</h2>
            <p>단순 구현을 넘어 비즈니스의 가치를 이해하고, 전체 흐름을 꿰뚫어 보는 <strong>숲을 보는 개발자</strong>를 지향합니다.</p>

            <section className="about-me-section">
                <h3>자기 소개</h3>
                <p>
                    안녕하세요. 무(無)에서 유(有)를 창조하는 개발의 즐거움을 넘어, 사용자가 필요로 하는 가치를 기술로 구현하는 소프트웨어 엔지니어 정희진입니다.
                    <br/>
                    교내 비즈니스 모델 아이디어 대회 2년 연속 수상 등을 통해 <strong>기획적 사고와 비즈니스 통찰력</strong>을 키웠으며, 이를 개발 역량과 결합하여 실질적인 문제 해결에 기여하고 있습니다.
                    <br/>
                    9개월간의 인턴십과 다양한 프로젝트를 거치며 <strong>Java/Spring Boot 기반의 안정적인 백엔드 구축</strong>, AWS 인프라 운영 및 React.js를 활용한 프론트엔드 개발까지 <strong>폭넓은 실무 감각</strong>을 익혔습니다.
                </p>
            </section>

            <section className="problem-solving-section">
                <h3>문제 해결에 강한 실행형 개발자</h3>
                <p>
                    저는 직면한 문제를 해결하기 위해 집요하게 파고들어 끝내 기술적으로 구현해내는 실행력을 가졌습니다.
                    <br/>
                    인턴십 기간 동안, 사내 업무 효율화를 위해 주도적으로 문제를 정의하고 솔루션을 제안했습니다.
                    특히 <strong>화면 녹화 웹 모듈</strong>과 <strong>구글 스프레드시트 연동 Mini-CRM 시스템</strong>을 성공적으로 개발 및 도입하여, 반복 업무를 자동화하고 팀의 생산성을 높이는 성과를 거두었습니다.
                    이 과정을 통해 새로운 기술을 빠르게 습득하여 <strong>비즈니스 임팩트로 연결하는 실무 역량</strong>을 증명했습니다.
                </p>
            </section>

            <section className="communication-section">
                <h3>성장과 소통을 중시하는 개발자</h3>
                <p>
                    혼자 앞서가는 개발자가 아닌, 팀과 사용자에게 기여하며 <strong>함께 성장하는 가치</strong>를 추구합니다.
                    <br/>
                    현업에서 실제 사용자와 직접 소통하며 페인 포인트를 발굴하고 개선하는 과정을 통해, 개발자의 <strong>공감 능력과 커뮤니케이션</strong>이 서비스 품질을 결정짓는 핵심임을 체득했습니다.
                    또한 탄탄한 CS 기본기를 바탕으로 새로운 언어와 프레임워크를 습득하는 데 유연합니다.
                    <br/>
                    이러한 경험과 태도를 바탕으로, 동료와는 원활히 협업하고 사용자에게는 최적의 경험을 제공하는 <strong>같이 일하고 싶은 개발자</strong>가 되겠습니다.
                </p>
            </section>
        </div>
    );
}