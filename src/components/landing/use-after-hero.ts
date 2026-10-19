"use client";

import { useEffect, useState } from "react";

export function useAfterHero() {
  const [hasPassedHero, setHasPassedHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setHasPassedHero(true);
      return;
    }

    let previousScrollY = window.scrollY;
    const heroDocumentBottom = () =>
      hero.getBoundingClientRect().bottom + window.scrollY;

    setHasPassedHero(previousScrollY > heroDocumentBottom());

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY) {
        setHasPassedHero(currentScrollY > heroDocumentBottom());
      } else if (currentScrollY < previousScrollY) {
        setHasPassedHero(false);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return hasPassedHero;
}
