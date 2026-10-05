import { techIcons } from "../data/tech";

type TechBadgeProps = {
    name: string;
    size?: "sm" | "md";
};

/** A technology name with its icon. Render inside a list. */
export default function TechBadge({ name, size = "md" }: TechBadgeProps) {
    const style =
        size === "md"
            ? "px-3 py-[7px] text-sm font-semibold bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-900/60"
            : "px-2.5 py-1 text-[12.5px] font-medium bg-gray-100 dark:bg-gray-800";
    return (
        <li className={`flex items-center gap-1.5 rounded-lg text-ink transition duration-200 dark:text-gray-100 ${style}`}>
            <span className={size === "md" ? "text-lg" : "text-[15px]"} aria-hidden="true">
                {techIcons[name] ?? <span className="block h-2 w-2 rounded-full bg-blue-600" />}
            </span>
            {name}
        </li>
    );
}
