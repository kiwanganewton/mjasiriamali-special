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
      question: "What best describes your business right now?",
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
      question: "What is your biggest marketing challenge right now?",
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
          label: "Our marketing is inconsistent",
        },
        {
          id: "unclear_results",
          label: "We are not sure what is working",
        },
   
      ],
    },

    {
      id: "marketing_goal",
      question: "What would you most like your marketing to achieve?",
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
          label: "Build a stronger brand",
        },
    
      ],
    },

    {
      id: "marketing_activity",
      question: "How would you describe your current marketing activity?",
      options: [
        {
          id: "rarely_marketing",
          label: "We rarely do marketing",
        },
        {
          id: "occasionally",
          label: "We do it occasionally",
        },
        {
          id: "regularly_no_plan",
          label: "We post regularly but without a clear plan",
        },
        {
          id: "planned_approach",
          label: "We have a planned approach",
        },
        {
          id: "team_or_agency",
          label: "We have a team or agency handling it",
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
          id: "business_support",
          label: "Someone in the business helps with marketing",
        },
        {
          id: "dedicated_team",
          label: "We have a dedicated marketing person/team",
        },
        {
          id: "freelancer",
          label: "We work with a freelancer",
        },
        {
          id: "agency",
          label: "We work with an agency",
        },
  
      ],
    },

    {
      id: "timing",
      question:
        "How soon are you looking to get consistent marketing support for your business?",
      options: [
        {
          id: "exploring",
          label: "I'm just exploring my options",
        },
        {
          id: "three_to_six_months",
          label: "Within the next 3–6 months",
        },
        {
          id: "one_to_three_months",
          label: "Within the next 1–3 months",
        },
        {
          id: "next_few_weeks",
          label: "Within the next few weeks",
        },
        {
          id: "as_soon_as_possible",
          label: "I need support as soon as possible",
        },
      ],
    },

    {
      id: "budget",
      question:
        "What monthly amount would you be comfortable setting aside for marketing support?",
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
          id: "200_350k",
          label: "TSh 200,000–350,000",
        },
        {
          id: "350_500k",
          label: "TSh 350,000–500,000",
        },
        {
          id: "above_500k",
          label: "Above TSh 500,000",
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
    invalidPhone:
      "Please enter a valid Tanzanian WhatsApp number.",
    submission:
      "We couldn't send your recommendation right now. Please check your number and try again.",
  },
} as const;

export type AssessmentConfig = typeof assessmentConfig;