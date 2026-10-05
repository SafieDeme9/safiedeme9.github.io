import Reveal from "./Reveal";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    id?: string;
    tone?: "default" | "inverted";
};

export default function SectionHeading({ eyebrow, title, id, tone = "default" }: SectionHeadingProps) {
    const inverted = tone === "inverted";
    return (
        <Reveal className="mb-10 sm:mb-12">
            <p className={`text-[13px] font-bold uppercase tracking-[0.12em] ${inverted ? "text-blue-300" : "text-blue-700 dark:text-blue-300"}`}>
                {eyebrow}
            </p>
            <h2 id={id} className="mt-2.5 text-3xl sm:text-[42px] font-extrabold leading-tight tracking-tight">
                {title}
            </h2>
        </Reveal>
    );
}
