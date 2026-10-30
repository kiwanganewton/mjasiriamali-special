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
    comparison?: {
      title: string;
      firstColumn: string;
      secondColumn: string;
      rows: {
        topic: string;
        first: string;
        second: string;
      }[];
    };
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
    title: "Strategic Content Planning",
    description:
      "Get a clearer monthly marketing direction built around your business, customers, and goals.",
    image: "/images/pack/pack0000001.webp",
    showReadMore: true,
    detail: {
      introduction:
        "Many businesses know they need to communicate regularly, but choosing what to say can become another last-minute task. When ideas are scattered, marketing can lose momentum and feel disconnected from what the business is trying to achieve. Monthly content planning gives that communication a clearer direction, shaped around your business, customers, and priorities.",
      interestSignals: ["planning", "audience", "consistency", "time"],
      comparison: {
        title: "Other Agencies vs. Mjasiriamali Special Pack",
        firstColumn: "Other Agencies",
        secondColumn: "Mjasiriamali Special Pack",
        rows: [
          {
            topic: "Understanding Your Business",
            first: "Depends on the service scope",
            second: "Plans around your vision, business, and audience",
          },
          {
            topic: "Strategic Planning",
            first: "May require an extra fee",
            second: "Included in the monthly package",
          },
          {
            topic: "Access to Expertise",
            first: "Can require a larger budget",
            second: "Made expert marketing accessible to startups, even on tight budgets.",
          },
        ],
      },
      sections: [
        {
          id: "planning-purpose",
          heading: "",
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
          heading: "What Changes When Your Marketing Has a Plan?",
          body:
            "A clear plan keeps your marketing moving, connects every piece of content to your business goals, and leaves room for changing priorities as your business grows.",
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
      comparison: {
        title: "Hiring a Designer vs. Mjasiriamali Special Pack",
        firstColumn: "In-house designer",
        secondColumn: "Mjasiriamali Special Pack",
        rows: [
          {
            topic: "Cost",
            first: "A monthly salary, plus software and equipment",
            second: "Design support included in one flat monthly package: TZS 190,000",
          },
          {
            topic: "Workload",
            first: "Paid full-time, even in months with little to design",
            second: "Design matched to what your content plan needs each month",
          },
          {
            topic: "Skills",
            first: "One person’s style and skill set",
            second: "A team that designs for social media: posts, promotions, announcements",
          },
              {
            topic: "Consistency	",
            first: "Depends on one person and your time to guide them",
            second: "Your brand look stays consistent across all your posts",
          },
        ],
      },
      sections: [
        {
          id: "design-role",
          heading: "",
          body:
            "A crowded graphic, changing styles, or a rushed design can distract from the offer itself. Customers need to notice the important information and understand who is speaking to them. Clear visual hierarchy and consistent creative choices help keep attention on the message and make communications feel connected over time.",
        },
        {
          id: "design-content",
          heading: "How the package supports your creative output",
          body:
            "The package includes 3 pieces of content every week, featuring professional promotional or informational posters and carousel content. Each piece follows your monthly content plan, keeping your brand consistent and your marketing messages aligned with your business goals.",
        },
        {
          id: "design-fit",
          heading: "",
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
        "As a business grows, regular marketing content may not be enough on its own. You may also need a website, a company profile, professional email, branded materials, or video content coverage while time and budget are already stretched. The package gives clients access to additional services at a 25% discounted rate, so they can explore support for needs beyond recurring content.",
      interestSignals: ["website", "branding", "business-tools", "additional-services", "pricing"],
      sections: [
        {
          id: "addons-options",
          heading: "",
          body:
            "Different stages of business bring different communication needs. You might need a website to give customers a place to learn about your services, a company profile to introduce your business professionally, email on your own domain, branded and printed materials, or video content coverage to bring your products and services to life. These are examples of additional services available to discuss.",
        },
        {
          id: "addons-value",
          heading: "How the package can help",
          body:
            "Mjasiriamali Special clients receive a 25% discount on add-on services. Because these services are separate from the core monthly package, you can first discuss your specific need, the scope of work, and whether the service is relevant before deciding how to proceed.",
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
          id: "agency-context",
          heading: "How Agency support can help",
          body:
            "Get access to more advanced marketing support and marketing systems by discussing the results you want, the people you need to reach, and the challenges you're facing. Understanding your business helps us identify the right solutions for your needs, from specialized marketing services to systems that improve how your business attracts and manages customers. As your business grows, your marketing needs may also change. Whether you need a more advanced strategy, better customer follow-up, or marketing automation to reduce repetitive work, we help you explore the right next steps based on your goals and budget.",
        },
        
      ],
    },
  },
];
