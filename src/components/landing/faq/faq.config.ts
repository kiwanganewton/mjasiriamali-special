export type FaqItem = {
  question: string;
  answer: string;
};

export const faqContent = {
 
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Learn how Mjasiriamali Special supports your business with structured, ongoing marketing.",
  items: [
    {
      question: "What is the Mjasiriamali Special Pack?",
      answer:
        "It is a monthly marketing support package for startups and growing businesses that want clear marketing direction and consistent professional content, without building a full in-house team.",
    },
    {
      question: "What does the package include?",
      answer:
        "The package provides monthly content planning, professional recurring marketing graphics, ongoing support to help maintain a regular marketing presence, and access to agency support when additional needs arise.",
    },
    {
      question: "How much does the package cost?",
      answer:
        "The Mjasiriamali Special Pack is TZS 190,000 per month.",
    },
    {
      question: "Who is the package designed for?",
      answer:
        "It is designed for startups and growing businesses that need more consistent marketing, have limited time or in-house capacity, or want help planning professional content.",
    },
    {
      question: "Can I get help with services beyond the monthly content?",
      answer:
        "Yes. Additional marketing services such as website design, professional email, company profiles, branding items, and video content coverage are available. Mjasiriamali Special clients receive a 25% discount on add-on services.",
    },
    {
      question: "How do I get started?",
      answer:
        "Use the inquiry form on this page to tell us about your business. The team can then help you decide whether the package fits your current marketing needs.",
    },
  ] satisfies FaqItem[],
};
