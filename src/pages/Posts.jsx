import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import '../App.css';
import './posts.css';

const ARCHIVE_BASE = `${process.env.PUBLIC_URL}/velog`;
const TAG_LIMIT = 12;

export default function Posts() {
    const { lang } = useLanguage();
    const [state, setState] = useState({ status: 'loading', index: [] });
    const [keyword, setKeyword] = useState('');
    const [tag, setTag] = useState(null);
    const [showAllTags, setShowAllTags] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const response = await fetch(`${ARCHIVE_BASE}/index.json`);
                if (!response.ok) throw new Error(`index ${response.status}`);
                const index = await response.json();
                if (!cancelled) setState({ status: 'ready', index });
            } catch {
                if (!cancelled) setState({ status: 'error', index: [] });
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    const allTags = useMemo(() => {
        const counts = new Map();
        state.index.forEach((post) => {
            (post.tags || []).forEach((name) => counts.set(name, (counts.get(name) || 0) + 1));
        });
        return [...counts.entries()]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(([name, count]) => ({ name, count }));
    }, [state.index]);

    // 기본은 글 수 상위 몇 개만 접어두고, 더보기를 누르면 전부 편다.
    // 선택된 태그가 접힌 구간에 있으면 해제할 방법이 없어지므로 항상 끼워 넣는다.
    const visibleTags = useMemo(() => {
        if (showAllTags) return allTags;
        const head = allTags.slice(0, TAG_LIMIT);
        if (tag && !head.some((item) => item.name === tag)) {
            const active = allTags.find((item) => item.name === tag);
            if (active) return [...head, active];
        }
        return head;
    }, [allTags, showAllTags, tag]);

    const filtered = useMemo(() => {
        const needle = keyword.trim().toLowerCase();
        return state.index.filter((post) => {
            if (tag && !(post.tags || []).includes(tag)) return false;
            if (!needle) return true;
            const haystack = [post.title, post.summary, ...(post.tags || [])].join(' ').toLowerCase();
            return haystack.includes(needle);
        });
    }, [state.index, keyword, tag]);

    const groups = useMemo(() => {
        const byYear = new Map();
        filtered.forEach((post) => {
            const year = post.date.slice(0, 4);
            if (!byYear.has(year)) byYear.set(year, []);
            byYear.get(year).push(post);
        });
        return [...byYear.entries()].sort((a, b) => b[0].localeCompare(a[0]));
    }, [filtered]);

    if (state.status === 'loading') {
        return (
            <div className="page-content posts-page">
                <p className="posts-status">{lang === 'en' ? 'Loading…' : '불러오는 중…'}</p>
            </div>
        );
    }

    if (state.status === 'error') {
        return (
            <div className="page-content posts-page">
                <p className="posts-status">
                    {lang === 'en' ? 'Could not load the archive.' : '아카이브를 불러오지 못했습니다.'}
                </p>
                <a href="https://velog.io/@kes02/posts" target="_blank" rel="noopener noreferrer">
                    {lang === 'en' ? 'Open velog' : 'velog에서 보기'}
                </a>
            </div>
        );
    }

    return (
        <div className="page-content posts-page">
            <h2 className="posts-heading">{lang === 'en' ? 'Blog' : '블로그'}</h2>
            <p className="posts-subheading">
                {lang === 'en'
                    ? `${state.index.length} posts mirrored from velog.io/@kes02`
                    : `velog.io/@kes02 의 글 ${state.index.length}편을 그대로 옮겨둡니다.`}
            </p>

            <div className="posts-controls">
                <input
                    type="search"
                    className="posts-search"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    placeholder={lang === 'en' ? 'Search title, summary, tag' : '제목·요약·태그 검색'}
                    aria-label={lang === 'en' ? 'Search posts' : '글 검색'}
                />

                {allTags.length > 0 && (
                    <div className="posts-tags">
                        <button
                            type="button"
                            className={tag === null ? 'posts-tag active' : 'posts-tag'}
                            onClick={() => setTag(null)}
                        >
                            {lang === 'en' ? 'All' : '전체'}
                        </button>
                        {visibleTags.map(({ name, count }) => (
                            <button
                                key={name}
                                type="button"
                                className={tag === name ? 'posts-tag active' : 'posts-tag'}
                                onClick={() => setTag(tag === name ? null : name)}
                            >
                                {name} <span className="posts-tag-count">{count}</span>
                            </button>
                        ))}
                        {allTags.length > TAG_LIMIT && (
                            <button
                                type="button"
                                className="posts-tag posts-tag-toggle"
                                onClick={() => setShowAllTags((prev) => !prev)}
                            >
                                {showAllTags
                                    ? (lang === 'en' ? 'Show less' : '접기')
                                    : `+ ${allTags.length - TAG_LIMIT}`}
                            </button>
                        )}
                    </div>
                )}
            </div>

            {filtered.length === 0 ? (
                <p className="posts-status">
                    {lang === 'en' ? 'No posts matched.' : '조건에 맞는 글이 없습니다.'}
                </p>
            ) : (
                groups.map(([year, posts]) => (
                    <section key={year} className="posts-year">
                        <h3 className="posts-year-heading">{year}</h3>
                        <ul className="posts-list">
                            {posts.map((post) => (
                                <li key={post.slug} className="posts-item">
                                    <Link to={`/posts/${post.slug}`} className="posts-item-link">
                                        <span className="posts-item-title">{post.title}</span>
                                        <span className="posts-item-date">{post.date}</span>
                                    </Link>
                                    {post.summary && <p className="posts-item-summary">{post.summary}</p>}
                                    {(post.tags || []).length > 0 && (
                                        <p className="posts-item-tags">
                                            {post.tags.map((name) => (
                                                <button
                                                    key={name}
                                                    type="button"
                                                    className="posts-item-tag"
                                                    onClick={() => setTag(name)}
                                                >
                                                    #{name}
                                                </button>
                                            ))}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))
            )}
        </div>
    );
}
