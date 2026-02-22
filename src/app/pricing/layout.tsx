import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Creator Revenue Engine",
  description:
    "Simple, scalable pricing for Individual, Team, and Enterprise plans. Start your free trial today.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
