export type AddonService = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const addonServicesContent = {
  eyebrow: "ADDITIONAL SERVICES",

  title: "Get 25% Discount on all Add-ons Services",

  description:
    "Extend your Mjasiriamali package with professional services designed to strengthen your brand, improve your digital presence, and support your day-to-day business needs.",

  services: [
    {
      number: "01",
      title: "Website Design",
      description:
        "Professional, responsive websites that give your business a credible digital presence and make it easier for customers to find you.",
      image: "/images/addon-services/website-design.webp",
    },
    {
      number: "02",
      title: "Company Profiles",
      description:
        "Professionally designed company profiles that clearly present your business, services, capabilities, and experience.",
      image: "/images/addon-services/company-profile.webp",
    },
    {
      number: "03",
      title: "Professional Emails",
      description:
        "Business email addresses using your own domain to give your communication a more professional and trusted appearance.",
      image: "/images/addon-services/professional-emails.webp",
    },
    {
      number: "04",
      title: "Branding Items",
      description:
        "From logos and business cards to letterheads and other branded materials, keep your business identity consistent.",
      image: "/images/addon-services/branding-items.webp",
    },
    {
      number: "05",
      title: "Social Media Management",
      description:
        "Keep your social channels active with planned content, creative designs, publishing support, and ongoing management.",
      image: "/images/addon-services/social-media.webp",
    },
  ] satisfies AddonService[],
};