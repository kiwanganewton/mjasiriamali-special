"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/button";
import {
  assessmentConfig,
  type AssessmentAnswers,
} from "./assessment.config";

type AssessmentStep = "intro" | "questions" | "whatsapp" | "success";

type Recommendation = {
  heading: string;
  paragraph: string;
};

const TOTAL_QUESTIONS = assessmentConfig.questions.length;

function normalizeTanzaniaPhone(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("255")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `255${digits.slice(1)}`;
  }

  return digits;
}

function isValidTanzaniaPhone(value: string) {
  const normalized = normalizeTanzaniaPhone(value);
  return /^255(6|7|8|9)\d{8}$/.test(normalized);
}

export default function Assessment() {
  const [step, setStep] = useState<AssessmentStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [error, setError] = useState("");

const [recommendation, setRecommendation] =
  useState<Recommendation | null>(null);

const [isGeneratingRecommendation, setIsGeneratingRecommendation] =
  useState(false);
  const question = assessmentConfig.questions[currentQuestion];

  const progress = useMemo(() => {
    if (step === "intro") return 0;
    if (step === "whatsapp" || step === "success") return 100;

    return ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;
  }, [step, currentQuestion]);

  const handleStart = () => {
    setError("");
    setStep("questions");
  };

  const handleSelect = (optionId: string) => {
    setError("");

    setAnswers((previous) => ({
      ...previous,
      [question.id]: optionId,
    }));
  };



const generateRecommendation = async () => {
  setError("");
  setIsGeneratingRecommendation(true);

  try {
    const response = await fetch("/api/recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate recommendation");
    }

    const data = await response.json();

    setRecommendation(data.recommendation);
    setStep("whatsapp");
  } catch (error) {
    console.error(error);

    setError(
      "We couldn't prepare your recommendation right now. Please try again."
    );
  } finally {
    setIsGeneratingRecommendation(false);
  }
};






  const handleNext = () => {
    if (!answers[question.id]) {
      setError(assessmentConfig.errors.answerRequired);
      return;
    }

    setError("");

   if (currentQuestion === TOTAL_QUESTIONS - 1) {
  generateRecommendation();
  return;
}

    setCurrentQuestion((previous) => previous + 1);
  };

  const handleBack = () => {
    setError("");

    if (currentQuestion === 0) {
      setStep("intro");
      return;
    }

    setCurrentQuestion((previous) => previous - 1);
  };

  const handleWhatsAppSubmit = () => {
    if (!isValidTanzaniaPhone(whatsappNumber)) {
      setError(assessmentConfig.errors.invalidPhone);
      return;
    }

    setError("");

    const normalizedNumber = normalizeTanzaniaPhone(whatsappNumber);

    console.log({
      answers,
      whatsappNumber: normalizedNumber,
    });

    setStep("success");
  };

  const handleSkipWhatsApp = () => {
    setError("");
    setStep("success");
  };

  return (
    <div className="min-h-full bg-white">
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {step === "intro" && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="flex min-h-[600px] flex-col justify-center"
            >
              <div className="max-w-2xl">
                <h1 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-600 sm:text-[28px]">
                  {assessmentConfig.intro.title}
                </h1>

                <p className="mt-4 max-w-xl text-[15px] leading-[1.6] text-neutral-500 sm:text-[16px]">
                  {assessmentConfig.intro.description}
                </p>

                <div className="mt-7">
                  <Button
                    type="button"
                    variant="solid"
                    tone="brand"
                    onClick={handleStart}
                    className="group rounded-sm px-5 py-2.5 text-[13px] font-semibold shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-none"
                  >
                    <span className="flex items-center gap-2">
                      {assessmentConfig.intro.button}

                      <ArrowRight
                        size={15}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.section>
          )}








{isGeneratingRecommendation && (
  <motion.section
    key="generating"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex min-h-[600px] items-center justify-center"
  >
    <div className="text-center">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[#c8102e]" />

      <p className="mt-5 text-[15px] font-medium text-neutral-700">
        Reviewing your answers...
      </p>

      <p className="mt-2 text-sm text-neutral-500">
        Preparing your recommendation.
      </p>
    </div>
  </motion.section>
)}










          {/* QUESTIONS */}
          {step === "questions" && (
            <motion.section
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8">
                <div className="h-[2px] w-full bg-neutral-200">
                  <motion.div
                    className="h-full bg-neutral-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>

              <h2 className="max-w-2xl text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-600 sm:text-[28px]">
                {question.question}
              </h2>

              <div className="mt-7 space-y-3">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(option.id)}
                      className={`group flex w-full items-center gap-4 rounded-md border px-5 py-4 text-left transition-colors focus:outline-none ${
                        isSelected
                          ? "border-neutral-300 bg-neutral-100"
                          : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected
                             ? "border-[#c8102e] bg-[#c8102e]"
                            : "border-neutral-300 bg-white group-hover:border-neutral-400"
                        }`}
                      >
                        {isSelected && (
                          <Check
                            size={12}
                            strokeWidth={2.5}
                            className="text-white"
                          />
                        )}
                      </span>

                      <span className="text-[15px] font-medium leading-6 text-neutral-700">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-600">{error}</p>
              )}

              <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="group inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  <ArrowLeft
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Back
                </button>

                <Button
                  type="button"
                  variant="solid"
                  tone="brand"
                  onClick={handleNext}
                  className="group rounded-sm px-5 py-2.5 text-[13px] font-semibold shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-none"
                >
                  <span className="flex items-center gap-2">
                    {currentQuestion === TOTAL_QUESTIONS - 1
                      ? "Continue"
                      : "Next"}

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Button>
              </div>
            </motion.section>
          )}

          {/* WHATSAPP */}
          {step === "whatsapp" && (
            <motion.section
              key="whatsapp"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="flex min-h-[600px] flex-col justify-center"
            >
              <div className="max-w-2xl">


                 {/* AI RECOMMENDATION */}
  {recommendation && (
    <div className="mb-10">
      <h2 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-700 sm:text-[28px]">
        {recommendation.heading}
      </h2>

      <p className="mt-4 max-w-xl text-[15px] leading-[1.6] text-neutral-500 sm:text-[16px]">
        {recommendation.paragraph}
      </p>
    </div>
  )}



                <div className="mb-8">
                  <div className="h-[2px] w-full bg-neutral-200">
                    <div className="h-full w-full bg-neutral-400" />
                  </div>
                </div>

                <h2 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-600 sm:text-[28px]">
                  {assessmentConfig.whatsapp.title}
                </h2>

                <p className="mt-4 max-w-xl text-[15px] leading-[1.6] text-neutral-500 sm:text-[16px]">
                  {assessmentConfig.whatsapp.description}
                </p>

                <div className="mt-8 border border-neutral-200 bg-neutral-50 p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-white text-neutral-600">
                      <MessageCircle size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.01em] text-neutral-600">
                        {assessmentConfig.whatsapp.heading}
                      </h3>

                      <ul className="mt-4 space-y-2">
                        {assessmentConfig.whatsapp.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-[14px] leading-6 text-neutral-500"
                          >
                            <Check
                              size={15}
                              strokeWidth={2}
                              className="mt-1 shrink-0 text-neutral-600"
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7">
                    <label
                      htmlFor="whatsapp-number"
                      className="mb-2 block text-[14px] font-medium text-neutral-600"
                    >
                      {assessmentConfig.whatsapp.label}
                    </label>

                    <input
                      id="whatsapp-number"
                      type="tel"
                      inputMode="tel"
                      value={whatsappNumber}
                      onChange={(event) => {
                        setWhatsappNumber(event.target.value);
                        setError("");
                      }}
                      placeholder={assessmentConfig.whatsapp.placeholder}
                      className="h-[52px] w-full rounded-md border border-neutral-200 bg-white px-4 text-[16px] text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-[#c8102e]"
                    />

                    {error && (
                      <p className="mt-3 text-sm text-red-600">{error}</p>
                    )}

                    <p className="mt-3 text-xs leading-5 text-neutral-500">
                      {assessmentConfig.whatsapp.consent}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={handleSkipWhatsApp}
                      className="text-[13px] font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {assessmentConfig.whatsapp.secondaryButton}
                    </button>

                    <Button
                      type="button"
                      variant="solid"
                      tone="brand"
                      onClick={handleWhatsAppSubmit}
                      className="group rounded-sm px-5 py-2.5 text-[13px] font-semibold shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-none"
                    >
                      <span className="flex items-center gap-2">
                        {assessmentConfig.whatsapp.button}

                        <ArrowRight
                          size={15}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </Button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBack}
                  className="group mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  <ArrowLeft
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Back
                </button>
              </div>
            </motion.section>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <motion.section
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-[600px] flex-col items-center justify-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-neutral-200 bg-neutral-50">
                <CheckCircle2
                  size={28}
                  strokeWidth={1.6}
                  className="text-neutral-600"
                />
              </div>

              <h2 className="mt-7 text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-600 sm:text-[28px]">
                {assessmentConfig.success.title}
              </h2>

              <p className="mt-4 max-w-lg text-[15px] leading-[1.6] text-neutral-500 sm:text-[16px]">
                {assessmentConfig.success.description}
              </p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}