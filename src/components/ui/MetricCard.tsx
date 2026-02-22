"use client";

import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "./Card";

export interface MetricCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: LucideIcon;
  animateValue?: boolean;
  variant?: "default" | "revenue";
}

export function MetricCard({
  label,
  value,
  subtext,
  icon: Icon,
  animateValue = true,
  variant = "default",
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(
    animateValue && typeof value === "number" ? 0 : value
  );

  useEffect(() => {
    if (!animateValue || typeof value !== "number") {
      setDisplayValue(value);
      return;
    }
    const duration = 800;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value, animateValue]);

  const valueClass =
    variant === "revenue"
      ? "text-[var(--color-emerald)] font-semibold tabular-nums"
      : "text-[var(--color-slate)] font-semibold tabular-nums";

  return (
    <Card variant={variant} padding="md">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon
              className="h-4 w-4 text-[var(--color-text-muted)]"
              strokeWidth={2}
            />
          )}
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
            {label}
          </span>
        </div>
        <span
          className={`text-2xl font-mono ${valueClass}`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {typeof displayValue === "number" && typeof value === "number"
            ? displayValue.toLocaleString()
            : displayValue}
        </span>
        {subtext && (
          <span className="text-xs text-[var(--color-text-subtle)]">
            {subtext}
          </span>
        )}
      </div>
    </Card>
  );
}
