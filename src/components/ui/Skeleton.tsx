"use client";

import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Loading skeleton placeholder.
 * Aligns with design philosophy: "Animated skeleton screens, not spinners"
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-md)] bg-[var(--color-border-muted)]",
        className
      )}
      {...props}
    />
  );
}
