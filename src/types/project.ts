export type ProjectImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type Project = {
    name: string;
    description: string;
    tech: string[];
    /** Public source code. Omit when the code is not public. */
    repoUrl?: string;
    /** The code exists but the repository is private; shows a "Private repo" badge instead of a Code button. */
    private?: boolean;
    liveUrl?: string;
    image?: ProjectImage;
};
