"use client";

import { useAfterHero } from "@/components/landing/use-after-hero";

export default function ChatbotFloatingButton() {
  const isVisible = useAfterHero();

  return (
    <button
      type="button"
      disabled
      aria-label="Chatbot coming soon"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Chatbot coming soon"
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)_+_84px)] right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-[50%_14%_50%_50%] bg-[#d70900] text-white shadow-lg transition-[translate] duration-1000 ease-in-out motion-reduce:transition-none max-[360px]:right-3 lg:bottom-[92px] lg:right-6 ${
        isVisible
          ? "translate-x-0"
          : "pointer-events-none translate-x-[calc(100%_+_40px)]"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 28 22"
        className="h-6 w-6"
        fill="none"
      >
        <rect x="1" y="1" width="26" height="20" rx="6" fill="currentColor" />
        <path
          d="M7 8h14M7 13h10"
          stroke="#d70900"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
