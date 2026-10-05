import type { ProjectImage } from "../types/project";
import { useLanguage } from "../i18n/language";

type PhoneFrameProps = {
    image: ProjectImage;
    /** Resting tilt; the frame straightens on hover. */
    tilt?: "left" | "right" | "none";
};

const tilts = {
    left: "-rotate-[5deg] translate-y-7",
    right: "rotate-[5deg] translate-y-7",
    none: "",
};

/** A phone-shaped frame around a mobile screenshot. */
export default function PhoneFrame({ image, tilt = "none" }: PhoneFrameProps) {
    const { l } = useLanguage();
    return (
        <div
            className={`overflow-hidden rounded-[22px] border-[5px] border-ink bg-ink shadow-xl shadow-ink/25 transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-0 hover:scale-[1.03] sm:rounded-[30px] sm:border-[7px] ${tilts[tilt]}`}
        >
            <img
                src={image.src}
                alt={l(image.alt)}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-[17px] sm:rounded-[23px]"
            />
        </div>
    );
}
