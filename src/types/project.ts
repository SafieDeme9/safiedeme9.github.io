import type { Localized } from "../i18n/types";

export type ProjectImage = {
    src: string;
    /** Optional smaller variants, e.g. "/images/x-600.webp 600w, /images/x.webp 1200w". */
    srcSet?: string;
    alt: Localized;
    width: number;
    height: number;
};

export type Project = {
    name: string;
    description: Localized;
    tech: string[];
    /** Public source code. Omit when the code is not public. */
    repoUrl?: string;
    liveUrl?: string;
    /** "site" for a production website, "demo" (default) for a hosted demo. */
    liveKind?: "demo" | "site";
    image?: ProjectImage;
};

export type CaseStudy = {
    name: string;
    tagline: Localized;
    status: Localized;
    problem: Localized;
    role: Localized;
    stack: string[];
    /** Public, clearly-labelled design prototype (sample data only). */
    prototypeUrl?: string;
    /** Phone screenshots from the public prototype; never real user data. */
    screenshots: ProjectImage[];
};
