"use client";

import type { LinkItem } from "@/lib/links";

export default function LinkCard({ link }: { link: LinkItem }) {
  function recordClick() {
    navigator.sendBeacon?.(`/api/links/${link.id}/click`);
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="w-full rounded-xl border border-black/10 px-5 py-4 text-center transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
    >
      {link.title}
    </a>
  );
}
