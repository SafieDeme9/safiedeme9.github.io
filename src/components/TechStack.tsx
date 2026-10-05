import { alsoUsedStack, primaryStack } from "../data/tech";
import { useLanguage } from "../i18n/language";
import TechBadge from "./TechBadge";

export default function TechStack() {
    const { t } = useLanguage();
    const rows = [
        { label: t.stack.heading, items: primaryStack, size: "md" as const },
        { label: t.stack.alsoUsed, items: alsoUsedStack, size: "sm" as const },
    ];
    return (
        <div className="flex flex-col gap-3.5 border-t border-gray-300 pt-7 dark:border-gray-700">
            {rows.map((row) => (
                <div key={row.label} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <h2 className="w-24 shrink-0 text-[13px] font-bold text-gray-600 dark:text-gray-300">{row.label}</h2>
                    <ul className="flex flex-wrap gap-2">
                        {row.items.map((name) => (
                            <TechBadge key={name} name={name} size={row.size} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
