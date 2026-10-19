"use client";

import { useEffect, useState } from "react";

export function useAfterHero() {
  const [hasPassedHero, setHasPassedHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero || !("IntersectionObserver" in window)) {
      setHasPassedHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHasPassedHero(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return hasPassedHero;
}
