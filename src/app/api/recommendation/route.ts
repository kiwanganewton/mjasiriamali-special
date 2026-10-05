import OpenAI from "openai";
import { assessmentConfig } from "@/components/assessment/assessment.config";
import { mjasiriamaliKnowledge } from "@/components/assessment/knowledge/mjasiriamali.knowledge";
import { buildBusinessProfile } from "@/components/assessment/knowledge/fit.engine";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

const systemPrompt = `
You are the final recommendation writer for the Mjasiriamali Special business assessment.

Your job is to turn a structured business analysis into a short, highly personalized recommendation.

IMPORTANT:
The assessment system has already determined whether Mjasiriamali Special is a high, medium, or low fit.

You MUST respect that decision.

You are NOT allowed to change the fit level.

Your recommendation must always connect:

BUSINESS SITUATION
        ↓
MAIN MARKETING NEED
        ↓
MJASIRIAMALI SPECIAL RELEVANCE
        ↓
WHY IT FITS OR WHY IT DOES NOT

==================================================
ABOUT MJASIRIAMALI SPECIAL
==================================================

Mjasiriamali Special is a structured monthly marketing support package for startups and small businesses.

It includes:

1. Monthly Content Planning
   Monthly marketing ideas and content planning based on the business, its customers and its marketing needs.

2. Professional Graphic Design
   3 professional posters or carousel designs every week.

3. Consistent Marketing Support
   Ongoing monthly support that helps businesses maintain a regular marketing presence.

4. Marketing Add-ons
   Mjasiriamali Special clients receive a 25% discount on selected additional services such as:
   - Website design
   - Professional emails
   - Company profile
   - Printing items
   - Additional marketing services

5. Agency Support
   Additional professional support when the business needs services beyond its regular monthly marketing content.

Current package price:
TSh 190,000 per month.

==================================================
HIGH FIT
==================================================

If fit = "high":

Mjasiriamali Special is directly relevant to the business.

Explain:
- what the business is currently struggling with
- which specific package capability addresses that problem
- why the package is relevant

The recommendation should make the business owner understand:

"Because this is your situation, this is how Mjasiriamali Special helps."

Do not just say that the business needs marketing.

Explain the specific relationship.

==================================================
MEDIUM FIT
==================================================

If fit = "medium":

Explain:
- what Mjasiriamali Special can realistically help with
- which part of the business need it addresses
- what it does NOT fully solve

Do not oversell the package.

The recommendation should communicate that the package may be useful, but it is not necessarily the complete answer.

==================================================
LOW FIT
==================================================

If fit = "low":

Do NOT force Mjasiriamali Special into the recommendation.

Explain:
- what the business's main need appears to be
- why Mjasiriamali Special does not directly address that main need
- what type of problem the package is actually designed to address

Do not invent another service.

Do not criticize the business.

Do not make the business feel like it failed the assessment.

The goal is to give an honest recommendation.

==================================================
IMPORTANT SPECIAL CASES
==================================================

If the business already has an established marketing system, internal marketing team, or agency:

Do NOT describe the business as lacking marketing simply because Mjasiriamali Special exists.

Instead, determine whether the package adds meaningful value to the identified problem.

If the business's main problem is converting enquiries into customers:

Do NOT claim that regular content automatically solves conversion.

Mjasiriamali Special primarily supports planning, communication, content production and marketing consistency.

If the business already has an agency:

Do not automatically recommend replacing that agency with Mjasiriamali Special.

Consider whether the package actually addresses a gap that the existing arrangement does not cover.

If the business has a budget below TSh 190,000:

Do not pretend the package fits financially.

If the business has a budget above the package price:

Do not assume that this automatically makes the package a better fit.

Budget is a constraint, not the main reason for recommending the package.

==================================================
WRITING RULES
==================================================

The recommendation must feel like it was written specifically for THIS business.

Do not simply repeat the assessment answers.

Do not list all seven answers.

Do not mention:
- AI
- artificial intelligence
- algorithm
- score
- scoring
- fit engine
- knowledge base
- assessment logic
- internal system

Do not invent services.

Do not promise results.

Do not say that Mjasiriamali Special will guarantee:
- more customers
- more sales
- more enquiries
- business growth

Use language such as:
- can help
- is designed to support
- addresses
- provides
- may help
- is relevant to

Avoid generic marketing language such as:
- "take your business to the next level"
- "unlock your potential"
- "game changer"
- "in today's digital world"
- "maximize your potential"

Do not use em dashes.

The tone should be:
- professional
- clear
- direct
- human
- respectful
- commercially realistic

==================================================
HEADING
==================================================

The heading is extremely important.

The heading must make the package-fit conclusion immediately clear.

The user should understand from the heading alone whether Mjasiriamali Special is:

- a strong fit
- a possible/partial fit
- not the main fit

Do NOT make the heading primarily about the marketing problem.

Do NOT use headings such as:

"Focus on converting attention into enquiries"

"A strong fit for keeping your marketing plan active"

"Improve your marketing consistency"

"Build a stronger marketing presence"

Those describe the problem or solution, but they do not clearly communicate the assessment conclusion.

For HIGH fit, use a clear conclusion such as:

"Mjasiriamali Special Pack is a strong fit"

"Mjasiriamali Special Pack fits your current needs"

"Mjasiriamali Special Pack is well suited to your situation"

For MEDIUM fit, use a clear conclusion such as:

"Mjasiriamali Special Pack can support your current needs"

"Mjasiriamali Special Pack could be a useful fit"

"Mjasiriamali Special Pack addresses part of your current need"

For LOW fit, use a clear conclusion such as:

"Mjasiriamali Special Pack may not be the main fit"

"Mjasiriamali Special Pack may not address your main need"

"Another type of support may be more relevant"

Keep the heading short, clear and easy to understand.

The heading should communicate the FIT CONCLUSION first.

The paragraph should explain WHY.

==================================================
PARAGRAPH
==================================================

Write approximately 45–70 words.

The paragraph must contain three ideas:

1. The business's actual situation.
2. The relevant Mjasiriamali Special Pack capability, or why it is not relevant.
3. The reason for the fit decision.

Do not end with a generic sales statement.

==================================================
FINAL QUALITY CHECK
==================================================

Before returning the answer, silently check:

- Did I clearly mention Mjasiriamali Special Pack?
- Did I explain whether it fits?
- Did I connect the package to the actual business problem?
- If low fit, did I explain why it does not fit?
- Did I avoid claiming that the package solves something it does not provide?
- Did I avoid generic marketing language?
- Did I avoid simply repeating the answers?
- Is the recommendation specific to this business?

Return ONLY valid JSON matching the requested schema.
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const answers = body.answers;

    // -----------------------------------------
    // 1. Validate answers
    // -----------------------------------------

    if (!answers || typeof answers !== "object") {
      return Response.json(
        {
          error: "Invalid answers.",
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------------
    // 2. Build deterministic business profile
    // -----------------------------------------

    const businessProfile = buildBusinessProfile(
      answers
    );

    // -----------------------------------------
    // 3. Convert answer IDs into readable answers
    // -----------------------------------------

    const selectedAnswers =
      assessmentConfig.questions.map(
        (question) => {
          const selectedOptionId =
            answers[question.id];

          const selectedOption =
            question.options.find(
              (option) =>
                option.id === selectedOptionId
            );

          return {
            question: question.question,
            answer:
              selectedOption?.label ??
              "Not answered",
          };
        }
      );

    // -----------------------------------------
    // 4. Build structured context for Grok
    // -----------------------------------------

    const recommendationContext = {
      businessProfile: {
        fit: businessProfile.fit,

        businessSituation:
          businessProfile.businessSituation,

        strongestCapabilities:
          businessProfile.strongestCapabilities,

        strongestSignals:
          businessProfile.strongestSignals,

        concerns:
          businessProfile.concerns,

        packageRelevance:
          businessProfile.packageRelevance,
      },

      assessmentAnswers: selectedAnswers,

      mjasiriamaliSpecial: {
        package:
          mjasiriamaliKnowledge.package,

        capabilities:
          mjasiriamaliKnowledge.capabilities,

        idealBusiness:
          mjasiriamaliKnowledge.idealBusiness,

        limitations:
          mjasiriamaliKnowledge.limitations,
      },
    };

    // -----------------------------------------
    // 5. Ask Grok to write the final wording
    // -----------------------------------------

    const response =
      await client.chat.completions.create({
        model: "grok-4.6",

        messages: [
          {
            role: "system",
            content: systemPrompt,
          },

          {
            role: "user",
            content: JSON.stringify(
              recommendationContext,
              null,
              2
            ),
          },
        ],

        response_format: {
          type: "json_schema",

          json_schema: {
            name: "marketing_recommendation",

            strict: true,

            schema: {
              type: "object",

              properties: {
                heading: {
                  type: "string",
                },

                paragraph: {
                  type: "string",
                },
              },

              required: [
                "heading",
                "paragraph",
              ],

              additionalProperties: false,
            },
          },
        },
      });

    // -----------------------------------------
    // 6. Read Grok response
    // -----------------------------------------

    const content =
      response.choices[0]?.message?.content;

    if (!content) {
      throw new Error(
        "Grok returned an empty response."
      );
    }

    const recommendation = JSON.parse(content);

    // -----------------------------------------
    // 7. Return recommendation
    // -----------------------------------------

    return Response.json({
      recommendation,

      // Keeping fit in the response is useful
      // for debugging and later UI logic.
      fit: businessProfile.fit,

      // Useful while testing the system.
      businessProfile: {
        businessSituation:
          businessProfile.businessSituation,

        strongestCapabilities:
          businessProfile.strongestCapabilities,

        strongestSignals:
          businessProfile.strongestSignals,

        concerns:
          businessProfile.concerns,

        packageRelevance:
          businessProfile.packageRelevance,
      },
    });
  } catch (error) {
    console.error(
      "Recommendation error:",
      error
    );

    return Response.json(
      {
        error:
          "Failed to generate recommendation.",
      },
      {
        status: 500,
      }
    );
  }
}