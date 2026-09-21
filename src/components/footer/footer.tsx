import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    { label: "Branding", href: "/services/branding" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Creative Content", href: "/services/creative-content" },
    { label: "Business Support", href: "/services/business-support" },
  ],

  resources: [
    { label: "Business Growth Center", href: "/knowledge" },
    { label: "Insights", href: "/insights" },
    { label: "FAQs", href: "/faqs" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A2A2A] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:gap-10">
          {/* Introduction */}
          <div className="max-w-[360px]">
            <p className="max-w-[330px] text-sm leading-[1.8] text-neutral-400">
              Practical digital solutions that help businesses build stronger
              brands, improve their presence, and grow with confidence.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white
                transition-colors
                duration-200
                hover:text-[#E30404]
              "
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>

            {/* Social Media */}
            <div className="mt-8 flex items-center gap-2">
              <SocialLink
                href="https://www.linkedin.com/"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink
                href="https://www.behance.net/"
                label="Behance"
              >
                <BehanceIcon />
              </SocialLink>
            </div>
          </div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={footerLinks.services}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={footerLinks.resources}
          />
        </div>

        {/* Contact Information */}
        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <ContactItem
              label="Email"
              value="info@dilipoint.co.tz"
              href="mailto:info@dilipoint.co.tz"
            />

            <ContactItem
              label="Phone"
              value="+255 000 000 000"
              href="tel:+255000000000"
            />

            <ContactItem
              label="Location"
              value="Dar es Salaam, Tanzania"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1280px]
            flex-col
            gap-4
            px-5
            py-5
            text-xs
            text-neutral-500
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-10
          "
        >
          <p>
            © {new Date().getFullYear()} Dilipoint Co. Ltd. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-neutral-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-neutral-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h3
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-neutral-400
        "
      >
        {title}
      </h3>

      <nav className="mt-5 space-y-3" aria-label={title}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              block
              text-sm
              text-neutral-300
              transition-colors
              duration-200
              hover:text-white
            "
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span
      className="
        mt-2
        block
        text-sm
        text-neutral-300
        transition-colors
        duration-200
        hover:text-white
      "
    >
      {value}
    </span>
  );

  return (
    <div>
      <p
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-neutral-500
        "
      >
        {label}
      </p>

      {href ? <a href={href}>{content}</a> : content}
    </div>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        border
        border-white/15
        text-neutral-300
        transition-all
        duration-200
        hover:border-[#E30404]
        hover:bg-[#E30404]
        hover:text-white
      "
    >
      {children}
    </a>
  );
}

/* =========================================================
   SOCIAL ICONS
========================================================= */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-current"
    >
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.05c.47-.9 1.62-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.32h-3.6v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69H9.2V9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[16px] w-[16px] fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.4"
        cy="6.7"
        r="0.8"
        className="fill-current stroke-none"
      />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[16px] w-[16px] fill-current"
    >
      <path d="M9.7 11.4c.9-.45 1.5-1.3 1.5-2.4 0-2.1-1.7-3.4-4.2-3.4H2.5v12.8h4.8c2.7 0 4.6-1.35 4.6-3.7 0-1.55-.82-2.75-2.2-3.3ZM5.4 8.1h1.4c1.15 0 1.75.42 1.75 1.25 0 .85-.65 1.3-1.8 1.3H5.4V8.1Zm1.65 8H5.4v-3.25h1.7c1.3 0 2 .52 2 1.58 0 1.1-.68 1.67-2.05 1.67ZM18.3 9.05c-3.05 0-5.1 2.05-5.1 4.9 0 2.85 2.02 4.8 5.2 4.8 2.25 0 3.9-.98 4.65-2.7l-2.75-.8c-.37.78-1.02 1.18-1.9 1.18-1.1 0-1.83-.67-1.95-1.78h6.8v-.75c0-2.9-1.9-4.85-4.95-4.85Zm-1.82 3.75c.18-.95.82-1.5 1.82-1.5.97 0 1.6.55 1.72 1.5h-3.54ZM16.4 6.2h4.2v1.15h-4.2V6.2Z" />
    </svg>
  );
}