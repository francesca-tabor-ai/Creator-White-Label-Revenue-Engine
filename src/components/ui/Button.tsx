"use client";

import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<
  ButtonVariant,
  string
> = {
  primary:
    "bg-[var(--color-emerald)] text-white border-transparent hover:bg-[var(--color-emerald-hover)] hover:shadow-[var(--shadow-hover)]",
  secondary:
    "bg-transparent text-[var(--color-slate)] border-[var(--color-border)] hover:bg-[var(--color-border-muted)] hover:border-[var(--color-slate)]",
  ghost:
    "bg-transparent text-[var(--color-slate)] border-transparent hover:bg-[var(--color-border-muted)]",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      isLoading = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center rounded-[var(--radius-md)]
          font-medium transition-all duration-200 ease-out
          border
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
            )}
            {children}
            {Icon && iconPosition === "right" && (
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
