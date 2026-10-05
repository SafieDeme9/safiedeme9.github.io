import type { Theme } from "../lib/theme";

type ThemeToggleProps = {
    theme: Theme;
    label: string;
    onToggle: () => void;
};

/** Day/night switch: the sun rolls across and becomes a moon while stars appear (styles in index.css). */
export default function ThemeToggle({ theme, label, onToggle }: ThemeToggleProps) {
    return (
        <button type="button" role="switch" aria-checked={theme === "dark"} aria-label={label} onClick={onToggle} className="theme-switch">
            <span className="theme-star left-[11px] top-[8px]" />
            <span className="theme-star left-[20px] top-[21px] [transition-delay:120ms]" />
            <span className="theme-star left-[26px] top-[12px] [transition-delay:240ms]" />
            <span className="theme-star left-[8px] top-[24px] [transition-delay:180ms]" />
            <span className="theme-cloud" />
            <span className="theme-knob">
                <span className="theme-crater left-[12px] top-[6px] h-[7px] w-[7px]" />
                <span className="theme-crater left-[6px] top-[15px] h-[5px] w-[5px]" />
                <span className="theme-crater left-[16px] top-[17px] h-1 w-1" />
            </span>
        </button>
    );
}
