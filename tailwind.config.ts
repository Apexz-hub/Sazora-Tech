import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0a0a12",
        surfaceHover: "#12121e",
        neonBlue: "#00f3ff",
        neonPurple: "#a855f7",
        neonPink: "#ff00ff",
        neonCyan: "#06b6d4",
        darkBlue: "#1e1b4b",
        darkPurple: "#2e1065",
      },
      boxShadow: {
        neonBlue: "0 0 5px #00f3ff, 0 0 20px #00f3ff",
        neonPurple: "0 0 5px #a855f7, 0 0 20px #a855f7",
        neonPink: "0 0 5px #ff00ff, 0 0 20px #ff00ff",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00f3ff, 0 0 10px #00f3ff" },
          "100%": { boxShadow: "0 0 20px #00f3ff, 0 0 40px #00f3ff" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

