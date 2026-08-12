import React from 'react';
import '../App.css';
import { useLanguage } from '../i18n/LanguageContext';
import ResumeEn from './ResumeEn';

export default function Resume() {
    const { lang } = useLanguage();
    if (lang === 'en') return <ResumeEn />;
    return (
        <div className="page-content">
            <button className="print-button no-print" onClick={() => { if (window.gtag) window.gtag('event', 'save_resume_pdf', { language: 'ko' }); window.print(); }}>🖨️ PDF로 저장</button>

            <header className="resume-header print-only">
                <div className="resume-name">정희진</div>
                <div className="resume-title">소프트웨어 엔지니어 · Software Engineer</div>
                <div className="resume-contact">
                    <a href="mailto:hjjung1220@gmail.com">hjjung1220@gmail.com</a><span className="no-print"> · <a href="https://github.com/kes02" target="_blank" rel="noopener noreferrer">github.com/kes02</a> · <a href="https://kes02.github.io" target="_blank" rel="noopener noreferrer">kes02.github.io</a> · <a href="https://velog.io/@kes02" target="_blank" rel="noopener noreferrer">velog.io/@kes02</a></span>
                </div>
            </header>

            <section className="resume-section">
                <h1>학력</h1>
                <ul>
                    <li>
                        <strong>아주대학교 소프트웨어학과</strong> (2021.03 ~ 2026.08)
                    </li>
                    <li>
                        <strong>경기 한민고등학교</strong> (2018.03 ~ 2021.02)
                    </li>
                </ul>
            </section>

            <section className="resume-section">
                <h1>스킬</h1>
                <ul>
                    <li><strong>Backend:</strong> Java, SpringBoot, JPA</li>
                    <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                    <li><strong>Database:</strong> MySQL</li>
                </ul>
            </section>

            <section className="resume-section">
                <h1>주요 프로젝트</h1>
                <div className="project-item">
                    <h2>BuddyBird - 앵무새 말 학습 앱 | 팀장</h2>
                    <p className="project-description">
                        앵무새에게 단어를 반복해 들려주고 따라 하는 발화를 기록하는 React Native(Expo) 앱입니다. 소프트웨어 마에스트로 17기 연수 과정에서 3인 팀의 팀장을 맡아 학습 세션의 오디오 파이프라인과 발화 캡처를 개발했습니다. 인스타그램 채널을 운영해 초기 사용자를 모았고, GA4와 Looker Studio를 구성해 유입과 사용 흐름을 측정하며 제품 방향을 정하고 있습니다. 2026년 8월 기준 누적 다운로드 약 800건, DAU 30~40명입니다.
                        <br/>(2026.04 ~ )<span className="no-print"> · <a href="https://buddybird.xyz/" className="pdf-link" target="_blank" rel="noopener noreferrer">랜딩</a></span>
                    </p>
                </div>
            </section>

            <section className="resume-section">
                <h1>경력</h1>
                <div className="experience-item">
                    <div className="experience-header">
                        <h2>알고리즘랩스 | 연구원</h2>
                        <span className="period">2025.09 ~ 2025.12</span>
                    </div>
                    <ul className="summary-list">
                        <li><strong>AI Agent 개발:</strong> ai-canvas.io 기반 업무 자동화 AI Agent 개발</li>
                        <li><strong>인공지능 공교육 콘텐츠 개발:</strong> Web(HTML/CSS/JS)과 AI 모델을 연동한 인터랙티브 교육 플랫폼 구축</li>
                    </ul>
                    <div className="experience-project-item">
                        <h3>AI Agent 개발</h3>
                        <p className="project-description">
                            ai-canvas.io를 활용하여 반복적인 사내 업무를 자동화하고, 업무 소요 시간을 50% 이상 단축하는 AI Agent 시스템을 개발했습니다.
                        </p>
                        <div className="project-details">
                            <h4>성과:</h4>
                            <p>
                                기존 수동 프로세스 대비 업무 처리 시간을 단축하여 업무 효율성을 증가시켰습니다.
                            </p>
                            <h4>주요 기능:</h4>
                            <ul>
                                <li><strong>AI 요약 및 자동 메일링:</strong> 회의록 및 장문 텍스트의 핵심 내용을 AI로 요약 추출 후, 지정된 수신자에게 이메일 자동 발송 구현</li>
                                <li><strong>교육용 챗봇 및 가이드 제공:</strong> 사용자 질문에 대응하는 Q&A 챗봇 구현 및 업무 단계별 필수 체크리스트 자동 생성 기능</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-project-item">
                        <h3>인공지능 공교육 콘텐츠 개발</h3>
                        <p className="project-description">
                            학생들이 AI의 회귀와 분류 개념을 웹 환경에서 직접 실습할 수 있도록, ai-canvas.io 모델과 웹 프론트엔드를 결합한 교육용 콘텐츠를 개발했습니다.
                        </p>
                        <div className="project-details">
                            <h4>성과:</h4>
                            <p>
                                2025년 하반기 교육 컨퍼런스 출품, 1개 시교육청 및 수도권 소재 대학교 1곳 교양과목 공식 교육 도구로 채택되었습니다.
                            </p>
                            <h4>주요 기능:</h4>
                            <ul>
                                <li><strong>AI 모델 연동 시각화:</strong> HTML/CSS/JS로 구성된 대시보드에서 스크립트를 통해 고객 정보를 매칭하고, AI 콘텐츠 진행 결과를 실시간 시각화</li>
                                <li><strong>공교육 연계 실무 시나리오:</strong> 교과 과정을 반영한 실제 비즈니스 데이터를 활용하여, 회귀/분류 모델의 원리를 직관적으로 학습할 수 있는 실습 환경 구현</li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                            B2C 웹 서비스에 적용할 사용자 직관적인 웹 화면/음성 녹화 모듈을 개발했습니다.
                        </p>
                        <div className="project-details">
                            <h4>성과:</h4>
                            <p>
                                기존에 사용하던 외부 웹 녹화 시스템에서 자사 제공 웹 서비스 녹화 모듈로 변경하였으며, B2C 고객들의 만족도를 높였습니다.
                            </p>
                            <h4>기능:</h4>
                            <ul>
                                <li><strong>웹 화면/음성 녹화:</strong> MediaStreamApi를 활용해 React.js로 화면 및 사용자의 얼굴, 목소리 녹화</li>
                                <li><strong>녹화 영상 다운로드:</strong> 웹에서 녹화된 영상 다운로드</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-project-item">
                        <h3>Mini-CRM 시스템 프로젝트</h3>
                        <p className="project-description">
                            기존 CRM 시스템 이용량 감소와 복잡함에 따른 구글 스프레드시트에서 제공하는 AppScript를 활용하여 저비용 CRM 시스템입니다.
                        </p>
                        <div className="project-details">
                            <h4>성과:</h4>
                            <p>
                                영업팀으로부터 기존 CRM에 비해 간단하고, 직관적이어서 사용하기 편하다는 긍정적인 평가를 받았습니다.
                            </p>
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
                        기획부터 디자인, 개발을 한 프로젝트로 개인 및 소규모(1~5인) 기업 영업팀의 고객 관리를 위한 영업의 핵심 요소만이 담긴 경량형 CRM 웹서비스 입니다.
                        < br/>
                        위 프로젝트로 하계 정보과학회 2025에 참여하였습니다.
                        < br/>
                        (2025.03 ~ 2025.06)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> React.js </li>
                            <li><strong>Backend:</strong> Java, SpringBoot</li>
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

                <div className="project-item">
                    <h2>Pomopet - macOS 메뉴바 포모도로 타이머</h2>
                    <p className="project-description">
                        공부를 함께할 펫을 정하고, 펫과 함께 공부를 이어가는 macOS 메뉴바 포모도로 타이머입니다. 일일 스트릭과 활동 잔디로 학습 지속을 유도하며, Homebrew로 배포하고 Sparkle로 자동 업데이트를 제공합니다.
                        <br/>(2026)<span className="no-print"> · <a href="https://github.com/kes02/Pomopet" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>App:</strong> Swift, SwiftUI, SwiftData</li>
                            <li><strong>배포:</strong> Homebrew, Sparkle 자동 업데이트</li>
                        </ul>
                        <strong>기능:</strong>
                        <ul>
                            <li><strong>포모도로 타이머 + 펫 육성:</strong> 집중 세션을 이어갈수록 함께 성장하는 펫으로 학습 동기 부여</li>
                            <li><strong>기록 시각화:</strong> 일일 스트릭과 활동 잔디로 꾸준함을 한눈에 확인</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>time-mirror - 계획 vs 실제 타임라인 플래너</h2>
                    <p className="project-description">
                        예상 계획과 실제로 보낸 하루를 나란히 놓고 비교하는 타임라인 플래너(PWA)입니다. 세운 계획대로 하루를 보냈는지 되돌아볼 수 있도록 설계했습니다.
                        <br/>(2026)<span className="no-print"> · <a href="https://github.com/kes02/time-mirror" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> TypeScript, PWA</li>
                        </ul>
                        <strong>기능:</strong>
                        <ul>
                            <li><strong>계획/실제 타임라인 비교:</strong> 예상 계획과 실제 실행을 나란히 시각화</li>
                            <li><strong>하루 회고:</strong> 계획 대비 실제 사용 시간을 되짚어 보는 회고 지원</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>js-boj-fetch - 백준(BOJ) 문제 추천 서비스</h2>
                    <p className="project-description">
                        알고리즘 스터디 그룹을 위한 백준(BOJ) 문제 자동 추천 서비스입니다. 스터디원들이 아직 풀지 않은 문제를 조건에 맞게 추천해, 매번 새 문제를 찾는 수고를 덜어줍니다.
                        <br/>(2025)<span className="no-print"> · <a href="https://github.com/kes02/js-boj-fetch" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> HTML, JavaScript, Tailwind CSS</li>
                            <li><strong>Backend (Proxy):</strong> Node.js, Vercel Serverless Functions</li>
                            <li><strong>API:</strong> solved.ac</li>
                        </ul>
                        <strong>기능:</strong>
                        <ul>
                            <li><strong>스터디원 관리:</strong> 백준 ID 추가 · 관리 (브라우저 localStorage 저장)</li>
                            <li><strong>다중 조건 출제:</strong> 난이도(티어), 정렬(랜덤/제출 많은 순/정답률), 언어, 알고리즘 태그(AND/OR), 문제 수 등 조건을 조합해 출제</li>
                            <li><strong>푼 문제 자동 제외:</strong> 선택한 스터디원이 이미 푼 문제는 결과에서 제외</li>
                            <li><strong>결과 공유:</strong> 추천 문제 링크를 복사해 스터디 그룹에 공유</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>오픈소스 기여</h1>
                <div className="project-item">
                    <h2>CodexBar (steipete/CodexBar)</h2>
                    <p className="project-description">
                        AI 코딩 도구의 사용량 한도를 메뉴바에서 보여주는 macOS 오픈소스 앱(Swift)입니다. 이슈 제보와 근본 원인 분석부터 기능·버그 수정 PR까지, PR 5건 머지 및 이슈 2건 제보·검증으로 기여했습니다.
                        <br/>(2026)<span className="no-print"> · <a href="https://github.com/steipete/CodexBar" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>기여 내역:</strong>
                        <ul>
                            <li><strong>버그 제보 · 원인 분석:</strong> Claude OAuth 계정 전환 시 사용량이 이전 계정에 고정되는 버그 제보 및 근본 원인 분석 (<a href="https://github.com/steipete/CodexBar/issues/1785" className="pdf-link" target="_blank" rel="noopener noreferrer">#1785</a>)</li>
                            <li><strong>회귀 발견 · 검증:</strong> v0.38.0 회귀를 발견 · 재현해 후속 이슈 등록, v0.40.0 수정 확인 후 종료 (<a href="https://github.com/steipete/CodexBar/issues/1886" className="pdf-link" target="_blank" rel="noopener noreferrer">#1886</a>)</li>
                            <li><strong>기능 PR 머지:</strong> Claude Max 사용량 배수(5x/20x)를 플랜 라벨에 표시 (<a href="https://github.com/steipete/CodexBar/pull/1932" className="pdf-link" target="_blank" rel="noopener noreferrer">#1932</a>)</li>
                            <li><strong>기능 PR 머지:</strong> 설정의 통화 선택 목록에 KRW(₩) 추가 — 원화로 청구받는 사용자가 USD 추정치를 직접 환산하던 불편 해소 (<a href="https://github.com/steipete/CodexBar/pull/2669" className="pdf-link" target="_blank" rel="noopener noreferrer">#2669</a>)</li>
                            <li><strong>버그 수정 PR 머지:</strong> 위임된 Claude OAuth 갱신이 읽을 수 없는 자격 증명으로 끝나는 경우를 재시도 가능이 아닌 종료 상태로 보고하도록 수정 (<a href="https://github.com/steipete/CodexBar/pull/2650" className="pdf-link" target="_blank" rel="noopener noreferrer">#2650</a>)</li>
                            <li><strong>버그 수정 PR 머지:</strong> Perplexity 프로모션 만료일 포매터를 en_US_POSIX로 고정 — 비영어 시스템에서 월 표기만 번역돼 문자열이 섞이던 문제 해결 (<a href="https://github.com/steipete/CodexBar/pull/2651" className="pdf-link" target="_blank" rel="noopener noreferrer">#2651</a>)</li>
                            <li><strong>문서 PR 머지:</strong> 중복된 프로바이더 문서 정리 (<a href="https://github.com/steipete/CodexBar/pull/1801" className="pdf-link" target="_blank" rel="noopener noreferrer">#1801</a>)</li>
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
                            <li><strong>Backend:</strong> Java, SpringBoot</li>
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
                <h1>기타</h1>
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
                        <li><strong>소프트웨어 마에스트로 17기 (SW Maestro) 연수생</strong> (2026.04 ~ )
                            <br/>과학기술정보통신부 · IITP 주관 SW 인재 양성 프로그램에 연수생으로 선발, 멘토링을 기반으로 기획부터 개발까지 자기주도 프로젝트 수행 (BuddyBird)
                        </li>
                        <li><strong>마이크로비트 강사</strong> (2024.07 ~ 2024.07)
                            <br/>수원시 초등학교 5, 6학년 대상 마이크로비트 강사 활동
                        </li>
                        <li><strong>SW 봉사동아리 SWEAT</strong> (2021.09 ~ 2021.12)
                            <br/>수원시 매탄초 5학년 대상 블록 코딩 강사 활동
                        </li>
                        <li><strong>아주히든챔피언 학생발굴단 8기</strong> (2021.07 ~ 2021.09)
                            <br/>5인의 팀을 구성하여 우수한 기술력을 갖춘 중견·강소기업을 직접 발굴하고 학생들에게 취업 정보를 전달하는 산학협력 프로젝트
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h2>자격증</h2>
                    <ul>
                        <li>정보처리기사 취득 (2025.12)</li>
                        <li>SQLD 자격증 취득 (2024.12)</li>
                        <li>ADsP 자격증 취득 (2024.11)</li>
                    </ul>
                </div>

                <div className="">
                    <h2>논문</h2>
                    <ul>
                        <li> 소규모 기업을 위한 경량형 CRM 시스템 설계 및 구현, 2025 한국컴퓨터종합학술대회
                            <a href="/kcc202507.pdf" className="pdf-link no-print" target="_blank" rel="noopener noreferrer">(논문 보기)</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
