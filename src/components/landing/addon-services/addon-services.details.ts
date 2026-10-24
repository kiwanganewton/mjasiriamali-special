export type AddonPrice = {
  item: string;
  regular: string;
  member: string;
};

export type AddonServiceDetail = {
  introduction: string;
  solution: string;
  scope: string;
  pricing: AddonPrice[];
  quoteOffer?: string;
};

export const addonServiceDetails: Record<string, AddonServiceDetail> = {
  "01": {
    introduction:
      "When customers look for your business online, an unclear or missing website can make it harder to understand what you offer and how to take the next step. A well-organized site gives people one dependable place to learn about your business and decide whether to contact you.",
    solution:
      "We design a responsive website around your business goals, services, and customers. Choose a focused one-page full website or a multipage site that gives each important part of your business more room to explain itself.",
    scope:
      "Before work begins, we confirm the page structure, content and imagery requirements, contact features, and any domain or hosting needs. Extra integrations, ongoing maintenance, and third-party costs are included only when agreed in the project scope.",
    pricing: [
      {
        item: "One-page full website",
        regular: "466,667/=",
        member: "350,000/=",
      },
      {
        item: "Multipage website",
        regular: "733,333/=",
        member: "550,000/=",
      },
    ],
  },
  "02": {
    introduction:
      "When a prospective client, partner, or supplier asks what your business can do, a scattered collection of details can make a strong business difficult to understand. A clear company profile helps people quickly see who you are, what you offer, and why they should continue the conversation.",
    solution:
      "We organize your business story, services, capabilities, and contact information into a professionally designed profile that is easier to share in meetings, proposals, and business introductions. The aim is to make your strengths clear while keeping the presentation consistent with your brand.",
    scope:
      "We agree on the profile’s length, format, and content requirements before design begins. Your business facts and claims are checked with you so the finished profile represents your organization accurately.",
    pricing: [
      {
        item: "Company profile",
        regular: "132,000/=",
        member: "99,000/=",
      },
    ],
  },
  "03": {
    introduction:
      "Using a personal or generic email address for business conversations can make a capable business appear less established, especially when sending quotations, proposals, and customer responses. A domain-based email gives your business communication a more consistent and professional identity.",
    solution:
      "We help set up professional email for your business domain so your correspondence is easier for customers to recognize and trust. It can also support a more consistent identity as your business grows and more people handle enquiries.",
    scope:
      "The number of email addresses, domain requirements, and setup details are confirmed before work begins. Domain registration, mailbox subscriptions, and other provider charges are recurring third-party costs unless the agreed quotation says otherwise.",
    pricing: [
      {
        item: "Professional email service",
        regular: "100,000/=",
        member: "75,000/=",
      },
    ],
  },
  "04": {
    introduction:
      "When logos, printed items, and promotional materials use inconsistent styles, customers may struggle to recognize your business across different touchpoints. Consistent branding helps each material feel connected to the same business and makes your identity easier to remember.",
    solution:
      "We can help create or apply your visual identity across the branding materials your business needs, from business cards and letterheads to other requested items. Each request is scoped around how the material will be used and the impression you want it to make.",
    scope:
      "Tell us which materials you need, the quantities, sizes, and whether you need design, production, or both. We will confirm the specifications and prepare a tailored quotation before work proceeds.",
    pricing: [],
    quoteOffer:
      "There is no fixed price because materials and production needs vary. Mjasiriamali Special members receive 25% off the approved quotation for requested branding materials.",
  },
};