export type AssessmentOption = {
  id: string;
  label: string;
};

export type AssessmentQuestion = {
  id: string;
  question: string;
  options: AssessmentOption[];
};

export type AssessmentAnswers = Record<string, string>;

export type WhatsAppSubmission = {
  answers: AssessmentAnswers;
  whatsappNumber: string;
};

export const assessmentConfig = {
  intro: {
    title: "Let's see what your business actually needs.",
    description:
      "Answer a few quick questions about your business, your current marketing situation and where you want to go.",
    button: "Start Assessment",
  },

  questions: [
    {
      id: "business_stage",
      question: "Which best describes where your business is right now?",
      options: [
        {
          id: "just_starting",
          label: "Just starting",
        },
        {
          id: "growing_steadily",
          label: "Growing steadily",
        },
        {
          id: "established_more_customers",
          label: "Established but want more customers",
        },
        {
          id: "established_ready_to_scale",
          label: "Established and ready to scale",
        },
        {
          id: "struggling_to_grow",
          label: "Struggling to grow",
        },
      ],
    },

    {
      id: "marketing_challenge",
      question: "What is happening with your marketing right now?",
      options: [
        {
          id: "not_enough_awareness",
          label: "Not enough people know about us",
        },
        {
          id: "attention_few_enquiries",
          label: "We get attention but few enquiries",
        },
        {
          id: "enquiries_few_customers",
          label: "We get enquiries but few customers",
        },
        {
          id: "inconsistent_marketing",
          label: "We get customers, but growth is inconsistent ",
        },
        {
          id: "unclear_results",
          label: "We are not sure what is working",
        },
      ],
    },

    {
      id: "marketing_goal",
      question:
        "What would make the biggest difference to your business right now?",
      options: [
        {
          id: "more_enquiries",
          label: "Get more enquiries",
        },
        {
          id: "more_customers",
          label: "Get more customers",
        },
        {
          id: "brand_awareness",
          label: "Increase brand awareness",
        },
        {
          id: "online_presence",
          label: "Improve our online presence",
        },
        {
          id: "stronger_brand",
          label: "Growing the business more consistently ",
        },
      ],
    },

    {
      id: "marketing_structure",
      question: "How does your business currently approach marketing?",
      options: [
        {
          id: "rarely_marketing",
          label: "We rarely do marketing",
        },
        {
          id: "occasionally",
          label: "We market when needed, without a fixed plan",
        },
        {
          id: "regularly_no_plan",
          label: "We do marketing regularly, but without a clear strategy ",
        },
        {
          id: "planned_approach",
          label: "We have a planned marketing approach",
        },
        {
          id: "team_or_agency",
          label:
            "We have an established marketing system with defined processes",
        },
      ],
    },

    {
      id: "marketing_responsibility",
      question: "Who currently handles marketing for your business?",
      options: [
        {
          id: "self",
          label: "I handle everything myself",
        },
        {
          id: "shared_employee",
          label: "An employee handles it alongside other responsibilities",
        },
        {
          id: "marketing_team",
          label: "We have a internal marketing team ",
        },
        {
          id: "dedicated_person",
          label: "We have a dedicated marketing person",
        },
        {
          id: "agency",
          label: "We work with an agency or established marketing partner",
        },
      ],
    },

    {
      id: "marketing_friction",
      question: "What usually makes marketing difficult for your business?",
      options: [
        {
          id: "limited_time_resources",
          label: "We don't have enough time ",
        },
        {
          id: "unclear_focus",
          label: "We don't know what to communicate ",
        },
        {
          id: "content_consistency",
          label: "Creating Marketing content regularly is difficult ",
        },
        {
          id: "competing_priorities",
          label: "Other business priorities take over ",
        },
        {
          id: "improve_existing_system",
          label: "We already have a system but want to improve it ",
        },
      ],
    },

    {
      id: "investment_capacity",
      question:
        "What monthly budget could your business comfortably set aside for marketing?",
      options: [
        {
          id: "below_100k",
          label: "Below TSh 100,000",
        },
        {
          id: "100_200k",
          label: "TSh 100,000–200,000",
        },
        {
          id: "200_500k",
          label: "TSh 200,000–500,000",
        },
        {
          id: "500k_1M",
          label: "TSh 500,000–1,000,000",
        },
        {
          id: "above_1M",
          label: "Above TSh 1,000,000",
        },
      ],
    },
  ] satisfies AssessmentQuestion[],

  whatsapp: {
    title: "We've got a clearer picture of what your business is looking for.",

    description:
      "Based on your answers, our Intelligent System has prepared a recommendation showing the type of support that may fit your current situation.",

    heading: "Want your recommendation on WhatsApp?",

    benefits: [
      "Your marketing situation summary",
      "What appears to be holding your business back",
      "The type of support that may fit",
      "Suggested next steps",
    ],

    label: "WhatsApp Number",
    placeholder: "e.g. 0712 345 678",
    button: "Send My Recommendation",
    secondaryButton: "No Need",

    consent:
      "By submitting your number, you agree to receive your assessment recommendation on WhatsApp.",
  },

  success: {
    title: "Your recommendation is on its way.",
    description:
      "We've received your answers and will use them to prepare your personalized recommendation.",
  },

  errors: {
    answerRequired: "Please select an answer to continue.",
    invalidPhone: "Please enter a valid Tanzanian WhatsApp number.",
    submission:
      "We couldn't send your recommendation right now. Please check your number and try again.",
  },
} as const;

export type AssessmentConfig = typeof assessmentConfig;
