export const mjasiriamaliKnowledge = {
  package: {
    name: "Mjasiriamali Special",
    price: 190000,

    positioning:
      "A structured monthly marketing support package for startups and small businesses that need consistent marketing without building a full in-house marketing team.",

    purpose: [
      "Create a clear monthly marketing direction",
      "Help businesses communicate consistently",
      "Provide professional recurring creative content",
      "Reduce the burden of managing marketing internally",
      "Give businesses access to agency support when additional marketing needs arise",
    ],
  },

  capabilities: {
    contentPlanning: {
      name: "Monthly Content Planning",

      description:
        "Monthly marketing ideas and content planning based on the business, its customers and its marketing needs.",

      helpsWith: [
        "unclear_focus",
        "inconsistent_marketing",
        "rarely_marketing",
        "occasionally",
        "regularly_no_plan",
      ],
    },

    graphicDesign: {
      name: "Professional Graphic Design",

      description:
        "Professional recurring marketing graphics including posters and carousel content.",

      helpsWith: [
        "content_consistency",
        "limited_time_resources",
        "competing_priorities",
      ],
    },

    marketingConsistency: {
      name: "Consistent Marketing Support",

      description:
        "Ongoing monthly support that helps businesses maintain a regular marketing presence.",

      helpsWith: [
        "limited_time_resources",
        "content_consistency",
        "competing_priorities",
        "inconsistent_marketing",
      ],
    },

    agencySupport: {
      name: "Agency Support",

      description:
        "Additional professional support when the business needs services beyond its regular monthly marketing content.",

      helpsWith: [
        "limited_time_resources",
        "competing_priorities",
      ],
    },

    addOns: {
      name: "Marketing Add-ons",

      description:
        "Additional services available at a 25% discount for Mjasiriamali Special clients.",

      services: [
        "Website design",
        "Professional emails",
        "Company profile",
        "Printing items",
        "Additional marketing services",
      ],
    },
  },

  idealBusiness: {
    characteristics: [
      "Startup or small business",
      "Needs more consistent marketing",
      "Does not have enough time to manage marketing",
      "Does not have a clear content direction",
      "Needs regular professional marketing content",
      "Has limited internal marketing capacity",
      "Wants structured ongoing marketing support",
    ],
  },

  limitations: [
    "Businesses that already have a strong internal marketing system may not need the core package.",
    "Businesses whose main problem is conversion optimization may need a different solution.",
    "Businesses whose primary need is advanced advertising strategy may require additional services.",
    "Businesses looking for a complete replacement of an established marketing department may not be the intended fit.",
  ],
} as const;