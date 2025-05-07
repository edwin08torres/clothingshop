// src/shared/hooks/useBreakpoint.ts
import { useEffect, useState } from "react";

export const useBreakpoint = (bp: "sm" | "md" | "lg") => {
  const query =
    bp === "md"
      ? "(min-width: 768px)"
      : bp === "lg"
      ? "(min-width: 1024px)"
      : "(min-width: 640px)";

  const [match, setMatch] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatch(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return match;
};
