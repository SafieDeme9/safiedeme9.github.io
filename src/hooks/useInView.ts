import { useEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view (then stops observing).
 * Without IntersectionObserver support it is true from the start, so content is never hidden.
 */
export function useInView<T extends Element>(rootMargin = "0px 0px -12% 0px") {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

    useEffect(() => {
        const el = ref.current;
        if (!el || inView) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold: 0.1 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [inView, rootMargin]);

    return [ref, inView] as const;
}
