"use client";

import type { LinkItem } from "@/lib/profile";

export function LinkCard({ link }: { link: LinkItem }) {
  const recordClick = () => {
    fetch(`/api/links/${link.id}/click`, { method: "POST" }).catch(() => {
      // 클릭 집계 실패는 사용자 이동을 막지 않는다.
    });
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-base font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-sky-500 hover:text-white hover:shadow-lg"
    >
      {link.label}
    </a>
  );
}
