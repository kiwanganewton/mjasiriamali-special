import OpenAI from "openai";
import { assessmentConfig } from "@/components/assessment/assessment.config";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const answers = body.answers;

    if (!answers || typeof answers !== "object") {
      return Response.json(
        { error: "Invalid answers." },
        { status: 400 }
      );
    }

    const selectedAnswers = assessmentConfig.questions.map((question) => {
      const selectedOptionId = answers[question.id];

      const selectedOption = question.options.find(
        (option) => option.id === selectedOptionId
      );

      return {
        question: question.question,
        answer: selectedOption?.label ?? "Not answered",
      };
    });

    const response = await client.chat.completions.create({
      model: "grok-4.6",

      messages: [
        {
          role: "system",
          content: `
You are analyzing answers from a short business marketing assessment.

Your task is to create a very short recommendation based ONLY on the answers provided.

Return:
1. A short heading.
2. A short paragraph.

IMPORTANT WRITING RULES:

- Heading must be maximum 8 words.
- Paragraph must be maximum 45 words.
- Keep the language clear and natural.
- Speak directly to the business owner.
- Identify the most important pattern in their answers.
- Explain what appears to be their main marketing gap or need.
- Do not invent business information.
- Do not mention that you are an AI.
- Do not use bullet points.
- Do not use emojis.
- Do not give a long explanation.
- Do not promise specific business results.
- Do not recommend services that were not mentioned in the answers.

Example style:

Heading:
"Mjasiriamali may be a good fit"

Paragraph:
"Your biggest gap appears to be consistency. A structured monthly marketing plan and regular weekly content could help you maintain a clearer marketing routine without having to decide what to post from week to week."
          `,
        },
        {
          role: "user",
          content: JSON.stringify(selectedAnswers),
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
            required: ["heading", "paragraph"],
            additionalProperties: false,
          },
        },
      },
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("Grok returned an empty response.");
    }

    const recommendation = JSON.parse(content);

    return Response.json({
      recommendation,
    });
  } catch (error) {
    console.error("Recommendation error:", error);

    return Response.json(
      {
        error: "Failed to generate recommendation.",
      },
      {
        status: 500,
      }
    );
  }
}