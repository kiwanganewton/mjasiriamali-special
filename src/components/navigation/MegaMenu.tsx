"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Target,
  Workflow,
  Palette,
  Globe,
  Megaphone,
  Video,
  Lightbulb,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  BookOpen,
  Sparkles,
  Layers,
  Mail,
  Building2,
  Users,
  TrendingUp,
  FileText,
  Settings2,
  Code2,
  PenTool,
  type LucideIcon,
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

const productPromotions: Record<
  string,
  {
    image: string;
    label: string;
    title: string;
    description: string;
    href: string;
  }
> = {
  Mjasiriamali: {
    image: featuredProduct.image,
    label: featuredProduct.label,
    title: featuredProduct.title,
    description: featuredProduct.description,
    href: featuredProduct.href,
  },

  Jiases: {
    image: "/images/products/jiases.webp",
    label: "JIASES",
    title: "Jiases",
    description:
      "A practical digital solution designed to help businesses manage and grow more effectively.",
    href: "/products/jiases",
  },
};

function getMenuIcon(title: string): LucideIcon {
  const value = title.toLowerCase();

  if (
    value.includes("campaign") ||
    value.includes("performance marketing") ||
    value.includes("advertising") ||
    value.includes("paid acquisition")
  ) {
    return Target;
  }

  if (
    value.includes("automation") ||
    value.includes("revenue operations") ||
    value.includes("workflow") ||
    value.includes("lead management")
  ) {
    return Workflow;
  }

  if (
    value.includes("generative engine") ||
    value.includes("seo") ||
    value.includes("search visibility") ||
    value.includes("search optimization")
  ) {
    return Search;
  }

  if (
    value.includes("branding") ||
    value.includes("brand identity")
  ) {
    return Palette;
  }

  if (
    value.includes("website") ||
    value.includes("web design") ||
    value.includes("web development")
  ) {
    return Globe;
  }

  if (
    value.includes("social media") ||
    value.includes("content marketing")
  ) {
    return Megaphone;
  }

  if (
    value.includes("video") ||
    value.includes("creator") ||
    value.includes("production")
  ) {
    return Video;
  }

  if (
    value.includes("consultation") ||
    value.includes("strategy") ||
    value.includes("strategic")
  ) {
    return Lightbulb;
  }

  if (
    value.includes("company profile") ||
    value.includes("business profile")
  ) {
    return Building2;
  }

  if (value.includes("email")) {
    return Mail;
  }

  if (
    value.includes("graphic design") ||
    value.includes("design") ||
    value.includes("creative")
  ) {
    return PenTool;
  }

  if (
    value.includes("copywriting") ||
    value.includes("writing")
  ) {
    return FileText;
  }

  if (
    value.includes("growth") ||
    value.includes("sales") ||
    value.includes("revenue")
  ) {
    return TrendingUp;
  }

  if (
    value.includes("customer") ||
    value.includes("community") ||
    value.includes("team")
  ) {
    return Users;
  }

  if (
    value.includes("digital solution") ||
    value.includes("platform") ||
    value.includes("system")
  ) {
    return Settings2;
  }

  if (
    value.includes("software") ||
    value.includes("development") ||
    value.includes("technology")
  ) {
    return Code2;
  }

  if (value.includes("product")) {
    return Layers;
  }

  if (
    value.includes("knowledge") ||
    value.includes("learning") ||
    value.includes("business growth center") ||
    value.includes("resource")
  ) {
    return BookOpen;
  }

  if (
    value.includes("ai") ||
    value.includes("intelligence")
  ) {
    return Sparkles;
  }

  if (
    value.includes("business") ||
    value.includes("professional")
  ) {
    return BriefcaseBusiness;
  }

  if (value.includes("marketing")) {
    return ChartNoAxesCombined;
  }

  return Layers;
}

function MenuItem({
  item,
  onHover,
}: {
  item: MegaMenuItem;
  onHover: () => void;
}) {
  const ItemIcon = getMenuIcon(item.title);

  return (
    <Link
      href={item.href}
      onMouseEnter={onHover}
      className="
        group
        block
        border-b
        border-neutral-100
        py-5
        last:border-b-0
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-neutral-400
        focus-visible:ring-offset-2
      "
    >
      <div className="flex items-start gap-4">
        {item.number ? (
          <span
            className="
              w-7
              shrink-0
              pt-1
              text-xs
              font-normal
              tracking-wide
              text-neutral-400
            "
          >
            {item.number}
          </span>
        ) : (
          <ItemIcon
            size={19}
            strokeWidth={1.5}
            aria-hidden="true"
            className="
              mt-1
              shrink-0
              text-neutral-500
              transition-colors
              duration-200
              group-hover:text-neutral-800
            "
          />
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="
                heading-ui
                text-neutral-800
                transition-colors
                duration-200
                group-hover:text-neutral-950
              "
            >
              {item.title}
            </h3>

            <ArrowRight
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="
                mt-1
                shrink-0
                translate-x-0
                text-neutral-400
                opacity-0
                transition-all
                duration-200
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            />
          </div>

          <p
            className="
              mt-1.5
              max-w-[560px]
              text-sm
              font-normal
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

  const [hoveredProduct, setHoveredProduct] =
    useState<string>("Mjasiriamali");

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
      document.addEventListener(
        "mousedown",
        handleOutsideClick
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
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
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [activeMenu, onMenuChange]);

  if (!activeMenu) {
    return null;
  }

  const activeProduct =
    productPromotions[hoveredProduct] ??
    productPromotions.Mjasiriamali;

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
        shadow-[0_16px_40px_rgba(0,0,0,0.06)]
        animate-in
        fade-in
        slide-in-from-top-2
        duration-200
      "
    >
      {activeMenu === "services" && (
        <div className="px-8 py-8 lg:px-10 lg:py-9">
          <div className="mb-7">
            <p className="text-sm font-normal leading-6 text-neutral-500">
              Digital services built to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12">
            {servicesMenu.map((item) => (
              <MenuItem
                key={item.title}
                item={item}
                onHover={() => {}}
              />
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
                font-medium
                text-neutral-800
                transition-colors
                duration-200
                hover:text-neutral-950
              "
            >
              View all services

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
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

      {activeMenu === "products" && (
        <div className="grid grid-cols-[1.9fr_1fr]">
          <div className="px-8 py-8 lg:px-10 lg:py-9">
            <div className="mb-7">
              <p className="text-sm font-normal leading-6 text-neutral-500">
                Business solutions designed for practical growth.
              </p>
            </div>

            <div>
              {productsMenu.map((item) => (
                <MenuItem
                  key={item.title}
                  item={item}
                  onHover={() => {
                    setHoveredProduct(item.title);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="border-l border-neutral-200 bg-neutral-50 p-5">
            <div className="flex h-full flex-col border border-neutral-200 bg-white">
              <div className="relative aspect-[1.35/1] overflow-hidden bg-neutral-100">
                <img
                  key={activeProduct.image}
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-opacity
                    duration-300
                  "
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-medium tracking-[0.14em] text-neutral-500">
                  {activeProduct.label}
                </p>

                <h3
                  key={activeProduct.title}
                  className="
                    heading-ui
                    mt-2
                    text-neutral-800
                    animate-in
                    fade-in
                    duration-200
                  "
                >
                  {activeProduct.title}
                </h3>

                <p
                  key={activeProduct.description}
                  className="
                    mt-2
                    text-sm
                    font-normal
                    leading-[1.7]
                    text-neutral-500
                    animate-in
                    fade-in
                    duration-200
                  "
                >
                  {activeProduct.description}
                </p>

                <Link
                  href={activeProduct.href}
                  className="
                    group
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-6
                    text-sm
                    font-medium
                    text-neutral-800
                    transition-colors
                    duration-200
                    hover:text-neutral-950
                  "
                >
                  Explore

                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
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

      {activeMenu === "knowledge" && (
        <div className="px-8 py-8 lg:px-10 lg:py-9">
          <div className="mb-7">
            <p className="text-sm font-normal leading-6 text-neutral-500">
              Practical insights for building and growing better businesses.
            </p>
          </div>

          <div className="max-w-[720px] border-t border-neutral-200 pt-6">
            <p className="text-[11px] font-medium tracking-[0.14em] text-neutral-400">
              BUSINESS GROWTH CENTER
            </p>

            <Link
              href={knowledgeMenu.href}
              className="group mt-4 block"
            >
              <div className="flex items-start gap-4">
                <BookOpen
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="
                    mt-1
                    shrink-0
                    text-neutral-500
                    transition-colors
                    duration-200
                    group-hover:text-neutral-800
                  "
                />

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-5">
                    <h3
                      className="
                        heading-ui
                        text-neutral-800
                        transition-colors
                        duration-200
                        group-hover:text-neutral-950
                      "
                    >
                      {knowledgeMenu.title}
                    </h3>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="
                        mt-1
                        shrink-0
                        text-neutral-400
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                  <p className="mt-2 max-w-[650px] text-sm font-normal leading-[1.7] text-neutral-500">
                    {knowledgeMenu.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-7 border-t border-neutral-200 pt-6">
            <p className="text-[11px] font-medium tracking-[0.14em] text-neutral-400">
              EXPLORE
            </p>

            <Link
              href={knowledgeMenu.href}
              className="
                group
                mt-4
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-neutral-800
                transition-colors
                duration-200
                hover:text-neutral-950
              "
            >
              Explore Business Growth Center

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
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
