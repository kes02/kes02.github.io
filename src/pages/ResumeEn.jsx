import React from 'react';
import '../App.css';

export default function ResumeEn() {
    return (
        <div className="page-content">
            <button className="print-button no-print" onClick={() => { if (window.gtag) window.gtag('event', 'save_resume_pdf', { language: 'en' }); window.print(); }}>🖨️ Save as PDF</button>

            <header className="resume-header print-only">
                <div className="resume-name">Heejin Jung</div>
                <div className="resume-title">Software Engineer</div>
                <div className="resume-contact">
                    <a href="mailto:hjjung1220@gmail.com">hjjung1220@gmail.com</a><span className="no-print"> · <a href="https://github.com/kes02" target="_blank" rel="noopener noreferrer">github.com/kes02</a> · <a href="https://kes02.github.io" target="_blank" rel="noopener noreferrer">kes02.github.io</a> · <a href="https://velog.io/@kes02" target="_blank" rel="noopener noreferrer">velog.io/@kes02</a></span>
                </div>
            </header>

            <section className="resume-section">
                <h1>Education</h1>
                <ul>
                    <li>
                        <strong>Ajou University</strong> — B.S. in Software (Mar 2021 – Aug 2026)
                    </li>
                    <li>
                        <strong>Hanmin High School</strong>, Gyeonggi (Mar 2018 – Feb 2021)
                    </li>
                </ul>
            </section>

            <section className="resume-section">
                <h1>Skills</h1>
                <ul>
                    <li><strong>Backend:</strong> Java, Spring Boot, JPA</li>
                    <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                    <li><strong>Database:</strong> MySQL</li>
                </ul>
            </section>

            <section className="resume-section">
                <h1>Experience</h1>
                <div className="experience-item">
                    <div className="experience-header">
                        <h2>Software Maestro 17th (SW Maestro) | Trainee</h2>
                        <span className="period">Apr 2026 – Present (in training)</span>
                    </div>
                    <ul className="summary-list">
                        <li><strong>SW talent program:</strong> Selected as a trainee for the 17th Software Maestro program, run by the Ministry of Science and ICT / IITP</li>
                        <li><strong>Self-directed projects:</strong> Carrying out project-based training with mentoring, from planning through development</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h2>AlgorithmLabs | Researcher</h2>
                        <span className="period">Sep 2025 – Dec 2025</span>
                    </div>
                    <ul className="summary-list">
                        <li><strong>AI Agent development:</strong> Built a work-automation AI agent on ai-canvas.io</li>
                        <li><strong>AI public-education content:</strong> Built an interactive education platform linking the Web (HTML/CSS/JS) with AI models</li>
                    </ul>
                    <div className="experience-project-item">
                        <h3>AI Agent Development</h3>
                        <p className="project-description">
                            Using ai-canvas.io, I built an AI agent system that automates repetitive in-house tasks and cuts task time by more than 50%.
                        </p>
                        <div className="project-details">
                            <h4>Impact:</h4>
                            <p>
                                Reduced task-processing time compared to the previous manual process, improving overall efficiency.
                            </p>
                            <h4>Key features:</h4>
                            <ul>
                                <li><strong>AI summarization & auto-mailing:</strong> Extracts key points from meeting notes and long-form text with AI, then automatically emails them to designated recipients</li>
                                <li><strong>Educational chatbot & guides:</strong> A Q&A chatbot that answers user questions, plus automatic generation of step-by-step checklists</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-project-item">
                        <h3>AI Public-Education Content</h3>
                        <p className="project-description">
                            Built education content combining ai-canvas.io models with a web frontend so students can practice AI regression and classification concepts directly in the browser.
                        </p>
                        <div className="project-details">
                            <h4>Impact:</h4>
                            <p>
                                Exhibited at a 2025 second-half education conference; adopted as an official teaching tool by one metropolitan office of education and one Seoul-area university's liberal-arts course.
                            </p>
                            <h4>Key features:</h4>
                            <ul>
                                <li><strong>AI model visualization:</strong> An HTML/CSS/JS dashboard that matches customer data via scripts and visualizes AI-content progress in real time</li>
                                <li><strong>Curriculum-linked scenarios:</strong> A hands-on environment using real business data aligned with the curriculum to intuitively learn how regression/classification models work</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h2>AlgorithmLabs | Intern</h2>
                        <span className="period">Feb 2024 – Aug 2024</span>
                    </div>
                    <ul>
                        <li><strong>IT technical support:</strong> Resolved customer technical issues on a B2C web service</li>
                        <li><strong>Data labeling & transcription:</strong> Labeled and transcribed OCR data (~500 items)</li>
                        <li><strong>Small development projects:</strong> Screen-recording module, Mini-CRM system</li>
                    </ul>

                    <div className="experience-project-item">
                        <h3>Web Screen-Recording Module</h3>
                        <p className="project-description">
                            Developed an intuitive web screen/audio recording module for a B2C web service.
                        </p>
                        <div className="project-details">
                            <h4>Impact:</h4>
                            <p>
                                Replaced the external web-recording tool with our own service's recording module, improving B2C customer satisfaction.
                            </p>
                            <h4>Features:</h4>
                            <ul>
                                <li><strong>Screen/audio recording:</strong> Records the screen plus the user's face and voice with React.js via the MediaStream API</li>
                                <li><strong>Recording download:</strong> Downloads the recorded video from the web</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-project-item">
                        <h3>Mini-CRM System</h3>
                        <p className="project-description">
                            A low-cost CRM system built with Google Spreadsheet AppScript, in response to the declining usage and complexity of the existing CRM.
                        </p>
                        <div className="project-details">
                            <h4>Impact:</h4>
                            <p>
                                The sales team praised it as simpler and more intuitive than the previous CRM.
                            </p>
                            <h4>Features:</h4>
                            <ul>
                                <li><strong>Customizable info form:</strong> Free layout with HTML and script-based automatic customer matching</li>
                                <li><strong>KakaoTalk channel alerts:</strong> Prospect outreach, schedule management, and meeting reminders</li>
                                <li><strong>Automatic customer-data updates:</strong> Updates customer data in real time on form submission</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>Personal Projects</h1>
                <div className="project-item">
                    <h2>Lightweight CRM Web System for Small Businesses | Full-stack</h2>
                    <p className="project-description">
                        An end-to-end project (planning, design, and development): a lightweight CRM web service containing only the sales essentials, built for the sales teams of individuals and small (1–5 person) businesses.
                        <br/>
                        Presented at the Korea Computer Congress (KCC) 2025.
                        <br/>
                        (Mar 2025 – Jun 2025)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> React.js</li>
                            <li><strong>Backend:</strong> Java, Spring Boot</li>
                            <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                            <li><strong>Database:</strong> MySQL</li>
                        </ul>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Sales staff management:</strong> Role-based classification into manager/salesperson, and viewing of salesperson info (ID, contact, etc.)</li>
                            <li><strong>Sales customer management:</strong> Registering prospects and in-progress customers and storing their sales and contact history</li>
                        </ul>
                        <strong>Role:</strong>
                        <ul>
                            <li><strong>Planning & design:</strong> CRM market research and initial design with Figma</li>
                            <li><strong>Frontend development:</strong> A user-friendly, intuitive web app built with React.js</li>
                            <li><strong>Server development:</strong> Customer-management features for sales teams and staff (staff, customer info, sales history, contact history)</li>
                            <li><strong>Database:</strong> MySQL database design and construction</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>Pomopet - macOS Menu-bar Pomodoro Timer</h2>
                    <p className="project-description">
                        A macOS menu-bar Pomodoro timer where you pick a pet to study with and keep going together. Daily streaks and an activity-grass log encourage consistent studying; distributed via Homebrew with Sparkle auto-updates.
                        <br/>(2026)<span className="no-print"> · <a href="https://github.com/kes02/Pomopet" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>App:</strong> Swift, SwiftUI, SwiftData</li>
                            <li><strong>Distribution:</strong> Homebrew, Sparkle auto-update</li>
                        </ul>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Pomodoro timer + pet raising:</strong> A pet that grows as you keep your focus sessions, for study motivation</li>
                            <li><strong>Progress visualization:</strong> Daily streaks and an activity-grass log to see your consistency at a glance</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>time-mirror - Planned vs. Actual Timeline Planner</h2>
                    <p className="project-description">
                        A timeline planner (PWA) that puts your planned and actual day side by side, so you can look back on whether you spent the day the way you meant to.
                        <br/>(2026)<span className="no-print"> · <a href="https://github.com/kes02/time-mirror" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> TypeScript, PWA</li>
                        </ul>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Planned/actual comparison:</strong> Visualizes your intended plan next to your actual execution</li>
                            <li><strong>Daily retrospective:</strong> Review actual time spent against the plan</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>js-boj-fetch - Baekjoon (BOJ) Problem Recommender</h2>
                    <p className="project-description">
                        An automatic Baekjoon (BOJ) problem recommender for algorithm study groups. It recommends problems members haven't solved yet, matched to your conditions, saving the effort of finding new problems each time.
                        <br/>(2025)<span className="no-print"> · <a href="https://github.com/kes02/js-boj-fetch" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Frontend:</strong> HTML, JavaScript, Tailwind CSS</li>
                            <li><strong>Backend (Proxy):</strong> Node.js, Vercel Serverless Functions</li>
                            <li><strong>API:</strong> solved.ac</li>
                        </ul>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Member management:</strong> Add and manage Baekjoon IDs (stored in browser localStorage)</li>
                            <li><strong>Multi-condition generation:</strong> Combine conditions — difficulty (tier), sort (random / most submitted / highest accuracy), language, algorithm tags (AND/OR), and number of problems</li>
                            <li><strong>Auto-exclude solved problems:</strong> Problems the selected members have already solved are excluded from results</li>
                            <li><strong>Result sharing:</strong> Copy recommended problem links to share with the study group</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>Open Source Contributions</h1>
                <div className="project-item">
                    <h2>CodexBar (steipete/CodexBar)</h2>
                    <p className="project-description">
                        A macOS open-source app (Swift) that surfaces AI coding-tool usage limits in the menu bar. I contributed from issue reporting and root-cause analysis through feature and bug-fix work: 5 merged PRs and 2 reported and verified issues.
                        <br/>(2026)<span className="no-print"> · <a href="https://github.com/steipete/CodexBar" className="pdf-link" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                    <div className="project-details">
                        <strong>Contributions:</strong>
                        <ul>
                            <li><strong>Bug report & root cause:</strong> Reported and root-caused a bug where usage stayed pinned to the previous account after a Claude OAuth account switch (<a href="https://github.com/steipete/CodexBar/issues/1785" className="pdf-link" target="_blank" rel="noopener noreferrer">#1785</a>)</li>
                            <li><strong>Regression found & verified:</strong> Found and reproduced a v0.38.0 regression, filed a follow-up issue, and closed it after confirming the fix in v0.40.0 (<a href="https://github.com/steipete/CodexBar/issues/1886" className="pdf-link" target="_blank" rel="noopener noreferrer">#1886</a>)</li>
                            <li><strong>Merged feature PR:</strong> Show the Claude Max usage multiplier (5x/20x) in the plan label (<a href="https://github.com/steipete/CodexBar/pull/1932" className="pdf-link" target="_blank" rel="noopener noreferrer">#1932</a>)</li>
                            <li><strong>Merged feature PR:</strong> Added KRW (₩) to the preferred currency picker, so won-billed users no longer convert USD estimates by hand (<a href="https://github.com/steipete/CodexBar/pull/2669" className="pdf-link" target="_blank" rel="noopener noreferrer">#2669</a>)</li>
                            <li><strong>Merged fix PR:</strong> Report a delegated Claude OAuth refresh that ends with an unreadable credential as terminal rather than retryable (<a href="https://github.com/steipete/CodexBar/pull/2650" className="pdf-link" target="_blank" rel="noopener noreferrer">#2650</a>)</li>
                            <li><strong>Merged fix PR:</strong> Pinned the Perplexity promo-expiry formatter to en_US_POSIX, fixing a half-translated month on non-English systems (<a href="https://github.com/steipete/CodexBar/pull/2651" className="pdf-link" target="_blank" rel="noopener noreferrer">#2651</a>)</li>
                            <li><strong>Merged docs PR:</strong> Consolidated a duplicate provider section (<a href="https://github.com/steipete/CodexBar/pull/1801" className="pdf-link" target="_blank" rel="noopener noreferrer">#1801</a>)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>Team Projects</h1>
                <div className="project-item">
                    <h2>Alledin - Your Personal Allergy Bodyguard | Backend</h2>
                    <p className="project-description">
                        A user-tailored service that provides allergen information for franchise foods — an app for dining out safely, free from allergy worries.
                        <br/>(May 2023 – Dec 2023)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Backend:</strong> Java, Spring Boot</li>
                            <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                            <li><strong>Database:</strong> MySQL</li>
                        </ul>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Food allergy information:</strong> Stores allergen data and provides symptoms, responses, and severity to make allergy management easier</li>
                            <li><strong>Dine-out restaurant info:</strong> Provides lists of safe restaurants and edible menus based on the user's allergy profile, and uses location data to show nearby restaurants</li>
                        </ul>
                        <strong>Role:</strong>
                        <ul>
                            <li><strong>MVP wireframe design:</strong> Researched Naver/Kakao map service design and built initial MVP wireframes in Figma</li>
                            <li><strong>Data collection & DB management:</strong> Collected location, product, and allergen data for franchises with 100+ nationwide branches (~10,000 records), converted it to CSV, and managed the database on AWS RDS</li>
                            <li><strong>Server refactoring:</strong> Implemented an Exception Enum class to standardize error formats</li>
                        </ul>
                    </div>
                </div>

                <div className="project-item">
                    <h2>Distrip - Discover your Trip | Backend</h2>
                    <p className="project-description">
                        A web service that helps users struggling to choose a travel destination decide where to go.
                        <br/> (Jan 2024 – Apr 2024)
                    </p>
                    <div className="project-details">
                        <strong>Skills:</strong>
                        <ul>
                            <li><strong>Backend:</strong> Java, Spring</li>
                            <li><strong>Infrastructure:</strong> AWS (EC2, RDS)</li>
                            <li><strong>Database:</strong> MySQL</li>
                        </ul>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Random destination suggestions:</strong> Randomly shows photos, descriptions, and locations of destinations from the Korea Tourism Organization on the home screen</li>
                            <li><strong>Save favorite destinations:</strong> Shows destinations the user favorited as map pins and lists them</li>
                        </ul>
                        <strong>Role:</strong>
                        <ul>
                            <li><strong>Data collection & DB management:</strong> Collected and preprocessed Korea Tourism Organization data (~1,000 records), converted it to CSV, and operated AWS RDS</li>
                            <li><strong>Server development:</strong> Implemented random destination delivery and saving of a user's favorite destinations</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h1>Others</h1>
                <div className="">
                    <h2>Awards</h2>
                    <ul>
                        <li>Ajou University 2024-1 Startup Idea Competition, Encouragement Award (Jun 2024)</li>
                        <li>Ajou University 2024-1 Business Model Idea Competition, Excellence Award (Jun 2024)</li>
                        <li>Ajou University 2023-2 Invention Idea Competition, Grand Prize (Dec 2023)</li>
                        <li>Ajou University 2023-2 Paran Semester Pilot Award (Dec 2023)</li>
                        <li>Ajou University 2023-1 Invention Idea Competition, Grand Prize (May 2023)</li>
                        <li>Ajou University Hidden Champion Student Scouting Team 8th, Grand Prize (Oct 2021)</li>
                    </ul>
                </div>

                <div className="">
                    <h2>Activities</h2>
                    <ul>
                        <li><strong>Micro:bit Instructor</strong> (Jul 2024)
                            <br/>Taught Micro:bit to 5th and 6th graders at elementary schools in Suwon
                        </li>
                        <li><strong>SW Volunteer Club SWEAT</strong> (Sep 2021 – Dec 2021)
                            <br/>Block-coding instructor for 5th graders at Maetan Elementary School, Suwon
                        </li>
                        <li><strong>Ajou Hidden Champion Student Scouting Team, 8th</strong> (Jul 2021 – Sep 2021)
                            <br/>An industry-academia project: a five-person team that scouted strong mid-sized and small-but-strong companies and delivered job information to students
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h2>Certifications</h2>
                    <ul>
                        <li>Engineer Information Processing (Dec 2025)</li>
                        <li>SQLD — SQL Developer (Dec 2024)</li>
                        <li>ADsP — Advanced Data Analytics Semi-Professional (Nov 2024)</li>
                    </ul>
                </div>

                <div className="">
                    <h2>Publications</h2>
                    <ul>
                        <li> Design and Implementation of a Lightweight CRM System for Small Businesses, Korea Computer Congress (KCC) 2025
                            <a href="/kcc202507.pdf" className="pdf-link no-print" target="_blank" rel="noopener noreferrer">(View paper)</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
