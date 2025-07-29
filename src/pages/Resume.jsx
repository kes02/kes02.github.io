import React from 'react';
import '../App.css';

export default function Resume() {
    return (
        <div className="page-content">
            <section className="resume-section">
                <h1>학력</h1>
                <ul>
                    <li>
                        <strong>아주대학교 소프트웨어학과</strong> (2021.03 ~ 2026.02, 졸업 유예)
                    </li>
                    <li>
                        <strong>경기 한민고등학교</strong> (2018.03 ~ 2021.02)
                    </li>
                </ul>
            </section>

            <section className="resume-section">
                <h1>스킬</h1>
                <ul>
                    <li><strong>Backend:</strong> Java, Spring, JPA</li>
                    <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                    <li><strong>Database:</strong> MySQL</li>
                </ul>
            </section>

            <section className="resume-section">
                <h1>경력</h1>
                <div className="experience-item">
                    <h2>알고리즘랩스 | 인턴</h2> 2024.02 ~ 2024.08
                    <ul>
                        <li><strong>IT 기술지원 업무:</strong> B2C 웹서비스에서 발생하는 고객의 기술 문제 해소</li>
                        <li><strong>데이터 라벨링 및 텍스트화:</strong> OCR 데이터의 라벨링 작업 및 텍스트화 작업 진행 (약 500건)</li>
                        <li><strong>소규모 개발 프로젝트:</strong> 화면 녹화 모듈, Mini-CRM 시스템</li>
                    </ul>

                <div className="experience-project-item">
                    <h3>웹 화면 녹화 모듈 프로젝트</h3>
                    <p className="project-description">
                        웹 서비스에 적용할 사용자 직관적인 웹 화면 녹화 모듈을 개발했습니다.
                    </p>
                    <div className="project-details">
                        <h4>기능:</h4>
                        <ul>
                            <li><strong>웹 화면 녹화:</strong> MediaStreamApi를 활용해 React.js로 화면 및 사용자의 얼굴, 목소리 녹화</li>
                            <li><strong>녹화 영상 다운로드:</strong> 웹에서 녹화된 영상 다운로드</li>
                        </ul>
                    </div>
                </div>

                <div className="experience-project-item">
                    <h3>Mini-CRM 시스템 프로젝트</h3>
                    <p className="project-description">
                        기존 CRM 시스템 이용량 감소에 따른 구글 스프레드시트에서 제공하는 AppScript를 활용하여 저비용 CRM 시스템을 개발했습니다.
                    </p>
                    <div className="project-details">
                        <h4>기능:</h4>
                        <ul>
                            <li><strong>사용자 맞춤형 정보 제공 폼 기능:</strong> HTML을 활용한 자유로운 정보 배치 및 script로 구현된 고객 정보 자동 매칭</li>
                            <li><strong>카카오채널 알림톡 발송 기능:</strong> 잠재 고객 영업 및 일정 관리, 미팅 알림</li>
                            <li><strong>고객 데이터 자동 업데이트 기능:</strong> 폼 제출 시 해당 정보를 고객 데이터에 실시간 업데이트</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>개인 프로젝트</h1>
                <div className="project-item">
                    <h2>소규모 기업을 위한 경량형 CRM 웹 시스템 개발 | 풀스택</h2>
                    <p className="project-description">
                        기획부터 디자인, 개발을 한 프로젝트로 개인 및 소규모(1~5인) 기업 영업팀의 고객 관리를 위한 영업의 핵심 요소만이 담긴 경량형 CRM 웹 시스템을 개발했습니다.
                        < br/>
                        위 프로젝트로 하계 정보과학회 2025에 참여하였습니다.
                        < br/>
                        (2025.03 ~ 2025.06)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> React.js </li>
                            <li><strong>Backend:</strong> Java, Spring</li>
                            <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                            <li><strong>Database:</strong> MySQL</li>
                        </ul>
                        <strong>기능:</strong>
                        <ul>
                            <li><strong>영업 사원 관리:</strong> 권한 부여를 통해 팀장/영업사원으로 분류, 영업사원 정보 열람(아이디, 연락처 등)</li>
                            <li><strong>영업 고객 관리:</strong> 영업 고객 및 영업 진행 중인 고객들의 정보 등록 및 영업 이력, 컨택 이력을 저장</li>
                        </ul>
                        <strong>역할:</strong>
                        <ul>
                            <li><strong>기획 및 디자인 설계:</strong> CRM 시장 리서치, Figma를 사용해 초기 디자인 설계</li>
                            <li><strong>프론트엔드 개발:</strong> 사용 경험이 있는 React.js를 활용하여 사용자 친화적이고 직관적인 웹 개발</li>
                            <li><strong>서버 개발:</strong> 영업팀 또는 영업 사원의 고객 관리 기능 개발(영업 사원, 고객 정보, 영업 이력, 컨택 이력)</li>
                            <li><strong>데이터베이스 구현:</strong> MySQL DB 설계 및 구축</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>팀 프로젝트</h1>
                <div className="project-item">
                    <h2>Alledin - 나만의 알레르기 보디가드 | 백엔드</h2>
                    <p className="project-description">
                        프랜차이즈 식품의 알레르기 유발 정보를 제공하는 사용자 맞춤 서비스로, 알레르기로부터 안전한 외식을 제공하기 위한 앱 서비스입니다.
                        < br/>(2023.05 ~ 2023.12)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Backend:</strong> Java, Spring</li>
                            <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                            <li><strong>Database:</strong> MySQL</li>
                        </ul>
                        <strong>기능:</strong>
                        <ul>
                            <li><strong>식품 알레르기 정보 제공:</strong> 사용자의 알레르기 관리를 위해 알레르기 유발 물질 정보를 저장하고 이에 따른 증상, 대처법, 심각도 등의 정보를 제공하여 알레르기 관리의 편리성을 높임</li>
                            <li><strong>외식 가능 식당 정보 제공:</strong> 사용자 알레르기 정보에 따라 외식 가능 식당 목록과 섭취 가능 메뉴 목록을 제공하며, 사용자 위치 정보를 수집하여 사용자에게 가까운 식당 위치와 정보를 제공</li>
                        </ul>
                        <strong>역할:</strong>
                        <ul>
                            <li><strong>MVP 와이어 프레임 설계:</strong> 네이버, 카카오 지도 서비스 디자인 리서치, Figma를 사용해 초기 MVP 와이어 프레임 설계</li>
                            <li><strong>데이터 수집 및 DB 관리:</strong> 전국 100개 이상 가맹점 보유 프랜차이즈의 위치, 제품 및 알레르기 유발 정보 수집 (약 1만건), 수집한 데이터를 CSV 형식 변환하여 관리 및 AWS RDS 에서 DB 관리</li>
                            <li><strong>서버 레거시 리팩토링:</strong> 에러 포맷을 공통화하여 각 에러 내용을 관리하기 위한 Exception Enum 클래스 구현</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>Distrip - Discover your Trip | 백엔드</h2>
                    <p className="project-description">
                        당장 여행지를 고민 중인 사용자들을 위한 여행지 선정 고민에 도움을 주는 웹 서비스입니다.
                        <br/> (2024.01 ~ 2024.04)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Backend:</strong> Java, Spring</li>
                            <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                            <li><strong>Database:</strong> MySQL</li>
                        </ul>
                        <strong>기능:</strong>
                        <ul>
                            <li><strong>랜덤 여행지 제공:</strong> 한국관광공사 제공 중인 여행지 사진 및 소개, 위치 정보를 사용자의 홈 화면에서 랜덤하게 정보 제공</li>
                            <li><strong>사용자 관심 여행지 저장:</strong> 사용자가 홈 화면에서 관심을 표시한 여행지를 지도의 핀 형태로 제공 및 관심 여행지 리스트화</li>
                        </ul>
                        <strong>역할:</strong>
                        <ul>
                            <li><strong>데이터 수집 및 DB 관리:</strong> 한국관광공사 제공 관광지 데이터 수집 및 전처리 (약 1000건), 수집한 데이터를 CSV 형식으로 변환하여 관리, AWS RDS 운영</li>
                            <li><strong>서버 개발:</strong> 관광지 데이터를 사용자에게 랜덤하게 제공할 수 있는 기능 구현, 사용자의 관심 관광지 정보 저장 기능 구현</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <div className="">
                    <h2>수상 내역</h2>
                    <ul>
                        <li>아주대학교 2024-1 창업 아이디어 경진대회 장려상 (2024.06)</li>
                        <li>아주대학교 2024-1 BM 아이디어 경진대회 우수상 (2024.06)</li>
                        <li>아주대학교 2023-2 발명 아이디어 경진대회 최우수상 (2023.12)</li>
                        <li>아주대학교 2023-2 파란학기제 파일럿상 (2023.12)</li>
                        <li>아주대학교 2023-1 발명아이디어 경진대회 최우수상 (2023.05)</li>
                        <li>아주대학교 아주히든챔피언 학생발굴단 8기 최우수상 (2021.10)</li>
                    </ul>
                </div>

                <div className="">
                    <h2>대외 활동</h2>
                    <ul>
                        <li><strong>SW 봉사동아리 SWEAT</strong> (2021.09 ~ 2021.12)
                            < br/> 수원시 매탄초 5학년 대상 블록 코딩 강사 활동
                        </li>
                        <li><strong>마이크로비트 강사</strong> (2024.07 ~ 2024.07)
                            < br/>수원시 초등학교 5, 6학년 대상 마이크로비트 강사 활동
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h2>자격증</h2>
                    <ul>
                        <li>ADsP 자격증 취득 (2024.11)</li>
                        <li>SQLD 자격증 취득 (2024.12)</li>
                        <li>정보처리기사 필기 (2025.04)</li>
                    </ul>
                </div>

                <div className="">
                    <h2>논문</h2>
                    <ul>
                        <li> 소규모 기업을 위한 경량형 CRM 시스템 설계 및 구현, 2025 한국컴퓨터종합학술대회
                            <a href="/kcc202507.pdf" className="pdf-link" target="_blank" rel="noopener noreferrer">(논문 보기)</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
