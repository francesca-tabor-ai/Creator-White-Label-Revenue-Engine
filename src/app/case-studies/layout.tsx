import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Creator Revenue Engine",
  description:
    "Real results from creator economy leaders. See how agencies and MCNs scale creator monetization.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
