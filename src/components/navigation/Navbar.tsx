"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

import MegaMenu from "./MegaMenu";
import SearchOverlay from "./SearchOverlay";

type ActiveMenu = "services" | "products" | "knowledge" | null;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mobileOpenSection, setMobileOpenSection] = useState<
    "services" | "products" | "knowledge" | null
  >(null);

  const toggleDesktopMenu = (menu: ActiveMenu) => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

  const toggleMobileSection = (
    section: "services" | "products" | "knowledge"
  ) => {
    setMobileOpenSection((current) =>
      current === section ? null : section
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenSection(null);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsSearchOpen(false);
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
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
      <header className="relative z-[100] border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-[76px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:h-[80px] lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => {
              setActiveMenu(null);
              closeMobileMenu();
            }}
            className="flex shrink-0 items-center"
            aria-label="Dilipoint home"
          >
            <img
              src="/images/Logo01.png"
              alt="Dilipoint"
              className="h-auto w-[145px] sm:w-[150px] lg:w-[165px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden items-center gap-8 lg:ml-10 lg:flex xl:ml-14"
            aria-label="Main navigation"
          >
            {/* SERVICES */}
            <button
              type="button"
              onMouseEnter={() => setActiveMenu("services")}
              onClick={() => toggleDesktopMenu("services")}
              aria-expanded={activeMenu === "services"}
              aria-controls="desktop-mega-menu"
              className="
                group
                relative
                flex
                items-center
                gap-1.5
                py-2
                text-[14px]
                font-medium
                text-neutral-800
                transition-all
                duration-200
                hover:underline
                underline-offset-4
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-300
                focus-visible:ring-offset-2
              "
            >
              Services

              <ChevronDown
                size={15}
                strokeWidth={1.7}
                className={`
                  transition-transform
                  duration-300
                  ease-out
                  ${
                    activeMenu === "services"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* PRODUCTS */}
            <button
              type="button"
              onMouseEnter={() => setActiveMenu("products")}
              onClick={() => toggleDesktopMenu("products")}
              aria-expanded={activeMenu === "products"}
              aria-controls="desktop-mega-menu"
              className="
                group
                relative
                flex
                items-center
                gap-1.5
                py-2
                text-[14px]
                font-medium
                text-neutral-800
                transition-all
                duration-200
                hover:underline
                underline-offset-4
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-300
                focus-visible:ring-offset-2
              "
            >
              Products

              <ChevronDown
                size={15}
                strokeWidth={1.7}
                className={`
                  transition-transform
                  duration-300
                  ease-out
                  ${
                    activeMenu === "products"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>



            {/* ABOUT US */}
            <Link
              href="/about"
              className="
                py-2
                text-[14px]
                font-medium
                text-neutral-800
                transition-all
                duration-200
                hover:underline
                underline-offset-4
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-300
                focus-visible:ring-offset-2
              "
            >
              About Us
            </Link>



            {/* KNOWLEDGE */}
            <button
              type="button"
              onMouseEnter={() => setActiveMenu("knowledge")}
              onClick={() => toggleDesktopMenu("knowledge")}
              aria-expanded={activeMenu === "knowledge"}
              aria-controls="desktop-mega-menu"
              className="
                group
                relative
                flex
                items-center
                gap-1.5
                py-2
                text-[14px]
                font-medium
                text-neutral-800
                transition-all
                duration-200
                hover:underline
                underline-offset-4
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-300
                focus-visible:ring-offset-2
              "
            >
              Knowledge

              <ChevronDown
                size={15}
                strokeWidth={1.7}
                className={`
                  transition-transform
                  duration-300
                  ease-out
                  ${
                    activeMenu === "knowledge"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* CAREERS */}
            <Link
              href="/careers"
              onClick={() => setActiveMenu(null)}
              className="
                py-2
                text-[14px]
                font-medium
                text-neutral-800
                transition-all
                duration-200
                hover:underline
                underline-offset-4
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-300
                focus-visible:ring-offset-2
              "
            >
              Careers
            </Link>
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="ml-auto hidden items-center gap-5 lg:flex">

{/* CONTACT SALES */}
<Link
  href="/contact"
  onClick={() => setActiveMenu(null)}
  className="
    inline-flex
    h-10
    items-center
    justify-center
    px-2
    text-[13px]
    font-medium
    text-neutral-900
    transition-colors
    duration-200
    hover:text-neutral-600
  "
>
  Contact Sales
</Link>

            {/* SEARCH */}
            <button
              type="button"
              onClick={() => {
                setActiveMenu(null);
                setIsSearchOpen(true);
              }}
              aria-label="Search"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                text-neutral-700
                transition-all
                duration-200
                hover:text-neutral-900
                hover:underline
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-300
                focus-visible:ring-offset-2
              "
            >
              <Search size={20} strokeWidth={1.7} />
            </button>
          </div>

          {/* MOBILE / TABLET ACTIONS */}
          <div className="flex items-center gap-1 lg:hidden">

            {/* SEARCH */}
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen(true);
                closeMobileMenu();
              }}
              aria-label="Search"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                text-neutral-800
                transition-colors
                duration-200
                hover:text-neutral-900
                focus:outline-none
              "
            >
              <Search size={21} strokeWidth={1.7} />
            </button>

            {/* MENU */}
            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((current) => !current)
              }
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                text-neutral-800
                transition-colors
                duration-200
                hover:text-neutral-900
                focus:outline-none
              "
            >
              {isMobileMenuOpen ? (
                <X size={23} strokeWidth={1.7} />
              ) : (
                <Menu size={23} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>

        {/* DESKTOP MEGA MENU */}
        <div
          id="desktop-mega-menu"
          className={`
            hidden
            lg:block
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${
              activeMenu
                ? "visible max-h-[900px] opacity-100"
                : "pointer-events-none invisible max-h-0 opacity-0"
            }
          `}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <MegaMenu
            activeMenu={activeMenu}
            onMenuChange={setActiveMenu}
          />
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          inset-0
          z-[90]
          lg:hidden
          transition-all
          duration-300
          ease-out
          ${
            isMobileMenuOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >
        {/* BACKDROP */}
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="absolute inset-0 bg-black/10"
        />

        {/* PANEL */}
        <div
          className={`
            absolute
            left-0
            right-0
            top-[77px]
            max-h-[calc(100vh-77px)]
            overflow-y-auto
            border-b
            border-neutral-200
            bg-white
            shadow-[0_12px_30px_rgba(0,0,0,0.08)]
            transition-all
            duration-300
            ease-out
            ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }
          `}
        >
          <nav
            className="mx-auto w-full max-w-[1240px] px-5 pb-6 sm:px-6"
            aria-label="Mobile navigation"
          >

            {/* SERVICES */}
            <div className="border-b border-neutral-200">
              <button
                type="button"
                onClick={() => toggleMobileSection("services")}
                aria-expanded={
                  mobileOpenSection === "services"
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                  text-[15px]
                  font-medium
                  text-neutral-900
                "
              >
                <span>Services</span>

                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      mobileOpenSection === "services"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ease-out
                  ${
                    mobileOpenSection === "services"
                      ? "max-h-[700px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="pb-4">
                  <Link
                    href="/services/consultation-digital-strategy"
                    onClick={closeMobileMenu}
                    className="block border-t border-neutral-100 py-4"
                  >
                    <span className="block text-[14px] font-medium text-neutral-900">
                      Consultation & Digital Strategy
                    </span>
                    <span className="mt-1 block text-[13px] leading-5 text-neutral-500">
                      Clear direction before execution.
                    </span>
                  </Link>

                  <Link
                    href="/services/content-marketing-copywriting"
                    onClick={closeMobileMenu}
                    className="block border-t border-neutral-100 py-4"
                  >
                    <span className="block text-[14px] font-medium text-neutral-900">
                      Content Marketing & Copywriting
                    </span>
                    <span className="mt-1 block text-[13px] leading-5 text-neutral-500">
                      Content that communicates clearly,
                      builds trust and moves audiences to action.
                    </span>
                  </Link>

                  <Link
                    href="/services/performance-marketing"
                    onClick={closeMobileMenu}
                    className="block border-t border-neutral-100 py-4"
                  >
                    <span className="block text-[14px] font-medium text-neutral-900">
                      Performance Marketing
                    </span>
                    <span className="mt-1 block text-[13px] leading-5 text-neutral-500">
                      Paid Ads Strategy & Management.
                    </span>
                  </Link>

                  <Link
                    href="/services/hyper-personalization"
                    onClick={closeMobileMenu}
                    className="block border-t border-neutral-100 py-4"
                  >
                    <span className="block text-[14px] font-medium text-neutral-900">
                      Hyper-Personalization Architecture &
                      Integration
                    </span>
                    <span className="mt-1 block text-[13px] leading-5 text-neutral-500">
                      Connect customer data, systems and automation.
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="
                      mt-2
                      inline-block
                      text-[13px]
                      font-medium
                      text-neutral-700
                      underline
                      underline-offset-4
                    "
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="border-b border-neutral-200">
              <button
                type="button"
                onClick={() => toggleMobileSection("products")}
                aria-expanded={
                  mobileOpenSection === "products"
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                  text-[15px]
                  font-medium
                  text-neutral-900
                "
              >
                <span>Products</span>

                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      mobileOpenSection === "products"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ease-out
                  ${
                    mobileOpenSection === "products"
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="pb-4">
                  <Link
                    href="/products/mjasiriamali-special-pack"
                    onClick={closeMobileMenu}
                    className="block border-t border-neutral-100 py-4"
                  >
                    <span className="block text-[14px] font-medium text-neutral-900">
                      Mjasiriamali Special Pack
                    </span>
                    <span className="mt-1 block text-[13px] leading-5 text-neutral-500">
                      Consistent marketing support for growing businesses.
                    </span>
                  </Link>

                  <Link
                    href="/products/jiases"
                    onClick={closeMobileMenu}
                    className="block border-t border-neutral-100 py-4"
                  >
                    <span className="block text-[14px] font-medium text-neutral-900">
                      Jiases
                    </span>
                  </Link>
                </div>
              </div>
            </div>


{/* ABOUT US */}
<Link
  href="/about"
  onClick={closeMobileMenu}
  className="
    block
    border-b
    border-neutral-200
    py-5
    text-[15px]
    font-medium
    text-neutral-900
  "
>
  About Us
</Link>



            {/* KNOWLEDGE */}
            <div className="border-b border-neutral-200">
              <button
                type="button"
                onClick={() =>
                  toggleMobileSection("knowledge")
                }
                aria-expanded={
                  mobileOpenSection === "knowledge"
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                  text-[15px]
                  font-medium
                  text-neutral-900
                "
              >
                <span>Knowledge</span>

                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      mobileOpenSection === "knowledge"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ease-out
                  ${
                    mobileOpenSection === "knowledge"
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="pb-5">
                  <p className="border-t border-neutral-100 pt-4 text-[13px] leading-5 text-neutral-500">
                    Practical marketing, business and growth
                    insights designed to help business owners
                    make better decisions.
                  </p>

                  <Link
                    href="/business-growth-center"
                    onClick={closeMobileMenu}
                    className="
                      mt-4
                      inline-block
                      text-[13px]
                      font-medium
                      text-neutral-700
                      underline
                      underline-offset-4
                    "
                  >
                    Explore Business Growth Center
                  </Link>
                </div>
              </div>
            </div>



            {/* CAREERS */}
            <Link
              href="/careers"
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-neutral-200
                py-5
                text-[15px]
                font-medium
                text-neutral-900
              "
            >
              Careers
            </Link>

            {/* CONTACT SALES */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="
                mt-5
                flex
                h-11
                items-center
                justify-center
                border
                border-neutral-300
                text-[14px]
                font-medium
                text-neutral-900
                transition-all
                duration-200
                hover:border-neutral-900
                hover:bg-neutral-900
                hover:text-white
              "
            >
              Contact Sales
            </Link>
          </nav>
        </div>
      </div>

      {/* SEARCH */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}