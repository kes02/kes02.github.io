const projects = [
    {
        id: 'buddybird',
        category: 'team',
        image: { ko: '/portfolio/buddybird/cover-ko.png', en: '/portfolio/buddybird/cover-en.png' },
        pdf: { ko: '/portfolio/buddybird/BuddyBird_Portfolio.pdf?v=ef8bf49', en: '/portfolio/buddybird/BuddyBird_Portfolio_EN.pdf' },
        external: 'https://buddybird.xyz/',
        ko: {
            title: 'BuddyBird',
            subtitle: '앵무새 말 학습 앱',
            period: '2026.04 ~ 현재',
            role: '3인 팀 팀장 · 모바일, 백엔드, 배포',
            summary: '보호자가 집을 비운 동안에도 앵무새에게 단어를 반복해 들려주고, 따라 한 발화를 기록하는 앱입니다. Google Play와 App Store에 출시해 운영하고 있습니다.',
            result: '2026년 10월 기준 누적 다운로드 약 1,300건, 일간 활성 사용자 30~40명',
            features: [
                '단어 반복 재생과 앵무새 발화 자동 녹음',
                '사람 목소리·잡음과 앵무새 소리를 구분하는 발화 판정',
                'WebRTC 기반 원격 펫캠과 학습 세션 확인',
                '잠금 화면 제어, 백그라운드 재생, 사용자 단어 녹음 업로드'
            ],
            work: [
                'Silero VAD로 발화 구간을 분할하고 iOS·Android에 OS 하드웨어 AEC와 WebRTC AEC3를 통합해 재생음 에코를 제거했습니다.',
                'WebRTC Viewer 화면을 개발하고 Cloudflare Realtime STUN/TURN으로 서로 다른 네트워크의 기기를 연결했습니다.',
                'FastAPI 판정 서버에 앵무새 소리 구분 모델을 통합하고 Docker·ECS 배포를 거쳐 SQS·Lambda 구조로 전환했습니다.',
                'EAS·GitHub Actions 빌드, Maestro E2E 테스트, TestFlight·Google Play 배포를 자동화했습니다.'
            ],
            problem: '앱이 재생한 단어가 마이크로 다시 들어오면 앵무새 발화로 잘못 기록될 수 있었습니다.',
            solution: '발화 구간 탐지와 에코 제거를 네이티브 오디오 경로에 통합해 재생음과 실제 발화를 분리했습니다.',
            details: [
                { title: '문제에서 MVP까지', body: '중간심의 자료에서는 보호자가 집을 비웠을 때 앵무새와의 상호작용이 줄고, 기존 대안은 유튜브·TV 반복 재생이나 범용 홈캠에 머문다고 정리했습니다. 보호자 목소리와 원하는 단어를 들려주는 학습을 첫 기능으로 정하고 2026년 6월 10일 앱을 출시했습니다.' },
                { title: '동의 기반 음성 수집', body: '초기 MVP에서는 사용자가 동의한 학습 녹음을 VAD로 분리해 오디오 파일은 S3에, 길이·포맷 같은 메타데이터는 RDS에 저장했습니다. 2026년 8월 14일까지 11,250개, 약 1.87GB의 클립을 수집해 모델 검증의 출발점으로 삼았습니다.' },
                { title: '현재 서비스로 확장', body: '초기 발표에서 향후 과제였던 원격 펫캠과 학습 결과 확인을 제품 기능으로 발전시켰습니다. 앱 재생음이 발화 판정을 방해하는 문제는 Silero VAD와 플랫폼별 에코 제거를 오디오 경로에 통합하며 개선했습니다.' }
            ],
            review: {
                title: '중간심의에서 검증한 것',
                period: '2026년 8월 발표 기준',
                intro: '6월 10일 MVP를 출시하고 실사용자 수요와 앵무새 음성 데이터 수집 가능성을 확인했습니다.',
                metrics: [
                    { value: '824건', label: '8월 15일까지 누적 다운로드' },
                    { value: '약 32명', label: '7월 1일~8월 15일 일간 활성 사용자' },
                    { value: '11,250개', label: '8월 14일 기준 수집한 음성 클립' }
                ],
                pipelineTitle: '음성 데이터와 판정 흐름',
                pipeline: ['사용자 동의 후 학습 중 녹음', 'VAD로 소리 구간 분리', '오디오를 S3에, 메타데이터를 RDS에 저장', 'Perch 2.0 특징과 로지스틱 회귀로 앵무새 소리 분류'],
                validation: '코뉴어와 퀘이커 데이터를 교차해 학습·평가하는 Leave-One-Bird-Out 검증으로 Perch 2.0을 선택했습니다. 단어 모사 판정의 DTW 부분 시퀀스 PoC는 AUC 0.83, 균형 정확도 0.77을 기록했습니다. 이 수치는 중간심의 당시 연구 결과입니다.',
                next: '당시 제시한 응급 상황 감지와 생활 리포트는 향후 과제로 구분했습니다.'
            },
            stack: ['React Native (Expo)', 'WebRTC', 'Python · FastAPI', 'AWS ECS · SQS · Lambda', 'Docker · Pulumi', 'EAS · GitHub Actions · Maestro'],
            externalLabel: '서비스 보기'
        },
        en: {
            title: 'BuddyBird',
            subtitle: 'Speech training for parrots',
            period: 'Apr 2026 – Present',
            role: 'Team lead, team of three · mobile, backend, deployment',
            summary: 'An app that plays words to a parrot while its owner is away and records the bird’s attempts to imitate them. Released on Google Play and the App Store.',
            result: 'About 1,300 cumulative downloads and 30–40 daily active users as of Oct 2026',
            features: [
                'Repeated word playback and automatic recording of parrot speech',
                'Classification of parrot sounds against human speech and noise',
                'Remote WebRTC pet camera for monitoring training sessions',
                'Lock-screen controls, background playback, and custom word recordings'
            ],
            work: [
                'Segmented vocalizations with Silero VAD and integrated hardware AEC and WebRTC AEC3 on iOS and Android to remove playback echo.',
                'Built the WebRTC viewer and connected devices across networks with Cloudflare Realtime STUN/TURN.',
                'Integrated the parrot-sound classifier into FastAPI; moved deployment from Docker and ECS to an SQS and Lambda pipeline.',
                'Automated EAS and GitHub Actions builds, Maestro end-to-end tests, and mobile releases.'
            ],
            problem: 'Words played by the app could re-enter the microphone and be mistaken for the parrot’s voice.',
            solution: 'I combined vocalization detection with native echo cancellation to separate playback from recorded speech.',
            details: [
                { title: 'From the problem to an MVP', body: 'The midterm review framed the gap: video loops and generic pet cameras could not play an owner’s voice or teach selected words. We chose voice-based word training as the first feature and launched the app on June 10, 2026.' },
                { title: 'Consented audio collection', body: 'In the initial MVP, VAD isolated intervals from training recordings collected with user consent. Audio went to S3 and metadata such as duration and format to RDS. By Aug 14, the pipeline had collected 11,250 clips totaling about 1.87 GB for model validation.' },
                { title: 'Evolving the shipped product', body: 'Remote pet monitoring and training results grew from the review roadmap into product features. To prevent playback audio from confusing vocalization detection, I integrated Silero VAD and platform-specific echo cancellation into the audio path.' }
            ],
            review: {
                title: 'What the midterm review validated',
                period: 'As presented in Aug 2026',
                intro: 'The MVP launched on June 10 to test user demand and whether parrot vocalizations could be collected for later analysis.',
                metrics: [
                    { value: '824', label: 'Cumulative downloads by Aug 15' },
                    { value: '~32', label: 'Daily active users, Jul 1–Aug 15' },
                    { value: '11,250', label: 'Audio clips collected by Aug 14' }
                ],
                pipelineTitle: 'Audio collection and classification',
                pipeline: ['Record during training with user consent', 'Isolate sound intervals with VAD', 'Store audio in S3 and metadata in RDS', 'Classify parrot sounds using Perch 2.0 features and logistic regression'],
                validation: 'We selected Perch 2.0 after Leave-One-Bird-Out validation across conures and quakers. The early DTW subsequence prototype for word imitation reached 0.83 AUC and 0.77 balanced accuracy. These are research results from the midterm review.',
                next: 'Emergency detection and daily activity reports were presented as future work at that stage.'
            },
            stack: ['React Native (Expo)', 'WebRTC', 'Python · FastAPI', 'AWS ECS · SQS · Lambda', 'Docker · Pulumi', 'EAS · GitHub Actions · Maestro'],
            externalLabel: 'Visit product'
        }
    },
    {
        id: 'alledin',
        category: 'team',
        image: '/portfolio/alledin/app-screens.png',
        diagram: '/portfolio/alledin/system_architecture.png',
        pdf: { ko: '/portfolio/alledin/Portfolio_Alledin.pdf?v=ef8bf49', en: '/portfolio/alledin/Alledin_Portfolio_EN.pdf' },
        ko: {
            title: 'Alledin', subtitle: '나만의 알레르기 비서', period: '2023.05 ~ 2023.11',
            role: '4인 팀 · 백엔드 2명 중 1명',
            summary: '사용자의 알레르기 정보를 기준으로 프랜차이즈 음식점에서 먹을 수 있는 메뉴를 찾아주는 모바일 서비스입니다.',
            features: ['식약처 지정 알레르기 유발 물질 21종 중 해당 항목 저장', '알레르기 증상·대처법·심각도 제공', '위치와 알레르기 정보를 반영한 식당·메뉴 검색'],
            work: ['프랜차이즈 위치·상품·알레르기 정보 약 1만 건을 수집하고 CSV로 정리해 AWS RDS에 저장했습니다.', 'MVP 와이어프레임을 Figma로 설계하고 서버의 예외 응답을 Enum으로 표준화했습니다.', '공공데이터 좌표를 지도 API 형식으로 변환하고 표기가 일정하지 않은 항목을 정리했습니다.'],
            problem: '메뉴마다 사용자의 알레르기 정보를 다시 조회하는 중복 로직 때문에 식당 검색에 약 1분이 걸렸습니다.',
            solution: '사용자 알레르기 정보를 한 번 조회해 재사용하도록 Service 로직을 바꿔 반복 조회를 줄였습니다.',
            details: [
                { title: '데이터 준비', body: '전국 100개 이상 가맹점을 가진 프랜차이즈를 대상으로 위치·상품·알레르기 정보를 모았습니다. 사용할 수 없는 공공데이터를 제거하고 표기법을 통일한 뒤 CSV로 정리해 RDS에서 관리했습니다. 지도 API에 맞도록 좌표계 변환도 검토했습니다.' },
                { title: '검색 경로 개선', body: '검색 요청을 Controller, Service, DB 순서로 추적해 메뉴마다 사용자 알레르기를 다시 읽는 중복 조회를 찾았습니다. 알레르기 정보를 한 번 읽고 식당·메뉴 비교에 재사용하도록 바꾸어 약 1분 걸리던 검색의 병목을 제거했습니다.' },
                { title: '남은 과제', body: '프랜차이즈 신메뉴와 단종 메뉴가 계속 바뀌므로, 실제 운영에서는 정기적인 데이터 수집·검증 흐름이 필요합니다.' }
            ],
            stack: ['Java 17 · Spring Boot', 'MySQL · AWS RDS', 'AWS EC2', 'Figma']
        },
        en: {
            title: 'Alledin', subtitle: 'A personal allergy guide', period: 'May – Nov 2023',
            role: 'Four-person team · one of two backend developers',
            summary: 'A mobile service that finds franchise restaurant menus compatible with a user’s food allergies.',
            features: ['Save allergies from 21 designated allergens', 'Explain symptoms, responses, and severity', 'Search restaurants and menus using location and allergy data'],
            work: ['Collected roughly 10,000 franchise locations, products, and allergen records, normalized them as CSV, and stored them in AWS RDS.', 'Designed MVP wireframes in Figma and standardized server errors with an Exception Enum.', 'Converted public-data coordinates for the map API and cleaned inconsistent records.'],
            problem: 'The service queried a user’s allergies for each menu item, causing restaurant searches to take roughly one minute.',
            solution: 'Changed the service to load the user’s allergy data once and reuse it, reducing repeated database reads.',
            details: [
                { title: 'Preparing the data', body: 'We gathered location, product, and allergen information from franchises with more than 100 branches. I removed unusable public records, normalized inconsistent names, prepared CSV files for RDS, and examined coordinate conversion for the map API.' },
                { title: 'Fixing the search path', body: 'I traced the request through the controller, service, and database and found a repeated allergy query for every menu. Loading allergy data once and reusing it removed the bottleneck behind searches that took about a minute.' },
                { title: 'What remained', body: 'New and discontinued menu items change continuously. A production service would need a regular data refresh and validation workflow.' }
            ],
            stack: ['Java 17 · Spring Boot', 'MySQL · AWS RDS', 'AWS EC2', 'Figma']
        }
    },
    {
        id: 'distrip',
        category: 'team',
        image: '/portfolio/distrip/app-screen.png',
        pdf: { ko: '/portfolio/distrip/Portfolio_Distrip.pdf?v=ef8bf49', en: '/portfolio/distrip/Distrip_Portfolio_EN.pdf' },
        ko: {
            title: 'Distrip', subtitle: '사진으로 찾는 여행지', period: '2024.01 ~ 2024.04',
            role: '3인 팀 · 백엔드 전담',
            summary: '여행지를 정하지 못한 사용자가 사진을 넘겨 보며 장소를 발견하고, 마음에 드는 곳을 저장하는 웹 서비스입니다.',
            features: ['무작위 여행지 사진과 상세 정보 제공', '관심 여행지 저장과 북마크 조회'],
            work: ['한국관광공사 관광지 데이터 약 1,000건을 수집·전처리하고 AWS RDS를 운영했습니다.', '무작위 여행지 조회와 사용자별 관심 여행지 저장 API를 구현했습니다.'],
            problem: '데이터가 제한되어 다시 방문한 사용자에게 이미 본 사진이 반복될 수 있었습니다.',
            solution: '로그인 사용자의 마지막 조회 위치를 저장하고, 미리 섞은 사진 목록의 다음 위치부터 보여주도록 구현했습니다.',
            details: [
                { title: '사진 중심 탐색', body: '여행지 선택의 부담을 줄이려고 처음에는 사진만 보여주고, 사용자가 사진을 선택하면 장소의 상세 정보를 확인하도록 했습니다. 마음에 드는 장소는 북마크에 저장할 수 있습니다.' },
                { title: '반복 노출 줄이기', body: '관광지 데이터가 약 1,000건으로 제한되어 재방문 시 같은 사진이 반복되는 문제가 있었습니다. 미리 섞은 사진 순서와 로그인 사용자의 마지막 조회 인덱스를 이용해 다음 사진부터 탐색하도록 구현했습니다.' },
                { title: '남은 과제', body: '자료의 양이 늘어나면 취향 데이터에 따른 추천과 장소 공유를 추가할 여지가 있습니다. 기존 포트폴리오에서는 이를 향후 개선 방향으로 기록했습니다.' }
            ],
            stack: ['Java 21 · Spring Boot', 'MySQL · AWS RDS', '한국관광공사 데이터']
        },
        en: {
            title: 'Distrip', subtitle: 'Discover destinations through photos', period: 'Jan – Apr 2024',
            role: 'Three-person team · sole backend developer',
            summary: 'A web service where undecided travelers browse destination photos and save places they like.',
            features: ['Random destination photos with details', 'Saved destinations and bookmark view'],
            work: ['Collected and cleaned roughly 1,000 tourism records from the Korea Tourism Organization and operated AWS RDS.', 'Built APIs for randomized destinations and user bookmarks.'],
            problem: 'With a limited set of photos, returning visitors could keep seeing destinations they had already viewed.',
            solution: 'Saved each signed-in user’s last viewed index and resumed from the next item in a shuffled list.',
            details: [
                { title: 'Photo-first discovery', body: 'The interface shows a destination photo first and reveals details after the user selects it. Places of interest can be saved and revisited through bookmarks.' },
                { title: 'Reducing repeat exposure', body: 'With roughly 1,000 records, returning visitors could see the same photos repeatedly. I kept a shuffled order and the last viewed index for signed-in users so browsing could resume at the next photo.' },
                { title: 'What remained', body: 'The original portfolio identified preference-based recommendations and sharing as later improvements once the data set and user base grew.' }
            ],
            stack: ['Java 21 · Spring Boot', 'MySQL · AWS RDS', 'Korea Tourism Organization data']
        }
    },
    {
        id: 'light-crm',
        category: 'personal',
        image: '/portfolio/crm/app-screen.png',
        diagram: '/portfolio/crm/system_architecture.png',
        pdf: { ko: '/portfolio/crm/Portfolio_CRM.pdf?v=ef8bf49', en: '/portfolio/crm/Lightweight_CRM_Portfolio_EN.pdf' },
        paper: '/kcc202507.pdf',
        ko: {
            title: '경량형 CRM', subtitle: '소규모 기업을 위한 고객 관리', period: '2025.02 ~ 2025.06',
            role: '개인 프로젝트 · 기획, 디자인, 풀스택 개발',
            summary: '개인과 소규모 영업팀이 고객사, 담당자, 영업·접촉 이력과 일정을 한곳에서 관리하는 웹 서비스입니다. 한국컴퓨터종합학술대회(KCC) 2025에서 발표했습니다.',
            features: ['영업 사원과 고객사·담당자 관리', '영업·접촉 이력 기록과 연결 정보 조회', '접촉 일정 이메일 알림'],
            work: ['영업에 필요한 핵심 기능을 선정하고 화면을 설계해 프론트엔드와 백엔드를 개발·배포했습니다.', '목록에서 항목을 선택하면 연결된 상세 정보를 슬라이드 패널로 확인할 수 있게 했습니다.'],
            problem: '여러 사용자가 같은 고객 데이터를 다룰 때 접근 권한을 구분할 필요가 있었습니다.',
            solution: '계정별 Role을 부여해 조회 범위를 제한하고 하위 권한 사용자의 Role 변경을 막았습니다.',
            details: [
                { title: '핵심 업무 중심 설계', body: 'Salesforce, HubSpot, monday를 조사한 뒤 소규모 팀이 자주 쓰는 고객사, 담당자, 영업 이력, 접촉 일정에 범위를 맞췄습니다. 목록의 행을 선택하면 관련 상세 정보를 슬라이드 패널에서 볼 수 있게 설계했습니다.' },
                { title: '일정과 권한', body: '접촉 이력에 등록한 일정은 설정된 시간에 이메일로 안내합니다. 계정별 Role을 나누어 열람할 수 있는 데이터를 제한하고, 낮은 권한의 사용자가 Role을 바꾸지 못하도록 했습니다.' },
                { title: '검증의 한계', body: '실제 기업에 보급해 장기적으로 사용성을 검증하지 못한 점은 기존 발표 자료에 남긴 한계입니다. 현장 피드백을 통해 필요한 기능을 다시 고르는 것이 다음 단계입니다.' }
            ],
            stack: ['React.js', 'Java 21 · Spring Boot', 'JPA · MySQL', 'AWS EC2 · RDS']
        },
        en: {
            title: 'Lightweight CRM', subtitle: 'Customer management for small teams', period: 'Feb – Jun 2025',
            role: 'Solo project · planning, design, full-stack development',
            summary: 'A web service for small sales teams to manage companies, contacts, sales history, and schedules in one place. Presented at Korea Computer Congress 2025.',
            features: ['Sales staff, companies, and contact management', 'Sales and contact histories with linked detail views', 'Email reminders for contact schedules'],
            work: ['Selected essential sales workflows, designed the screens, and developed and deployed the frontend and backend.', 'Added a slide-out detail panel connected to each selected list item.'],
            problem: 'Multiple users working with the same customer data needed distinct access permissions.',
            solution: 'Assigned account roles to limit data access and prevented lower-privilege users from changing roles.',
            details: [
                { title: 'Designed around core workflows', body: 'After reviewing Salesforce, HubSpot, and monday, I scoped the service to companies, contacts, sales history, and follow-up schedules. Selecting a list row opens a slide-out panel with linked details.' },
                { title: 'Schedules and permissions', body: 'A scheduled contact triggers email reminders. Account roles constrain which records a user can view and prevent lower-privilege users from changing roles.' },
                { title: 'Validation limit', body: 'The original presentation noted that the service was not adopted by a real company, so long-term usability remained untested. Field feedback would guide the next round of features.' }
            ],
            stack: ['React.js', 'Java 21 · Spring Boot', 'JPA · MySQL', 'AWS EC2 · RDS']
        }
    }
];

export default projects;
