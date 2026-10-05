import type { Localized } from "../i18n/types";

export type ProjectImage = {
    src: string;
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
    /** The code exists but the repository is private; shows a "Private repo" badge instead of a Code button. */
    private?: boolean;
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
    challenges: { title: Localized; body: Localized }[];
    /** Sanitised phone screenshots only; never real user data. */
    screenshots: ProjectImage[];
};
