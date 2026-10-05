import { techIcons } from "../data/tech";

type TechBadgeProps = {
    name: string;
    size?: "sm" | "md";
};

/** A technology name with its icon. Render inside a list. */
export default function TechBadge({ name, size = "md" }: TechBadgeProps) {
    const sizing = size === "md" ? "px-3 py-1.5 text-sm" : "px-2.5 py-1 text-xs";
    return (
        <li className={`flex items-center gap-1.5 ${sizing} bg-white dark:bg-gray-900/50 rounded-lg shadow-sm font-medium text-gray-700 dark:text-gray-100`}>
            <span className={size === "md" ? "text-lg" : "text-base"} aria-hidden="true">
                {techIcons[name] ?? <span className="block w-3 h-3 bg-gray-300 rounded-full" />}
            </span>
            {name}
        </li>
    );
}
