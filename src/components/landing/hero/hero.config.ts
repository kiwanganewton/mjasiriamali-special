export type HeroSlidePosition = {
  x: string;
  y: string;
  width: string;
};

export type HeroSlideColors = {
  heading: string;
  paragraph: string;
};

export type HeroSlideData = {
  id: number;
  title: string;
  description: string;
  image: string;

  cta?: {
    label: string;
    variant?: "solid" | "outline";
    tone?: "brand" | "dark" | "light";
  };

  position: {
    desktop: HeroSlidePosition;
    mobile: HeroSlidePosition;
  };

  colors: HeroSlideColors;
};

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,

    title: "Just Skip the Cost. Keep Growing",

    description:
      "Running your business is already a full-time job, and you miss doing  ",

    image: "/images/hero/slide-01.webp",

    cta: {
      label: "Dicover More",
      variant: "solid",
      tone: "brand",
    },

    position: {
      desktop: {
        x: "7%",
        y: "30%",
        width: "320px",
      },

      mobile: {
        x: "7%",
        y: "30%",
        width: "66%",
      },
    },

    colors: {
      heading: "#ffffff",
      paragraph: "#f3f4f6",
    },
  },

  {
    id: 2,

    title: "",

    description:
      "Running your business is already a full-time job, and you miss doingtime job, and you miss doing",

    image: "/images/hero/slide-000000000000000002.webp",

    cta: {
      label: "Discover More",
      variant: "solid",
      tone: "brand",
    },

    position: {
      desktop: {
        x: "7%",
        y: "30%",
        width: "300px",
      },

      mobile: {
        x: "7%",
        y: "33%",
        width: "86%",
      },
    },

    colors: {
      heading: "#C62828",
      paragraph: "#363a3e",
    },
  },

  {
    id: 3,

    title: "Start Small & Grow Digitally with Us",

    description: "",

    image: "/images/hero/slide-000003.webp",

    cta: {
      label: "Discover More",
      variant: "outline",
      tone: "brand",
    },

    position: {
      desktop: {
        x: "7%",
        y: "55%",
        width: "300px",
      },

      mobile: {
        x: "7%",
        y: "55%",
        width: "66%",
      },
    },

    colors: {
      heading: "#C62828",
      paragraph: "#363a3e",
    },
  },
];
