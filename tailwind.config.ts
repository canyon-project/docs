import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class", "[class~='dark']"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.tsx",
  ],
  prefix: "",
  theme: {},
  plugins: [],
} satisfies Config;

export default config;
