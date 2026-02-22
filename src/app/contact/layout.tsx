import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Creator Revenue Engine",
  description:
    "Get in touch with the Creator Revenue Engine team. We'll get back to you as soon as possible.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
