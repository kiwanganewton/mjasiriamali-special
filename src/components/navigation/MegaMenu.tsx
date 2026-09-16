"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  featuredProduct,
  knowledgeMenu,
  productsMenu,
  servicesMenu,
  type MegaMenuItem,
} from "./mega-menu.config";

type MegaMenuType = "services" | "products" | "knowledge" | null;

type MegaMenuProps = {
  activeMenu: MegaMenuType;
  onMenuChange: (menu: MegaMenuType) => void;
};

function MenuItem({
  item,
}: {
  item: MegaMenuItem;
}) {
  return (
    <Link
      href={item.href}
      className="
        group
        block
        border-b
        border-neutral-100
        py-5
        last:border-b-0
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#E30404]
        focus-visible:ring-offset-2
      "
    >
      <div className="flex gap-5">
        {item.number && (
          <span
            className="
              w-7
              shrink-0
              pt-1
              text-xs
              font-medium
              tracking-wide
              text-[#E30404]
            "
          >
            {item.number}
          </span>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-5">
            <h3
              className="
                text-[15px]
                font-semibold
                leading-6
                text-neutral-900
                transition-colors
                duration-200
                group-hover:text-[#E30404]
              "
            >
              {item.title}
            </h3>

            <ArrowRight
              size={17}
              strokeWidth={1.6}
              className="
                mt-1
                shrink-0
                translate-x-0
                text-neutral-300
                opacity-0
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:text-[#E30404]
                group-hover:opacity-100
              "
            />
          </div>

          <p
            className="
              mt-1.5
              max-w-[560px]
              text-sm
              leading-[1.7]
              text-neutral-500
            "
          >
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function MegaMenu({
  activeMenu,
  onMenuChange,
}: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onMenuChange(null);
      }
    }

    if (activeMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeMenu, onMenuChange]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onMenuChange(null);
      }
    }

    if (activeMenu) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeMenu, onMenuChange]);

  if (!activeMenu) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="
        absolute
        left-1/2
        top-full
        z-[80]
        w-[calc(100%-32px)]
        max-w-[1240px]
        -translate-x-1/2
        border
        border-neutral-200
        bg-white
        shadow-[0_18px_45px_rgba(0,0,0,0.08)]
        animate-in
        fade-in
        slide-in-from-top-2
        duration-200
      "
    >
      {/* SERVICES */}
      {activeMenu === "services" && (
        <div className="px-8 py-8 lg:px-10 lg:py-9">
          <div className="mb-7">
            <p
              className="
                text-xs
                font-semibold
                tracking-[0.16em]
                text-[#E30404]
              "
            >
              SERVICES
            </p>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-neutral-500
              "
            >
              Strategic services designed around business growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12">
            {servicesMenu.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-7 border-t border-neutral-200 pt-5">
            <Link
              href="/services"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-neutral-900
                transition-colors
                hover:text-[#E30404]
              "
            >
              View all services
              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      {activeMenu === "products" && (
        <div className="grid grid-cols-[1.9fr_1fr]">
          <div className="px-8 py-8 lg:px-10 lg:py-9">
            <div className="mb-7">
              <p
                className="
                  text-xs
                  font-semibold
                  tracking-[0.16em]
                  text-[#E30404]
                "
              >
                PRODUCTS
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >
                Business solutions designed for practical growth.
              </p>
            </div>

            <div>
              {productsMenu.map((item) => (
                <MenuItem key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* FEATURED PRODUCT */}
          <div className="border-l border-neutral-200 bg-[#F7F7F7] p-5">
            <div className="flex h-full flex-col border border-neutral-200 bg-white">
              <div className="relative aspect-[1.35/1] overflow-hidden bg-neutral-100">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.16em]
                    text-[#E30404]
                  "
                >
                  {featuredProduct.label}
                </p>

                <h3
                  className="
                    mt-2
                    text-base
                    font-semibold
                    text-neutral-900
                  "
                >
                  {featuredProduct.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-[1.7]
                    text-neutral-500
                  "
                >
                  {featuredProduct.description}
                </p>

                <Link
                  href={featuredProduct.href}
                  className="
                    group
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-6
                    text-sm
                    font-semibold
                    text-neutral-900
                    hover:text-[#E30404]
                  "
                >
                  Explore
                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* KNOWLEDGE */}
      {activeMenu === "knowledge" && (
        <div className="px-8 py-8 lg:px-10 lg:py-9">
          <div className="mb-7">
            <p
              className="
                text-xs
                font-semibold
                tracking-[0.16em]
                text-[#E30404]
              "
            >
              KNOWLEDGE
            </p>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-neutral-500
              "
            >
              Practical insights for building and growing better businesses.
            </p>
          </div>

          <div
            className="
              max-w-[720px]
              border-t
              border-neutral-200
              pt-6
            "
          >
            <p
              className="
                text-[11px]
                font-semibold
                tracking-[0.15em]
                text-neutral-400
              "
            >
              BUSINESS GROWTH CENTER
            </p>

            <Link
              href={knowledgeMenu.href}
              className="group mt-3 block"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-neutral-900
                      transition-colors
                      group-hover:text-[#E30404]
                    "
                  >
                    {knowledgeMenu.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[650px]
                      text-sm
                      leading-[1.7]
                      text-neutral-500
                    "
                  >
                    {knowledgeMenu.description}
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="
                    mt-1
                    shrink-0
                    text-neutral-400
                    transition-all
                    duration-200
                    group-hover:translate-x-1
                    group-hover:text-[#E30404]
                  "
                />
              </div>
            </Link>
          </div>

          <div className="mt-7 border-t border-neutral-200 pt-6">
            <p
              className="
                text-[11px]
                font-semibold
                tracking-[0.15em]
                text-neutral-400
              "
            >
              EXPLORE
            </p>

            <Link
              href={knowledgeMenu.href}
              className="
                group
                mt-3
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-neutral-900
                hover:text-[#E30404]
              "
            >
              Explore Business Growth Center
              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}