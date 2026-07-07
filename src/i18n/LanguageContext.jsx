import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({ lang: 'ko', setLang: () => {}, toggleLang: () => {} });

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        try {
            const urlLang = new URLSearchParams(window.location.search).get('lang');
            if (urlLang === 'en' || urlLang === 'ko') return urlLang;
            return localStorage.getItem('lang') || 'ko';
        } catch {
            return 'ko';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('lang', lang);
        } catch {
            // ignore write errors (e.g. private mode)
        }
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = () => setLang(prev => (prev === 'ko' ? 'en' : 'ko'));

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
