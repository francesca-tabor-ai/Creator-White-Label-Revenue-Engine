"use client";

import { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "revenue";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        "bg-[var(--color-surface)] border border-[var(--color-border)]",
      elevated:
        "bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-md)]",
      revenue:
        "bg-[var(--color-surface)] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-emerald-muted)] to-transparent",
    };

    const paddingStyles = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={`
          rounded-[var(--radius-lg)]
          transition-all duration-[var(--transition-normal)]
          hover:shadow-[var(--shadow-sm)]
          ${variantStyles[variant]}
          ${paddingStyles[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
