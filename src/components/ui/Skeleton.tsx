"use client";

import { forwardRef } from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional: fixed width (e.g. "200px", "100%") */
  width?: string | number;
  /** Optional: fixed height (e.g. "20px", "1em") */
  height?: string | number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={`
          animate-pulse rounded-[var(--radius-sm)]
          bg-[var(--color-border-muted)]
          ${className}
        `}
        style={{
          ...(width && { width: typeof width === "number" ? `${width}px` : width }),
          ...(height && { height: typeof height === "number" ? `${height}px` : height }),
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
