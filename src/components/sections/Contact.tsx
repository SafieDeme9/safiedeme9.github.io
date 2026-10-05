import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useLanguage } from "../../i18n/language";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const EMAIL = "sdeme1201@gmail.com";

const socials = [
  { href: "https://www.linkedin.com/in/sdeme9/", label: "LinkedIn", Icon: GrLinkedin },
  { href: "https://github.com/SafieDeme9", label: "GitHub", Icon: FaGithub },
];

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="Contact" aria-labelledby="contact-heading" className="bg-ink py-20 text-gray-50 transition-colors duration-500 dark:bg-gray-950 sm:py-[110px]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading id="contact-heading" eyebrow={t.contact.eyebrow} title={t.contact.heading} tone="inverted" />
        <Reveal>
          <p className="-mt-4 mb-8 text-lg text-gray-300">{t.contact.text}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-[60px] max-w-full items-center gap-3 break-all rounded-[14px] bg-blue-600 px-6 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-7 sm:text-xl"
          >
            <MdMailOutline className="shrink-0 text-2xl" aria-hidden="true" />
            {EMAIL}
          </a>
          <div className="mt-5 flex gap-2.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-xl text-gray-50 transition hover:-translate-y-0.5 hover:bg-gray-800"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
