"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/profile";
import { LinkCard } from "@/components/LinkCard";

export function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/links/clicks")
      .then((res) => res.json())
      .then((data: { counts?: Record<string, number> }) => {
        if (!cancelled) {
          setCounts(data.counts ?? {});
        }
      })
      .catch(() => {
        // 조회 실패 시 0회 표시를 유지한다.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClicked = (id: string, count: number) => {
    setCounts((prev) => ({ ...prev, [id]: count }));
  };

  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClicked={handleClicked}
          />
        </li>
      ))}
    </ul>
  );
}
