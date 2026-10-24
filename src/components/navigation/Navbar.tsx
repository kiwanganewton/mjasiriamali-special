"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import AssessmentModal from "@/components/assessment/AssessmentModal";

const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Pack Features", href: "#pack-features" },
  { label: "Add-on Services", href: "#addon-services" },
  { label: "Fit Check", href: "#fit-check" },
];

const navLinkClass =
  "py-2 text-[14px] font-medium text-neutral-800 transition-colors duration-200 hover:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="relative z-[100] bg-white [font-family:Arial,Helvetica,sans-serif]">
        <div className="relative mx-auto flex h-[76px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:h-[80px] lg:px-8">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
            aria-label="Dilipoint home"
          >
            <img
              src="/images/Logo0001.png"
              alt="Dilipoint"
              className="h-auto w-[145px] sm:w-[150px] lg:w-[165px]"
            />
          </Link>

          <nav
            className="absolute left-[44%] hidden -translate-x-1/2 items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass}
                onClick={(event) => {
                  if (link.href === "#fit-check") {
                    event.preventDefault();
                    setIsAssessmentOpen(true);
                  }
                  closeMobileMenu();
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <Link
              href="#contact-form"
              className="inline-flex h-10 items-center justify-center px-2 text-[13px] font-medium text-neutral-900 transition-colors duration-200 hover:text-neutral-600"
            >
              Contact Sales
            </Link>

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center text-neutral-700 transition-colors duration-200 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2"
            >
              <Search size={20} strokeWidth={1.7} />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen(true);
                closeMobileMenu();
              }}
              aria-label="Search"
              className="flex h-11 w-11 items-center justify-center text-neutral-800 transition-colors duration-200 hover:text-neutral-900 focus:outline-none"
            >
              <Search size={21} strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center text-neutral-800 transition-colors duration-200 hover:text-neutral-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={23} strokeWidth={1.7} /> : <Menu size={23} strokeWidth={1.7} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[90] transition-all duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="absolute inset-0 bg-black/10"
        />

        <div
          className={`absolute left-0 right-0 top-[77px] max-h-[calc(100vh-77px)] overflow-y-auto border-b border-neutral-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav
            className="mx-auto w-full max-w-[1240px] px-5 pb-6 sm:px-6"
            aria-label="Mobile navigation"
          >
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  if (link.href === "#fit-check") {
                    event.preventDefault();
                    setIsAssessmentOpen(true);
                  }
                  closeMobileMenu();
                }}
                className="block border-b border-neutral-200 py-5 text-[15px] font-medium text-neutral-900"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact-form"
              onClick={closeMobileMenu}
              className="mt-5 flex h-11 items-center justify-center border border-neutral-300 text-[14px] font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              Contact Sales
            </Link>
          </nav>
        </div>
      </div>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />
    </>
  );
}
