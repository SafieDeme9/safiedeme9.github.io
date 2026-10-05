import type { ProjectImage } from "../types/project";
import { useLanguage } from "../i18n/language";

/** A phone-shaped frame around a mobile screenshot. */
export default function PhoneFrame({ image }: { image: ProjectImage }) {
    const { l } = useLanguage();
    return (
        <div className="w-40 sm:w-48 shrink-0 rounded-[2rem] border-[6px] border-gray-900 dark:border-gray-600 bg-gray-900 shadow-xl overflow-hidden">
            <img
                src={image.src}
                alt={l(image.alt)}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[9/19.5] object-cover rounded-[1.6rem]"
            />
        </div>
    );
}
