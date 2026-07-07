import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem", // 20px mobile outer margin
        md: "2rem",
        lg: "5rem", // 80px desktop outer margin per grid spec
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px", // matches grid.desktop.max
      },
    },
    extend: {
      colors: {
        ink: {
          900: "#0B0D0F",
          700: "#3A3E44",
          400: "#8A8F98",
        },
        surface: {
          0: "#FFFFFF",
          50: "#F7F7F8",
          900: "#0B0D0F",
        },
        accent: {
          primary: "#1E3A5F",
          signal: "#B08D57",
        },
        border: {
          subtle: "#E4E5E7",
        },
        state: {
          success: "#2E7D5B",
          error: "#B3413E",
        },
        // shadcn/ui semantic aliases mapped onto the BD palette
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0B0D0F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F7F7F8",
          foreground: "#0B0D0F",
        },
        muted: {
          DEFAULT: "#F7F7F8",
          foreground: "#8A8F98",
        },
        destructive: {
          DEFAULT: "#B3413E",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-lg": ["1.75rem", { lineHeight: "1.3" }],
        "heading-md": ["1.375rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem", // 120px — space.8
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(11,13,15,0.04)",
        sm: "0 2px 8px rgba(11,13,15,0.06)",
        md: "0 8px 24px rgba(11,13,15,0.08)",
        lg: "0 16px 48px rgba(11,13,15,0.12)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        150: "150ms",
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
