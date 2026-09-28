"use client";

import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
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
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-3 font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
      >
        <Mail size={18} />
        {t.sections.contactCta}
      </a>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        {t.sections.contactSecondary}{" "}
        <a
          href={profile.linkedinUrl}
          className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          LinkedIn
          <FaLinkedin size={14} />
        </a>
      </p>
    </section>
  );
}
