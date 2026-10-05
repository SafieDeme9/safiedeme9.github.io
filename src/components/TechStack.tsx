import { alsoUsedStack, primaryStack } from "../data/tech";
import { useLanguage } from "../i18n/language";
import TechBadge from "./TechBadge";

export default function TechStack() {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">{t.stack.heading}</h2>
                <ul className="flex flex-wrap justify-center gap-2">
                    {primaryStack.map((name) => (
                        <TechBadge key={name} name={name} />
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{t.stack.alsoUsed}</h3>
                <ul className="flex flex-wrap justify-center gap-2">
                    {alsoUsedStack.map((name) => (
                        <TechBadge key={name} name={name} size="sm" />
                    ))}
                </ul>
            </div>
        </div>
    );
}
