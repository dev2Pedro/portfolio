"use client";

import { profile } from "@/data/content";
import { translations } from "@/data/i18n";
import { useLanguage } from "@/components/language-provider";

export default function Contact() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-4 font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {t.sections.contactTitle}
      </h2>
      <a
        href={`mailto:${profile.email}`}
        className="text-zinc-700 underline dark:text-zinc-300"
      >
        {profile.email}
      </a>
    </section>
  );
}
