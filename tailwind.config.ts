import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-dm-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        /* Design system: Modern Fintech Minimalism */
        brand: {
          slate: "#1a1f36",
          emerald: "#10b981",
          "emerald-hover": "#059669",
        },
        /* Legacy (kept for backward compatibility) */
        teal: {
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        "design-sm": "var(--shadow-sm)",
        "design-md": "var(--shadow-md)",
        "design-lg": "var(--shadow-lg)",
        "design-hover": "var(--shadow-hover)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        "ease-out": "ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-slide-up": "fade-slide-up 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
