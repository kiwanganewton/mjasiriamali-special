import { capabilityMap } from "./capability.map";

export type FitLevel = "high" | "medium" | "low";

export type FitStrength =
  | "high"
  | "medium"
  | "low"
  | "none";

export type BudgetFit =
  | "within_budget"
  | "below_package_price";

export type CapabilityMatch = {
  capability: string;
  strength: FitStrength;
  reason: string;
};

export type BusinessProfile = {
  answers: Record<string, string>;

  /**
   * SOLUTION FIT
   *
   * This answers:
   * "Does Mjasiriamali Special actually address
   * this business's marketing situation?"
   *
   * Budget does NOT determine this value.
   */
  fit: FitLevel;

  /**
   * BUDGET FIT
   *
   * This answers:
   * "Can the business currently afford
   * TSh 190,000/month?"
   */
  budgetFit: BudgetFit;

  capabilityScores: Record<string, number>;

  strongestCapabilities: string[];

  strongestSignals: string[];

  concerns: string[];

  businessSituation: string;

  packageRelevance: string;

  budgetExplanation: string;
};

const PACKAGE_PRICE = 190000;

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

/*
 * ---------------------------------------------------------
 * GET CAPABILITY MATCHES
 * ---------------------------------------------------------
 */

function getAnswerMatches(
  questionId: string,
  answerId: string
): CapabilityMatch[] {
  const questionMap = (
    capabilityMap as Record<
      string,
      Record<
        string,
        {
          matches: readonly CapabilityMatch[];
        }
      >
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

/*
 * ---------------------------------------------------------
 * GET BUDGET ANSWER
 * ---------------------------------------------------------
 *
 * Your config currently uses:
 *
 * id: "Investment_capacity"
 *
 * But earlier versions of the engine used:
 *
 * answers.investment_capacity
 *
 * We support BOTH so this engine is safer.
 */

function getInvestmentCapacity(
  answers: Record<string, string>
): string | undefined {
  return (
    answers.Investment_capacity ??
    answers.investment_capacity
  );
}

/*
 * ---------------------------------------------------------
 * BUDGET FIT
 * ---------------------------------------------------------
 *
 * IMPORTANT:
 *
 * Budget does NOT change solution fit.
 *
 * A business can have:
 *
 * fit = "high"
 * budgetFit = "below_package_price"
 *
 * That means:
 *
 * "The package is highly relevant,
 * but currently unaffordable."
 */

function getBudgetFit(
  investmentCapacity: string | undefined
): BudgetFit {
  if (investmentCapacity === "below_100k") {
    return "below_package_price";
  }

  if (
    investmentCapacity === "100_200k" ||
    investmentCapacity === "200_500k" ||
    investmentCapacity === "500k_1M" ||
    investmentCapacity === "above_1M"
  ) {
    return "within_budget";
  }

  /*
   * If the answer is missing or unknown,
   * do not assume the package is unaffordable.
   */
  return "within_budget";
}

/*
 * ---------------------------------------------------------
 * BUDGET EXPLANATION
 * ---------------------------------------------------------
 */

function buildBudgetExplanation(
  budgetFit: BudgetFit
): string {
  if (
    budgetFit === "below_package_price"
  ) {
    return `The stated monthly marketing budget is below the Mjasiriamali Special Pack price of TSh ${PACKAGE_PRICE.toLocaleString()}.`;
  }

  return `The stated monthly marketing budget can accommodate the Mjasiriamali Special Pack price of TSh ${PACKAGE_PRICE.toLocaleString()}.`;
}

/*
 * ---------------------------------------------------------
 * BUILD BUSINESS PROFILE
 * ---------------------------------------------------------
 */

export function buildBusinessProfile(
  answers: Record<string, string>
): BusinessProfile {
  const capabilityScores: Record<
    string,
    number
  > = {};

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
          (capabilityScores[match.capability] ??
            0) + score;

        /*
         * Strong matches become strong signals.
         */
        if (
          match.strength === "high" &&
          !strongestSignals.includes(
            match.reason
          )
        ) {
          strongestSignals.push(
            match.reason
          );
        }

        /*
         * Low matches become concerns.
         */
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

  const strongestCapabilities =
    Object.entries(capabilityScores)
      .sort(
        ([, scoreA], [, scoreB]) =>
          scoreB - scoreA
      )
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
    getInvestmentCapacity(answers);

  /*
   * -------------------------------------------------------
   * 4. EXISTING MARKETING SYSTEM
   * -------------------------------------------------------
   *
   * IMPORTANT:
   *
   * Existing agency/team does NOT automatically mean
   * low fit anymore.
   *
   * We record it as context so the AI can determine
   * whether Mjasiriamali Special adds meaningful value.
   */

  const hasEstablishedMarketingSystem =
    marketingStructure ===
    "team_or_agency";

  const hasAgency =
    marketingResponsibility ===
    "agency";

  const hasInternalMarketingTeam =
    marketingResponsibility ===
    "marketing_team";

  if (hasEstablishedMarketingSystem) {
    if (hasAgency) {
      concerns.push(
        "The business already has an established marketing system and external marketing support."
      );
    }

    if (hasInternalMarketingTeam) {
      concerns.push(
        "The business already has an internal marketing team and established marketing processes."
      );
    }
  }

  /*
   * -------------------------------------------------------
   * 5. CONVERSION PROBLEM
   * -------------------------------------------------------
   *
   * Conversion problems are recorded as a concern,
   * but they do NOT automatically make the package low fit.
   */

  const conversionProblem =
    marketingChallenge ===
    "enquiries_few_customers";

  if (conversionProblem) {
    concerns.push(
      "The main challenge appears to be converting enquiries into customers rather than maintaining marketing activity."
    );
  }

  /*
   * -------------------------------------------------------
   * 6. BUDGET
   * -------------------------------------------------------
   *
   * Budget is completely separated from solution fit.
   */

  const budgetFit = getBudgetFit(
    investmentCapacity
  );

  const budgetExplanation =
    buildBudgetExplanation(budgetFit);

  if (
    budgetFit ===
    "below_package_price"
  ) {
    concerns.push(
      budgetExplanation
    );
  }

  /*
   * -------------------------------------------------------
   * 7. TOTAL SOLUTION RELEVANCE
   * -------------------------------------------------------
   *
   * This score answers:
   *
   * "How strongly do the answers match
   * the capabilities of Mjasiriamali Special?"
   *
   * Budget is NOT included here.
   */

  const totalScore =
    Object.values(
      capabilityScores
    ).reduce(
      (total, score) =>
        total + score,
      0
    );

  /*
   * -------------------------------------------------------
   * 8. SOLUTION FIT
   * -------------------------------------------------------
   *
   * IMPORTANT:
   *
   * No budget condition here.
   *
   * No automatic agency/team rejection here.
   *
   * No automatic conversion rejection here.
   */

  let fit: FitLevel;

  if (totalScore >= 16) {
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
    buildBusinessSituation(
      answers
    );

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

  /*
   * -------------------------------------------------------
   * 11. RETURN BUSINESS PROFILE
   * -------------------------------------------------------
   */

  return {
    answers,

    fit,

    budgetFit,

    capabilityScores,

    strongestCapabilities,

    strongestSignals:
      strongestSignals.slice(0, 5),

    concerns:
      concerns.slice(0, 5),

    businessSituation,

    packageRelevance,

    budgetExplanation,
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
  const situationParts: string[] =
    [];

  const structure =
    answers.marketing_structure;

  const responsibility =
    answers.marketing_responsibility;

  const friction =
    answers.marketing_friction;

  const challenge =
    answers.marketing_challenge;

  /*
   * MARKETING STRUCTURE
   */

  if (
    structure ===
    "rarely_marketing"
  ) {
    situationParts.push(
      "Marketing is currently done infrequently."
    );
  }

  if (
    structure === "occasionally"
  ) {
    situationParts.push(
      "Marketing happens when needed rather than through a fixed routine."
    );
  }

  if (
    structure ===
    "regularly_no_plan"
  ) {
    situationParts.push(
      "Marketing is happening regularly but without a clear strategy."
    );
  }

  if (
    structure ===
    "planned_approach"
  ) {
    situationParts.push(
      "The business already has a planned marketing approach."
    );
  }

  if (
    structure ===
    "team_or_agency"
  ) {
    situationParts.push(
      "The business already has an established marketing system."
    );
  }

  /*
   * MARKETING RESPONSIBILITY
   */

  if (
    responsibility === "self"
  ) {
    situationParts.push(
      "The owner currently handles marketing personally."
    );
  }

  if (
    responsibility ===
    "shared_employee"
  ) {
    situationParts.push(
      "Marketing is handled alongside other employee responsibilities."
    );
  }

  if (
    responsibility ===
    "marketing_team"
  ) {
    situationParts.push(
      "The business has an internal marketing team."
    );
  }

  if (
    responsibility ===
    "dedicated_person"
  ) {
    situationParts.push(
      "The business has a dedicated marketing person."
    );
  }

  if (
    responsibility === "agency"
  ) {
    situationParts.push(
      "The business already works with an external marketing partner."
    );
  }

  /*
   * MARKETING FRICTION
   */

  if (
    friction ===
    "limited_time_resources"
  ) {
    situationParts.push(
      "Limited time is making marketing difficult to maintain."
    );
  }

  if (
    friction === "unclear_focus"
  ) {
    situationParts.push(
      "The business is unsure what it should communicate."
    );
  }

  if (
    friction ===
    "content_consistency"
  ) {
    situationParts.push(
      "Creating marketing content consistently is difficult."
    );
  }

  if (
    friction ===
    "competing_priorities"
  ) {
    situationParts.push(
      "Other business priorities interfere with marketing."
    );
  }

  if (
    friction ===
    "improve_existing_system"
  ) {
    situationParts.push(
      "The business already has a marketing system but wants to improve it."
    );
  }

  /*
   * MARKETING CHALLENGE
   */

  if (
    challenge ===
    "not_enough_awareness"
  ) {
    situationParts.push(
      "The business needs to improve awareness among potential customers."
    );
  }

  if (
    challenge ===
    "attention_few_enquiries"
  ) {
    situationParts.push(
      "The business gets attention but is seeing relatively few enquiries."
    );
  }

  if (
    challenge ===
    "enquiries_few_customers"
  ) {
    situationParts.push(
      "The main marketing challenge is converting enquiries into customers."
    );
  }

  if (
    challenge ===
    "inconsistent_marketing"
  ) {
    situationParts.push(
      "Marketing activity and business growth are currently inconsistent."
    );
  }

  if (
    challenge ===
    "unclear_results"
  ) {
    situationParts.push(
      "The business is not sure which marketing activity is producing results."
    );
  }

  /*
   * FALLBACK
   */

  if (
    situationParts.length === 0
  ) {
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
  const capabilityText =
    capabilities.length > 0
      ? capabilities
          .map(
            (capability) =>
              capabilityNames[
                capability
              ] ?? capability
          )
          .join(", ")
      : "the identified marketing needs";

  /*
   * HIGH FIT
   */

  if (fit === "high") {
    return `The package directly relates to the business's identified needs, particularly ${capabilityText}.`;
  }

  /*
   * MEDIUM FIT
   */

  if (fit === "medium") {
    return `The package could address part of the business's needs, particularly ${capabilityText}. However, some aspects of the current situation may require additional or different support.`;
  }

  /*
   * LOW FIT
   */

  if (
    concerns.length > 0
  ) {
    return `The package may not directly address the business's primary need. ${concerns[0]}`;
  }

  return "The package does not appear to directly match the strongest needs identified in the assessment.";
}