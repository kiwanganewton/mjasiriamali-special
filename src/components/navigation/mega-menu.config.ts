export type MegaMenuItem = {
  number?: string;
  title: string;
  description: string;
  href: string;
};

export const servicesMenu: MegaMenuItem[] = [
  {
    number: "01",
    title: "Consultation & Digital Strategy",
    description: "Clear direction before execution.",
    href: "/services/consultation-digital-strategy",
  },
  {
    number: "02",
    title: "Content Marketing & Copywriting",
    description:
      "Content that communicates clearly, builds trust and moves audiences to action.",
    href: "/services/content-marketing-copywriting",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description:
      "Paid Ads Strategy & Management focused on reaching the right audience and improving performance.",
    href: "/services/performance-marketing",
  },
  {
    number: "04",
    title: "Hyper-Personalization Architecture & Integration",
    description:
      "Connect customer data, systems and automation to create more relevant experiences at scale.",
    href: "/services/hyper-personalization",
  },
];

export const productsMenu: MegaMenuItem[] = [
  {
    number: "01",
    title: "Mjasiriamali Special Pack",
    description:
      "A practical marketing solution for businesses that need consistent marketing without building an internal marketing team.",
    href: "/products/mjasiriamali-special-pack",
  },
  {
    number: "02",
    title: "Jiases",
    description:
      "Practical business and marketing guidance designed to help identify areas that need attention.",
    href: "/products/jiases",
  },
];

export const knowledgeMenu = {
  title: "Business Growth Center",
  description:
    "Practical marketing, business and growth insights designed to help business owners make better decisions.",
  href: "/business-growth-center",
};

export const featuredProduct = {
  label: "FEATURED PRODUCT",
  title: "Mjasiriamali Special Pack",
  description:
    "Consistent marketing support designed for businesses growing with focused resources.",
  href: "/products/mjasiriamali-special-pack",

  // Replace with an existing image from your project.
  image: "/images/products/mjasiriamali-featured.webp",
};