export type Theme = "light" | "dark";

// Keep in sync with the inline script in index.html, which applies the theme before first paint.
export const THEME_STORAGE_KEY = "theme";

export function getInitialTheme(): Theme {
    try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        // Storage can be unavailable (private mode, blocked cookies); fall through.
    }
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
}

export function saveTheme(theme: Theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Ignore: the choice just won't persist.
    }
}
