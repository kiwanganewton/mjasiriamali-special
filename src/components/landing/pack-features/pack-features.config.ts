export type PackFeature = {
  id: number;
  title: string;
  description: string;
  image: string;
  showReadMore?: boolean;
};

export const packFeatures: PackFeature[] = [
  {
    id: 1,
    title: "Content Planning",
    description:
      "Instead of hiring a graphic designer and digital content manager, you simply work with one professional.",
    image: "/images/pack/pack0000001.webp",
    showReadMore: true,
  },

  {
    id: 2,
    title: "Professional Graphic Design",
    description:
      "Get professionally designed content created to keep your business looking consistent and credible.",
    image: "/images/pack/pack0002.webp",
    showReadMore: true,
  },

  {
    id: 3,
    title: "25% Discount on All Our Add-ons",
    description:
      "Get additional business solutions at a special discounted rate whenever your business needs them.",
    image: "/images/pack/pack03.webp",
    showReadMore: true,
  },

  {
    id: 4,
    title: "Agency Support",
    description:
      "Get professional support and guidance whenever you need help moving your business forward.",
    image: "/images/pack/pack004.webp",
    showReadMore: true,
  },
];