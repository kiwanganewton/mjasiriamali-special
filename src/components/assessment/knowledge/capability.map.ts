export type FitStrength = "high" | "medium" | "low" | "none";

export type CapabilityMatch = {
  capability: string;
  strength: FitStrength;
  reason: string;
};

export const capabilityMap = {
  business_stage: {
    just_starting: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "A new business can benefit from having a clear and structured marketing direction.",
        },
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "A new business may need consistent professional marketing materials.",
        },
      ],
    },

    growing_steadily: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "A growing business can benefit from maintaining a structured marketing routine.",
        },
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Consistent marketing becomes increasingly important as the business grows.",
        },
      ],
    },

    established_more_customers: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "The business may benefit from clearer and more consistent communication to support customer growth.",
        },
        {
          capability: "marketingConsistency",
          strength: "medium",
          reason:
            "Consistent marketing can support an established business seeking additional customers.",
        },
      ],
    },

    established_ready_to_scale: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "medium",
          reason:
            "A business preparing to scale may need reliable marketing execution.",
        },
      ],
    },

    struggling_to_grow: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "A clearer marketing direction may help identify and address communication gaps.",
        },
        {
          capability: "marketingConsistency",
          strength: "medium",
          reason:
            "Inconsistent marketing may contribute to difficulty maintaining growth.",
        },
      ],
    },
  },

  marketing_challenge: {
    not_enough_awareness: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Consistent marketing activity can help a business maintain visibility.",
        },
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "Professional recurring content can support ongoing business visibility.",
        },
      ],
    },

    attention_few_enquiries: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "Clearer communication and content direction may help address an enquiry gap.",
        },
      ],
    },

    enquiries_few_customers: {
      matches: [],
    },

    inconsistent_marketing: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "The package is designed to provide structured and consistent monthly marketing support.",
        },
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "Monthly planning can help create a more reliable marketing routine.",
        },
        {
          capability: "graphicDesign",
          strength: "high",
          reason:
            "Regular creative production can help maintain consistent marketing activity.",
        },
      ],
    },

    unclear_results: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "A more structured marketing approach can make marketing activity easier to organize and evaluate.",
        },
      ],
    },
  },

  marketing_goal: {
    more_enquiries: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "Clearer and more purposeful content can support communication aimed at generating enquiries.",
        },
      ],
    },

    more_customers: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "medium",
          reason:
            "Consistent marketing can support ongoing customer acquisition activity.",
        },
      ],
    },

    brand_awareness: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Regular marketing activity supports ongoing brand visibility.",
        },
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "Consistent visual content can support brand communication.",
        },
      ],
    },

    online_presence: {
      matches: [
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "Professional recurring content can strengthen how a business presents itself online.",
        },
      ],
    },

    stronger_brand: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "A structured communication approach can support more consistent brand development.",
        },
        {
          capability: "marketingConsistency",
          strength: "medium",
          reason:
            "Regular marketing activity supports consistent brand communication.",
        },
      ],
    },
  },

  marketing_structure: {
    rarely_marketing: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "Monthly planning can help a business move from occasional marketing toward a more consistent routine.",
        },
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Ongoing monthly support can help establish a regular marketing presence.",
        },
      ],
    },

    occasionally: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "A monthly plan can provide structure instead of marketing only when needed.",
        },
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Regular support can help maintain marketing activity throughout the month.",
        },
      ],
    },

    regularly_no_plan: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "The business is already marketing but lacks a clear structure, which directly relates to monthly planning.",
        },
      ],
    },

    planned_approach: {
      matches: [
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "The business may benefit more from strengthening execution than creating its basic marketing structure.",
        },
      ],
    },

    team_or_agency: {
      matches: [],
    },
  },

  marketing_responsibility: {
    self: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Managing marketing alone can make consistent execution difficult.",
        },
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "Structured monthly planning can reduce the need to decide marketing activities continuously.",
        },
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "Professional creative support can reduce the amount of marketing production handled by the owner.",
        },
      ],
    },

    shared_employee: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Marketing handled alongside other responsibilities can make consistency difficult.",
        },
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "Planning can make marketing easier to manage alongside other duties.",
        },
      ],
    },

    marketing_team: {
      matches: [
        {
          capability: "graphicDesign",
          strength: "low",
          reason:
            "An existing marketing team already provides internal capacity, so the core package may add limited value.",
        },
      ],
    },

    dedicated_person: {
      matches: [
        {
          capability: "graphicDesign",
          strength: "low",
          reason:
            "A dedicated marketing person already provides internal marketing capacity.",
        },
      ],
    },

    agency: {
      matches: [],
    },
  },

  marketing_friction: {
    limited_time_resources: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Ongoing support can reduce the amount of marketing work the business needs to manage itself.",
        },
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "Monthly planning reduces the need to continuously decide what marketing activity to create.",
        },
        {
          capability: "graphicDesign",
          strength: "high",
          reason:
            "Professional creative production reduces the content-production workload.",
        },
      ],
    },

    unclear_focus: {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "Monthly content planning directly addresses uncertainty about what to communicate.",
        },
      ],
    },

    content_consistency: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "Ongoing monthly support is designed to help maintain marketing consistency.",
        },
        {
          capability: "graphicDesign",
          strength: "high",
          reason:
            "Regular creative production directly addresses difficulty creating marketing content consistently.",
        },
      ],
    },

    competing_priorities: {
      matches: [
        {
          capability: "marketingConsistency",
          strength: "high",
          reason:
            "External marketing support can reduce the effect of competing business responsibilities.",
        },
        {
          capability: "graphicDesign",
          strength: "medium",
          reason:
            "External creative production reduces the amount of marketing work competing with other priorities.",
        },
      ],
    },

    improve_existing_system: {
      matches: [
        {
          capability: "graphicDesign",
          strength: "low",
          reason:
            "The business already has a marketing system, so the package may only provide additional execution support.",
        },
      ],
    },
  },

  Investment_capacity: {
    below_100k: {
      matches: [],
    },

    "100_200k": {
      matches: [
        {
          capability: "contentPlanning",
          strength: "medium",
          reason:
            "The stated investment range is close to the package price and may require consideration of the full monthly commitment.",
        },
      ],
    },

    "200_500k": {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "The stated investment capacity is compatible with the package price.",
        },
        {
          capability: "graphicDesign",
          strength: "high",
          reason:
            "The stated investment capacity allows room for the monthly package.",
        },
      ],
    },

    "500k_1M": {
      matches: [
        {
          capability: "contentPlanning",
          strength: "high",
          reason:
            "The stated investment capacity is compatible with the package.",
        },
        {
          capability: "agencySupport",
          strength: "medium",
          reason:
            "Higher investment capacity may allow the business to consider additional agency support.",
        },
      ],
    },

    above_1M: {
      matches: [
        {
          capability: "agencySupport",
          strength: "medium",
          reason:
            "Higher investment capacity may allow the business to consider broader agency support beyond the core package.",
        },
      ],
    },
  },
} as const;