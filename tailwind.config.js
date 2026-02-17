/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0e17",
          card: "#111827",
          "card-hover": "#1a2235",
          accent: "#00d4aa",
          "accent-dim": "rgba(0, 212, 170, 0.2)",
          "accent-glow": "rgba(0, 212, 170, 0.33)",
          blue: "#4d9fff",
          danger: "#ff4d6a",
          warning: "#ffb84d",
        },
        text: {
          primary: "#e8edf5",
          muted: "#8892a4",
          dim: "#4a5568",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00d4aa, #00a3ff)",
        "gradient-dark": "linear-gradient(135deg, #0a0e17 0%, #111d35 100%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        bobble: "bobble 4s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "spin-slower": "spin 25s linear infinite reverse",
        "spin-slowest": "spin 20s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.05)" },
        },
        bobble: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(0, 212, 170, 0.33)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 8px transparent" },
        },
      },
    },
  },
  plugins: [],
};
