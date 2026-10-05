import type { Localized } from "../i18n/types";

/** Month is 1-12. */
export type YearMonth = { year: number; month: number };

export type Job = {
    company: string;
    title: Localized;
    location: Localized;
    start: YearMonth;
    /** Omit for a current role. */
    end?: YearMonth;
    bullets: Localized[];
};
