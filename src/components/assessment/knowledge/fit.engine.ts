import { capabilityMap } from "./capability.map";

export type FitLevel = "high" | "medium" | "low";

export type FitStrength = "high" | "medium" | "low" | "none";

export type CapabilityMatch = {
  capability: string;
  strength: FitStrength;
  reason: string;
};

export type BusinessProfile = {
  answers: Record<string, string>;

  fit: FitLevel;

  capabilityScores: Record<string, number>;

  strongestCapabilities: string[];

  strongestSignals: string[];

  concerns: string[];

  businessSituation: string;

  packageRelevance: string;
};

const strengthScore: Record<FitStrength, number> = {
  high: 3,
  medium: 2,
  low: 1,
  none: 0,
};

const capabilityNames: Record<string, string> = {
  contentPlanning: "Monthly Content Planning",
  graphicDesign: "Professional Graphic Design",
  marketingConsistency: "Consistent Marketing Support",
  agencySupport: "Agency Support",
  addOns: "Marketing Add-ons",
};

function getAnswerMatches(
  questionId: string,
  answerId: string
): CapabilityMatch[] {
  const questionMap = (
    capabilityMap as Record<
      string,
      Record<string, { matches: readonly CapabilityMatch[] }>
    >
  )[questionId];

  if (!questionMap) {
    return [];
  }

  const answerMap = questionMap[answerId];

  if (!answerMap) {
    return [];
  }

  return [...answerMap.matches];
}

export function buildBusinessProfile(
  answers: Record<string, string>
): BusinessProfile {
  const capabilityScores: Record<string, number> = {};

  const strongestSignals: string[] = [];

  const concerns: string[] = [];

  /*
   * -------------------------------------------------------
   * 1. READ ALL ANSWERS
   * -------------------------------------------------------
   */

  Object.entries(answers).forEach(
    ([questionId, answerId]) => {
      const matches = getAnswerMatches(
        questionId,
        answerId
      );

      matches.forEach((match) => {
        const score =
          strengthScore[match.strength];

        capabilityScores[match.capability] =
          (capabilityScores[match.capability] ?? 0) +
          score;

        if (
          match.strength === "high" &&
          !strongestSignals.includes(match.reason)
        ) {
          strongestSignals.push(match.reason);
        }

        if (
          match.strength === "low" &&
          !concerns.includes(match.reason)
        ) {
          concerns.push(match.reason);
        }
      });
    }
  );

  /*
   * -------------------------------------------------------
   * 2. IDENTIFY STRONGEST CAPABILITIES
   * -------------------------------------------------------
   */

  const strongestCapabilities = Object.entries(
    capabilityScores
  )
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .filter(([, score]) => score >= 4)
    .map(([capability]) => capability)
    .slice(0, 3);

  /*
   * -------------------------------------------------------
   * 3. IMPORTANT BUSINESS CONDITIONS
   * -------------------------------------------------------
   */

  const marketingStructure =
    answers.marketing_structure;

  const marketingResponsibility =
    answers.marketing_responsibility;

  const marketingChallenge =
    answers.marketing_challenge;

  const marketingFriction =
    answers.marketing_friction;

  const investmentCapacity =
    answers.investment_capacity;

  /*
   * -------------------------------------------------------
   * 4. STRUCTURAL MISMATCH
   * -------------------------------------------------------
   */

  let structuralMismatch = false;

  if (
    marketingStructure === "team_or_agency" &&
    marketingResponsibility === "agency"
  ) {
    structuralMismatch = true;

    concerns.push(
      "The business already has an established marketing system and external marketing support."
    );
  }

  if (
    marketingStructure === "team_or_agency" &&
    marketingResponsibility === "marketing_team"
  ) {
    structuralMismatch = true;

    concerns.push(
      "The business already has an internal marketing team and established marketing processes."
    );
  }

  /*
   * -------------------------------------------------------
   * 5. CONVERSION PROBLEM
   * -------------------------------------------------------
   */

  const conversionProblem =
    marketingChallenge === "enquiries_few_customers";

  if (conversionProblem) {
    concerns.push(
      "The main challenge appears to be converting enquiries into customers rather than maintaining marketing activity."
    );
  }

  /*
   * -------------------------------------------------------
   * 6. BUDGET
   * -------------------------------------------------------
   */

  const budgetMismatch =
    investmentCapacity === "below_100k";

  if (budgetMismatch) {
    concerns.push(
      "The stated monthly marketing budget is below the current Mjasiriamali Special package price."
    );
  }

  /*
   * -------------------------------------------------------
   * 7. TOTAL RELEVANCE
   * -------------------------------------------------------
   */

  const totalScore = Object.values(
    capabilityScores
  ).reduce(
    (total, score) => total + score,
    0
  );

  /*
   * -------------------------------------------------------
   * 8. FIT
   * -------------------------------------------------------
   */

  let fit: FitLevel;

  if (structuralMismatch) {
    fit = "low";
  } else if (
    conversionProblem &&
    totalScore < 10
  ) {
    fit = "low";
  } else if (budgetMismatch) {
    fit = "low";
  } else if (totalScore >= 16) {
    fit = "high";
  } else if (totalScore >= 8) {
    fit = "medium";
  } else {
    fit = "low";
  }

  /*
   * -------------------------------------------------------
   * 9. BUSINESS SITUATION
   * -------------------------------------------------------
   */

  const businessSituation =
    buildBusinessSituation(answers);

  /*
   * -------------------------------------------------------
   * 10. PACKAGE RELEVANCE
   * -------------------------------------------------------
   */

  const packageRelevance =
    buildPackageRelevance(
      fit,
      strongestCapabilities,
      concerns
    );

  return {
    answers,
    fit,
    capabilityScores,
    strongestCapabilities,
    strongestSignals:
      strongestSignals.slice(0, 5),
    concerns: concerns.slice(0, 5),
    businessSituation,
    packageRelevance,
  };
}

/*
 * ---------------------------------------------------------
 * BUSINESS SITUATION
 * ---------------------------------------------------------
 */

function buildBusinessSituation(
  answers: Record<string, string>
): string {
  const situationParts: string[] = [];

  const structure =
    answers.marketing_structure;

  const responsibility =
    answers.marketing_responsibility;

  const friction =
    answers.marketing_friction;

  const challenge =
    answers.marketing_challenge;

  if (structure === "rarely_marketing") {
    situationParts.push(
      "Marketing is currently done infrequently."
    );
  }

  if (structure === "occasionally") {
    situationParts.push(
      "Marketing happens when needed rather than through a fixed routine."
    );
  }

  if (structure === "regularly_no_plan") {
    situationParts.push(
      "Marketing is happening regularly but without a clear strategy."
    );
  }

  if (structure === "planned_approach") {
    situationParts.push(
      "The business already has a planned marketing approach."
    );
  }

  if (structure === "team_or_agency") {
    situationParts.push(
      "The business already has an established marketing system."
    );
  }

  if (responsibility === "self") {
    situationParts.push(
      "The owner currently handles marketing personally."
    );
  }

  if (responsibility === "shared_employee") {
    situationParts.push(
      "Marketing is handled alongside other employee responsibilities."
    );
  }

  if (responsibility === "marketing_team") {
    situationParts.push(
      "The business has an internal marketing team."
    );
  }

  if (responsibility === "dedicated_person") {
    situationParts.push(
      "The business has a dedicated marketing person."
    );
  }

  if (responsibility === "agency") {
    situationParts.push(
      "The business already works with an external marketing partner."
    );
  }

  if (friction === "limited_time_resources") {
    situationParts.push(
      "Limited time is making marketing difficult to maintain."
    );
  }

  if (friction === "unclear_focus") {
    situationParts.push(
      "The business is unsure what it should communicate."
    );
  }

  if (friction === "content_consistency") {
    situationParts.push(
      "Creating marketing content consistently is difficult."
    );
  }

  if (friction === "competing_priorities") {
    situationParts.push(
      "Other business priorities interfere with marketing."
    );
  }

  if (challenge === "enquiries_few_customers") {
    situationParts.push(
      "The main marketing challenge is converting enquiries into customers."
    );
  }

  if (situationParts.length === 0) {
    return "The assessment provides a limited marketing situation signal.";
  }

  return situationParts
    .slice(0, 4)
    .join(" ");
}

/*
 * ---------------------------------------------------------
 * PACKAGE RELEVANCE
 * ---------------------------------------------------------
 */

function buildPackageRelevance(
  fit: FitLevel,
  capabilities: string[],
  concerns: string[]
): string {
  if (fit === "high") {
    const capabilityText = capabilities
      .map(
        (capability) =>
          capabilityNames[capability] ??
          capability
      )
      .join(", ");

    return `The package directly relates to the business's identified needs, particularly ${capabilityText}.`;
  }

  if (fit === "medium") {
    const capabilityText = capabilities
      .map(
        (capability) =>
          capabilityNames[capability] ??
          capability
      )
      .join(", ");

    return `The package could address part of the business's needs, particularly ${capabilityText}. However, some aspects of the current situation may require additional or different support.`;
  }

  if (concerns.length > 0) {
    return `The package may not directly address the business's primary need. ${concerns[0]}`;
  }

  return "The package does not appear to directly match the strongest needs identified in the assessment.";
}