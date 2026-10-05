export const LANGS = ["en", "it"] as const;
export type Lang = (typeof LANGS)[number];

/** A piece of content that exists in every supported language. */
export type Localized = Record<Lang, string>;
