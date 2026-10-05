import { useLanguage } from "../i18n/language";

const year = new Date().getFullYear();

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="border-t border-gray-800 bg-ink text-sm text-gray-300 dark:bg-gray-950">
            <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-5 py-6 sm:px-8">
                <p>{t.footer.madeWith}</p>
                <p>&copy; {year}</p>
            </div>
        </footer>
    );
}
