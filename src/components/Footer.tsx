import { useLanguage } from "../i18n/language";

const year = new Date().getFullYear();

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-white text-[#162327] dark:bg-gray-900 dark:text-white">
            <p>{t.footer.madeWith}</p>
            <p>{t.footer.copyright} &copy; {year}</p>
        </footer>
    )
}
