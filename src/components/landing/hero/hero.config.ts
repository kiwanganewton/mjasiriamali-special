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

    title: "Skip the Cost. Keep Growing",

    description:
      "Running your business is already a full-time job, and you miss doing miss already ",

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
        y: "33%",
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

    title: "Stop Doing It All Yourself.",

    description:
      "Running your business is already a full time job, and you miss doing miss already.",

    image: "/images/hero/slide-0000000000002.webp",

    cta: {
      label: "Discover More",
      variant: "outline",
      tone: "light",
    },

    position: {
      desktop: {
        x: "7%",
        y: "50%",
        width: "300px",
      },

      mobile: {
        x: "7%",
        y: "45%",
        width: "66%",
      },
    },

    colors: {
      heading: "#f9f8f8",
      paragraph: "#dbe0e6",
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
        width: "86%",
      },
    },

    colors: {
      heading: "#C62828",
      paragraph: "#363a3e",
    },
  },
];
