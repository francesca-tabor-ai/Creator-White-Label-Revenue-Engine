# Design System — Usage Guide

## Quick Start

```tsx
import { Button, Card, MetricCard, Skeleton } from "@/components/ui";
import { ArrowRight, TrendingUp } from "lucide-react";

// Primary CTA
<Button variant="primary" icon={ArrowRight} iconPosition="right">
  Get started
</Button>

// Metric card with animated value
<MetricCard
  label="Monthly Revenue"
  value={12345}
  variant="revenue"
  icon={TrendingUp}
  subtext="vs last month"
/>

// Card with revenue gradient
<Card variant="revenue">
  <h3>Payout Summary</h3>
  <p>...</p>
</Card>

// Loading state
<Skeleton width="100%" height={24} />
```

## Tailwind Classes

| Use Case | Class |
|----------|-------|
| Brand slate text | `text-brand-slate` |
| Emerald accent | `text-brand-emerald` or `bg-brand-emerald` |
| Design shadows | `shadow-design-sm`, `shadow-design-md`, `shadow-design-hover` |
| Border radius | `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` |
| Transitions | `transition-normal`, `duration-fast` |
| Entrance animation | `animate-fade-slide-up` |
| Mono font (metrics) | `font-mono` |

## CSS Variables

All tokens are available as CSS variables in `design-tokens.css`:

- `var(--color-slate)`, `var(--color-emerald)`
- `var(--radius-md)`, `var(--radius-lg)`
- `var(--shadow-md)`, `var(--shadow-hover)`
- `var(--transition-normal)`
