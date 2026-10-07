export type MegaMenuItem = {
  number?: string;
  title: string;
  description: string;
  href: string;
};

export const servicesMenu: MegaMenuItem[] = [
  {
    /* number: "01", */
    title: "Consultation & Digital Strategy",
    description: "Turn your business goals into a clear, practical digital growth strategy.",
    href: "/services/consultation-digital-strategy",
  },
  {
   
    title: "Generative Engine Optimization (GEO)",
    description:
      "Improve how your business is discovered and represented across AI-powered search and answer engines.",
    href: "/services/content-marketing-copywriting",
  },
  {
   
    title: "Campaigns & Performance Marketing",
    description:
      "Reach the right customers with targeted advertising campaigns that generate leads, sales and measurable growth.",
    href: "/services/performance-marketing",
  },
  {
    
    title: "Revenue Operations & Marketing Automation",
    description:
      "Connect your marketing, sales and customer data into systems that capture, qualify, nurture and convert leads more efficiently.",
    href: "/services/hyper-personalization",
  },
];

export const productsMenu: MegaMenuItem[] = [
  {
    
    title: "Mjasiriamali Special Pack",
    description:
      "A practical marketing solution for businesses that need consistent marketing without building an internal marketing team.",
    href: "/products/mjasiriamali-special-pack",
  },
  {
    
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