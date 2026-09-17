"use client";

import { useMemo, useSyncExternalStore } from "react";

interface Dot {
  key: number;
  size: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
}

const DOT_COUNT = 30;

function createDots(): Dot[] {
  return Array.from({ length: DOT_COUNT }, (_, key) => ({
    key,
    size: Math.random() * 8 + 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.35 + 0.15,
    duration: Math.random() * 12 + 12,
    delay: Math.random() * -20,
  }));
}

function subscribeNoop() {
  return () => {};
}

// 서버 렌더링과 항상 일치하도록 첫 렌더는 false, 하이드레이션 이후에만 true를 반환한다.
function useIsClient() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

export function FloatingDots() {
  const isClient = useIsClient();
  const dots = useMemo(() => (isClient ? createDots() : []), [isClient]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <span
          key={dot.key}
          className="absolute animate-float-dot rounded-full bg-sky-500"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            opacity: dot.opacity,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
