import './GlobalStyles.scss';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function GlobalStyles({ children }) {
    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        const STORAGE_KEY = 'theme'; // 'light' | 'dark' | 'system'
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyThemeName = (themeName) => {
            const name = themeName === 'dark' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', name);
            document.documentElement.style.colorScheme = name;
        };

        const applySystemTheme = () => {
            applyThemeName(mediaQuery.matches ? 'dark' : 'light');
        };

        let mediaListenerAttached = false;
        const attachMediaListener = () => {
            if (mediaListenerAttached) return;
            const handler = (e) => applyThemeName(e.matches ? 'dark' : 'light');
            if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', handler);
            else if (mediaQuery.addListener) mediaQuery.addListener(handler);
            mediaListenerAttached = true;
            return handler;
        };

        const detachMediaListener = (handler) => {
            if (!mediaListenerAttached || !handler) return;
            if (mediaQuery.removeEventListener) mediaQuery.removeEventListener('change', handler);
            else if (mediaQuery.removeListener) mediaQuery.removeListener(handler);
            mediaListenerAttached = false;
        };

        let mediaHandlerRef = null;

        const stored = window.localStorage.getItem(STORAGE_KEY);

        if (stored === 'dark' || stored === 'light') {
            applyThemeName(stored);
        } else if (stored === 'system') {
            applySystemTheme();
            mediaHandlerRef = attachMediaListener();
        } else {
            // Default to light when no user preference
            applyThemeName('light');
        }

        const onStorage = (e) => {
            if (e.key !== STORAGE_KEY) return;
            const value = e.newValue;
            if (value === 'dark' || value === 'light') {
                detachMediaListener(mediaHandlerRef);
                mediaHandlerRef = null;
                applyThemeName(value);
            } else if (value === 'system') {
                applySystemTheme();
                mediaHandlerRef = attachMediaListener();
            } else {
                // cleared or invalid -> default
                detachMediaListener(mediaHandlerRef);
                mediaHandlerRef = null;
                applyThemeName('light');
            }
        };

        window.addEventListener('storage', onStorage);

        // Expose helper for app-level toggles
        window.__setThemePreference = (value) => {
            if (value === 'light' || value === 'dark' || value === 'system') {
                window.localStorage.setItem(STORAGE_KEY, value);
                // Trigger same-tab apply immediately
                onStorage({ key: STORAGE_KEY, newValue: value });
            }
        };

        return () => {
            window.removeEventListener('storage', onStorage);
            detachMediaListener(mediaHandlerRef);
        };
    }, []);

    return React.Children.only(children);
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
