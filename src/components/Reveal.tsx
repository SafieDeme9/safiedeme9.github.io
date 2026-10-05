import type { ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
    as?: ElementType;
    /** Stagger delay in ms. */
    delay?: number;
    className?: string;
    children: ReactNode;
};

/** Fades and slides its content in the first time it scrolls into view (skipped for reduced motion, see index.css). */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }: RevealProps) {
    const [ref, inView] = useInView<HTMLElement>();
    return (
        <Tag
            ref={ref}
            className={`reveal ${inView ? "is-visible" : ""} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
}
