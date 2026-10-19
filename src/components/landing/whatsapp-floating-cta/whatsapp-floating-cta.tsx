"use client";

import { useAfterHero } from "@/components/landing/use-after-hero";

type WhatsAppFloatingCtaProps = {
  phoneNumber?: string;
};

const defaultMessage = encodeURIComponent(
  "Hello, I would like to learn more about the Mjasiriamali Special Pack."
);

export default function WhatsAppFloatingCta({
  phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "255756121995",
}: WhatsAppFloatingCtaProps) {
  const isVisible = useAfterHero();
  const normalizedNumber = phoneNumber?.replace(/\D/g, "");
  const href = normalizedNumber
    ? `https://wa.me/${normalizedNumber}?text=${defaultMessage}`
    : `https://wa.me/?text=${defaultMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)_+_16px)] right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-[translate] duration-1000 ease-in-out hover:bg-[#128C7E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 motion-reduce:transition-none max-[360px]:right-3 lg:bottom-6 lg:right-0 ${
        isVisible
          ? "translate-x-0"
          : "pointer-events-none translate-x-[calc(100%_+_40px)]"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.42 0 .03 5.39.03 12.01c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.61a11.93 11.93 0 0 0 5.9 1.5h.01c6.62 0 12.01-5.39 12.01-12.01 0-3.21-1.25-6.23-3.54-8.4zM12.04 21.9h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.64.96.97-3.55-.23-.37a9.91 9.91 0 1 1 8.33 4.56zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.59-.49-.51-.67-.52h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
