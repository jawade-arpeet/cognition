import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const inputVariants = cva(
  "flex w-full border bg-transparent px-3 py-2 text-sm text-stone-50 placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 focus-visible:ring-offset-1 focus-visible:ring-offset-stone-950 disabled:cursor-not-allowed disabled:opacity-40 transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-stone-700 focus:border-stone-500",
        filled:
          "bg-stone-800/70 border-stone-700 focus:bg-stone-800 focus:border-stone-600",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10",
        lg: "h-12 px-4 text-base",
      },
      error: {
        true: "border-red-700 focus-visible:ring-red-700/50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      error: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      error,
      type = "text",
      leftElement,
      rightElement,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        <div className="relative">
          {leftElement && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
              {leftElement}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant, size, error, className }),
              leftElement && "pl-10",
              rightElement && "pr-10",
            )}
            ref={ref}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
              {rightElement}
            </div>
          )}
        </div>
        {errorMessage && (
          <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
