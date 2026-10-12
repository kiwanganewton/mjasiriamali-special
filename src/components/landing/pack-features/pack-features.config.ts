export type PackFeature = {
  id: number;
  interestKey: string;
  title: string;
  description: string;
  image: string;
  showReadMore?: boolean;
  detail: {
    introduction: string;
    interestSignals: string[];
    sections: {
      id: string;
      heading: string;
      body: string;
    }[];
  };
};

export const packFeatures: PackFeature[] = [
  {
    id: 1,
    interestKey: "content-planning",
    title: "Content Planning",
    description:
      "Get a clearer monthly marketing direction built around your business, customers, and goals.",
    image: "/images/pack/pack0000001.webp",
    showReadMore: true,
    detail: {
      introduction:
        "Many businesses know they need to communicate regularly, but choosing what to say can become another last-minute task. When ideas are scattered, marketing can lose momentum and feel disconnected from what the business is trying to achieve. Monthly content planning gives that communication a clearer direction, shaped around your business, customers, and priorities.",
      interestSignals: ["planning", "audience", "consistency", "time"],
      sections: [
        {
          id: "planning-purpose",
          heading: "When every post starts from scratch",
          body:
            "Finding time to think of a new message every time you need to post can make marketing inconsistent. It can also leave useful ideas unfinished or cause the same messages to be repeated without a clear purpose. Planning creates space to decide what deserves attention before creative work begins.",
        },
        {
          id: "planning-inputs",
          heading: "How the package helps create direction",
          body:
            "Monthly ideas and content planning are informed by your products or services, current priorities, intended customers, and the messages your business needs to communicate. This connects individual pieces of content to a broader direction instead of relying on a generic calendar.",
        },
        {
          id: "planning-fit",
          heading: "What that can change for your business",
          body:
            "A clearer plan can make it easier to keep marketing moving alongside day-to-day business responsibilities. It gives creative work a reason and a context, while leaving room for the messages and priorities that matter to your business that month.",
        },
      ],
    },
  },

  {
    id: 2,
    interestKey: "professional-graphic-design",
    title: "Professional Graphic Design",
    description:
      "Get professionally designed content created to keep your business looking consistent and credible.",
    image: "/images/pack/pack0002.webp",
    showReadMore: true,
    detail: {
      introduction:
        "Many business owners have worthwhile offers and useful information to share, but limited time or design capacity can make every graphic feel like a new challenge. Inconsistent visuals can also make it harder for customers to recognize the business or quickly understand its message. Professional recurring graphic design helps present planned communications more clearly and consistently.",
      interestSignals: ["visual-identity", "creative-production", "credibility", "communication"],
      sections: [
        {
          id: "design-role",
          heading: "When the message is there but the presentation is difficult",
          body:
            "A crowded graphic, changing styles, or a rushed design can distract from the offer itself. Customers need to notice the important information and understand who is speaking to them. Clear visual hierarchy and consistent creative choices help keep attention on the message and make communications feel connected over time.",
        },
        {
          id: "design-content",
          heading: "How the package supports your creative output",
          body:
            "The package includes professional recurring marketing graphics such as promotional or informational posters and carousel content. The format and message can follow the communication planned for your business, helping your content look more considered without asking you to create every asset on your own.",
        },
        {
          id: "design-fit",
          heading: "The benefit of a more consistent visual presence",
          body:
            "This support can be useful when you have important offers to explain, want customers to recognize your communications, or do not have dedicated design capacity in-house. It helps make professional presentation part of your recurring marketing activity rather than an occasional scramble.",
        },
      ],
    },
  },

  {
    id: 3,
    interestKey: "discounted-add-on-services",
    title: "25% Discount on All Our Add-ons",
    description:
      "Get additional business solutions at a special discounted rate whenever your business needs them.",
    image: "/images/pack/pack03.webp",
    showReadMore: true,
    detail: {
      introduction:
        "As a business grows, regular marketing content may not be enough on its own. You may also need a website, a company profile, professional email, or branded materials, while time and budget are already stretched. The package gives clients access to additional services at a 25% discounted rate, so they can explore support for needs beyond recurring content.",
      interestSignals: ["website", "branding", "business-tools", "additional-services", "pricing"],
      sections: [
        {
          id: "addons-options",
          heading: "When your business needs more than content",
          body:
            "Different stages of business bring different communication needs. You might need a website to give customers a place to learn about your services, a company profile to introduce your business professionally, email on your own domain, or branded and printed materials. These are examples of additional services available to discuss.",
        },
        {
          id: "addons-value",
          heading: "How the package can help",
          body:
            "Mjasiriamali Special clients receive a 25% discount on add-on services. Because these services are separate from the core monthly package, you can first discuss your specific need, the scope of work, and whether the service is relevant before deciding how to proceed.",
        },
        {
          id: "addons-fit",
          heading: "Choose support around the need you have now",
          body:
            "This option is useful when a particular business priority calls for a specific service. It lets you consider that need alongside your ongoing marketing, rather than assuming every business needs the same additional work at the same time.",
        },
      ],
    },
  },

  {
    id: 4,
    interestKey: "agency-support",
    title: "Agency Support",
    description:
      "Get professional support and guidance whenever you need help moving your business forward.",
    image: "/images/pack/pack004.webp",
    showReadMore: true,
    detail: {
      introduction:
        "Running a business often brings marketing questions that do not fit neatly into a content calendar. You may see an opportunity or face a new challenge without having an in-house marketing colleague to help work out what to do next. Agency support gives Mjasiriamali Special clients a way to discuss additional needs with a professional team.",
      interestSignals: ["expert-guidance", "additional-needs", "capacity", "business-growth"],
      sections: [
        {
          id: "agency-scope",
          heading: "When the need goes beyond the monthly plan",
          body:
            "The core package focuses on structured planning and recurring creative content. When a new requirement falls outside that work, it can be difficult to know whether it calls for a different service, a new approach, or more information first.",
        },
        {
          id: "agency-context",
          heading: "How professional support can help",
          body:
            "A conversation about the outcome you want, the people you need to reach, and the challenge in your way can help clarify what support may be relevant. Starting with your business context helps keep any next step connected to the actual need, rather than choosing a service simply because it is available.",
        },
        {
          id: "agency-fit",
          heading: "A practical next step when things change",
          body:
            "Agency support can be useful when your priorities change, an additional marketing need emerges, or you need guidance to understand the next practical step. It provides a way to raise that need and discuss whether further support is appropriate.",
        },
      ],
    },
  },
];
