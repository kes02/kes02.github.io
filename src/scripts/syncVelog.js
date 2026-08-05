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
    const index = [];
    for (const post of posts) {
        const file = fileNameFor(post);
        if (writeIfChanged(path.join(ARCHIVE_DIR, file), toMarkdown(post))) {
            written += 1;
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

    // 실행할 때마다 바뀌는 값(수집 시각 등)은 넣지 않는다. 새 글이 없으면 커밋도 없어야 하기 때문.
    writeIfChanged(INDEX_FILE, `${JSON.stringify(index, null, 2)}\n`);

    const latest = index.slice(0, LATEST_COUNT).map(({ slug, title, date }) => ({ slug, title, date }));
    writeIfChanged(DATA_FILE, `${JSON.stringify({ posts: latest }, null, 2)}\n`);

    console.log(`Archived ${posts.length} posts (${written} changed), latest ${latest.length} exposed to the site.`);
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
