import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLanguage } from '../i18n/LanguageContext';
import '../App.css';
import './post.css';

const ARCHIVE_BASE = `${process.env.PUBLIC_URL}/velog`;

function stripFrontmatter(text) {
    const match = text.match(/^---\n[\s\S]*?\n---\n/);
    return match ? text.slice(match[0].length) : text;
}

export default function Post() {
    const { slug } = useParams();
    const { lang } = useLanguage();
    const [state, setState] = useState({ status: 'loading' });

    useEffect(() => {
        let cancelled = false;

        async function load() {
            setState({ status: 'loading' });
            try {
                const indexResponse = await fetch(`${ARCHIVE_BASE}/index.json`);
                if (!indexResponse.ok) throw new Error(`index ${indexResponse.status}`);

                const index = await indexResponse.json();
                const entry = index.find((post) => post.slug === slug);
                if (!entry) {
                    if (!cancelled) setState({ status: 'missing' });
                    return;
                }

                const bodyResponse = await fetch(`${ARCHIVE_BASE}/${encodeURIComponent(entry.file)}`);
                if (!bodyResponse.ok) throw new Error(`body ${bodyResponse.status}`);

                const raw = await bodyResponse.text();
                if (!cancelled) setState({ status: 'ready', entry, body: stripFrontmatter(raw) });
            } catch {
                if (!cancelled) setState({ status: 'error' });
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, [slug]);

    if (state.status === 'loading') {
        return (
            <div className="page-content post-page">
                <p className="post-status">{lang === 'en' ? 'Loading…' : '불러오는 중…'}</p>
            </div>
        );
    }

    if (state.status !== 'ready') {
        const message = state.status === 'missing'
            ? (lang === 'en' ? 'That post is not in the archive.' : '아카이브에 없는 글입니다.')
            : (lang === 'en' ? 'Could not load the post.' : '글을 불러오지 못했습니다.');

        return (
            <div className="page-content post-page">
                <p className="post-status">{message}</p>
                <a href="https://velog.io/@kes02/posts" target="_blank" rel="noopener noreferrer">
                    {lang === 'en' ? 'Open velog' : 'velog에서 보기'}
                </a>
            </div>
        );
    }

    const { entry, body } = state;

    return (
        <div className="page-content post-page">
            <Link to="/posts" className="post-back">
                {lang === 'en' ? '← Blog' : '← 블로그'}
            </Link>

            <h2 className="post-title">{entry.title}</h2>

            <div className="post-meta">
                <span>{entry.date}</span>
                {entry.tags.length > 0 && <span className="post-tags">{entry.tags.join(' · ')}</span>}
                <a href={entry.velogUrl} target="_blank" rel="noopener noreferrer">
                    {lang === 'en' ? 'Read on velog' : 'velog에서 보기'}
                </a>
            </div>

            <article className="post-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {body}
                </ReactMarkdown>
            </article>
        </div>
    );
}
