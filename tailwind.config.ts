import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      heading: ["Poppins", "system-ui", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      // Your custom color system
      "bg-primary": "rgb(var(--color-bg-primary) / <alpha-value>)",
      "bg-secondary": "rgb(var(--color-bg-secondary) / <alpha-value>)",
      "bg-tertiary": "rgb(var(--color-bg-tertiary) / <alpha-value>)",
      "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
      "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
      "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
      "accent-light": "rgb(var(--color-accent-light) / <alpha-value>)",
      "accent-dark": "rgb(var(--color-accent-dark) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
      warning: "rgb(var(--color-warning) / <alpha-value>)",

      // Orange palette
      orange: {
        50: "rgb(var(--color-orange-50) / <alpha-value>)",
        100: "rgb(var(--color-orange-100) / <alpha-value>)",
        200: "rgb(var(--color-orange-200) / <alpha-value>)",
        300: "rgb(var(--color-orange-300) / <alpha-value>)",
        400: "rgb(var(--color-orange-400) / <alpha-value>)",
        500: "rgb(var(--color-orange-500) / <alpha-value>)",
        600: "rgb(var(--color-orange-600) / <alpha-value>)",
        700: "rgb(var(--color-orange-700) / <alpha-value>)",
        800: "rgb(var(--color-orange-800) / <alpha-value>)",
        900: "rgb(var(--color-orange-900) / <alpha-value>)",
      },

      // Keep some standard colors for compatibility
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "slide-left": "slide-left 0.6s ease-out",
        "slide-right": "slide-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        orange: "0 4px 14px 0 rgba(254, 113, 90, 0.2)",
        "orange-lg": "0 10px 25px -3px rgba(254, 113, 90, 0.3)",
        "inner-orange": "inset 0 2px 4px 0 rgba(254, 113, 90, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
