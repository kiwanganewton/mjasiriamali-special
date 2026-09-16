"use client";

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        bg-black/20
        px-5
        pt-20
        lg:pt-28
      "
      onMouseDown={onClose}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[900px]
          border
          border-neutral-200
          bg-white
          shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        "
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center border-b border-neutral-200">
          <Search
            size={20}
            strokeWidth={1.7}
            className="ml-5 shrink-0 text-neutral-400"
          />

          <input
            ref={inputRef}
            type="search"
            placeholder="Search Dilipoint..."
            className="
              h-[68px]
              min-w-0
              flex-1
              border-0
              bg-transparent
              px-4
              text-base
              text-neutral-900
              outline-none
              placeholder:text-neutral-400
            "
            aria-label="Search Dilipoint"
          />

          <button
            type="button"
            onClick={onClose}
            className="
              mr-4
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              text-neutral-500
              transition-colors
              hover:text-[#E30404]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E30404]
            "
            aria-label="Close search"
          >
            <X size={19} strokeWidth={1.7} />
          </button>
        </div>

        <div className="px-6 py-6">
          <p
            className="
              text-xs
              font-semibold
              tracking-[0.14em]
              text-neutral-400
            "
          >
            SEARCH
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            Search services, products, knowledge, careers and
            website pages.
          </p>
        </div>
      </div>
    </div>
  );
}