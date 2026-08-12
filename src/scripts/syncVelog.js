const fs = require('fs');
const path = require('path');

const USERNAME = 'kes02';
const ENDPOINT = 'https://v2.velog.io/graphql';
const PAGE_SIZE = 50;
const LATEST_COUNT = 5;
const REQUEST_GAP_MS = 200;

const ARCHIVE_DIR = path.join(__dirname, '../../public/velog');
const INDEX_FILE = path.join(ARCHIVE_DIR, 'index.json');
const DATA_FILE = path.join(__dirname, '../data/velog.json');
// velog에서 지웠거나 비공개로 돌린 글을 옮겨 두는 곳. 빌드에 포함되지 않아 사이트로는 배포되지 않는다.
const QUARANTINE_DIR = path.join(__dirname, '../../archive/velog');

const LIST_QUERY = `
query($username: String, $cursor: ID, $limit: Int) {
  posts(username: $username, cursor: $cursor, limit: $limit) {
    id
    released_at
  }
}`;

const POST_QUERY = `
query($id: ID) {
  post(id: $id) {
    id
    title
    url_slug
    released_at
    short_description
    tags
    body
  }
}`;

async function gql(query, variables) {
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) {
        throw new Error(`velog responded ${res.status} ${res.statusText}`);
    }
    const json = await res.json();
    if (json.errors) {
        throw new Error(`velog GraphQL error: ${JSON.stringify(json.errors)}`);
    }
    return json.data;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchPostIds() {
    const ids = [];
    let cursor = null;

    while (true) {
        const data = await gql(LIST_QUERY, { username: USERNAME, cursor, limit: PAGE_SIZE });
        const page = data.posts || [];
        if (page.length === 0) break;

        ids.push(...page.map((post) => post.id));
        cursor = page[page.length - 1].id;
        if (page.length < PAGE_SIZE) break;
        await sleep(REQUEST_GAP_MS);
    }

    return ids;
}

function postUrl(urlSlug) {
    return `https://velog.io/@${USERNAME}/${encodeURIComponent(urlSlug)}`;
}

function fileNameFor(post) {
    const date = post.released_at.slice(0, 10);
    const slug = post.url_slug.replace(/[/\\:*?"<>|]/g, '-').replace(/^\.+/, '');
    return `${date}-${slug}.md`;
}

function toMarkdown(post) {
    const frontmatter = [
        '---',
        `title: ${JSON.stringify(post.title)}`,
        `date: ${JSON.stringify(post.released_at)}`,
        `slug: ${JSON.stringify(post.url_slug)}`,
        `url: ${JSON.stringify(postUrl(post.url_slug))}`,
        `tags: ${JSON.stringify(post.tags || [])}`,
        `velog_id: ${JSON.stringify(post.id)}`,
        '---',
        '',
    ].join('\n');

    return `${frontmatter}${post.body.trimEnd()}\n`;
}

function writeIfChanged(filePath, content) {
    if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf-8') === content) {
        return false;
    }
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
}

// velog 응답에 더는 없는 글을 격리 폴더로 옮긴다. 백업은 남기되 사이트로는 내보내지 않는 것이 목적이라 지우지 않는다.
// 슬러그나 발행일을 바꾸면 파일명이 달라져 옛 파일이 남는데, 그것도 여기로 함께 들어온다.
function quarantineRemoved(listed) {
    if (!fs.existsSync(ARCHIVE_DIR)) return [];

    const moved = [];
    for (const file of fs.readdirSync(ARCHIVE_DIR)) {
        if (!file.endsWith('.md') || listed.has(file)) continue;
        fs.mkdirSync(QUARANTINE_DIR, { recursive: true });
        fs.renameSync(path.join(ARCHIVE_DIR, file), path.join(QUARANTINE_DIR, file));
        moved.push(file);
    }
    return moved;
}

// 비공개였다가 다시 공개된 글은 공개 폴더에 새로 쓰이므로, 격리본이 남아 있으면 중복이 된다.
function dropQuarantined(file) {
    const quarantined = path.join(QUARANTINE_DIR, file);
    if (fs.existsSync(quarantined)) {
        fs.rmSync(quarantined);
        return true;
    }
    return false;
}

async function main() {
    const ids = await fetchPostIds();
    console.log(`Found ${ids.length} posts on velog.`);

    const posts = [];
    for (const id of ids) {
        const data = await gql(POST_QUERY, { id });
        posts.push(data.post);
        await sleep(REQUEST_GAP_MS);
    }

    posts.sort((a, b) => b.released_at.localeCompare(a.released_at));

    let written = 0;
    let restored = 0;
    const index = [];
    for (const post of posts) {
        const file = fileNameFor(post);
        if (writeIfChanged(path.join(ARCHIVE_DIR, file), toMarkdown(post))) {
            written += 1;
        }
        if (dropQuarantined(file)) {
            restored += 1;
        }
        index.push({
            slug: post.url_slug,
            title: post.title,
            date: post.released_at.slice(0, 10),
            tags: post.tags || [],
            summary: post.short_description || '',
            file,
            velogUrl: postUrl(post.url_slug),
        });
    }

    const moved = quarantineRemoved(new Set(index.map((entry) => entry.file)));

    // 실행할 때마다 바뀌는 값(수집 시각 등)은 넣지 않는다. 새 글이 없으면 커밋도 없어야 하기 때문.
    writeIfChanged(INDEX_FILE, `${JSON.stringify(index, null, 2)}\n`);

    const latest = index.slice(0, LATEST_COUNT).map(({ slug, title, date }) => ({ slug, title, date }));
    writeIfChanged(DATA_FILE, `${JSON.stringify({ posts: latest }, null, 2)}\n`);

    console.log(`Archived ${posts.length} posts (${written} changed), latest ${latest.length} exposed to the site.`);
    if (moved.length > 0) {
        console.log(`Quarantined ${moved.length} post(s) no longer on velog:\n  ${moved.join('\n  ')}`);
    }
    if (restored > 0) {
        console.log(`Restored ${restored} post(s) from quarantine.`);
    }
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
