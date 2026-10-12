import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline";
type ButtonTone = "brand" | "dark" | "light";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  tone?: ButtonTone;
};

const buttonStyles = {
  solid: {
    brand:
      "border-brand bg-brand text-white hover:bg-brand-strong",
    dark:
      "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700",
    light: "border-white bg-white text-neutral-900 hover:bg-neutral-100",
  },

  outline: {
    brand:
      "border-brand bg-transparent text-brand hover:bg-brand hover:text-white",
    dark:
      "border-neutral-800 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white",
    light:
      "border-white bg-transparent text-white hover:bg-white hover:text-neutral-900",
  },
};

export default function Button({
  variant = "solid",
  tone = "brand",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center",
        "whitespace-nowrap rounded-md border px-4 py-2.5",
        "text-[13px] font-semibold sm:px-5 sm:py-3 sm:text-sm",
        "transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(0,0,0,0.14)]",
        "active:translate-y-0 active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        buttonStyles[variant][tone],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
