"use client";

import { useEffect, useState } from "react";

const HERO_HIDE_BUFFER = 140;

export function useAfterHero() {
  const [hasPassedHero, setHasPassedHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setHasPassedHero(true);
      return;
    }

    const heroDocumentBottom = () =>
      hero.getBoundingClientRect().bottom + window.scrollY;

    const updateVisibility = () => {
      const heroBottom = heroDocumentBottom();
      setHasPassedHero((visible) => {
        if (visible) return window.scrollY >= heroBottom - HERO_HIDE_BUFFER;
        return window.scrollY > heroBottom;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return hasPassedHero;
}