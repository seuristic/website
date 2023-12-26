import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        default: colors.slate,
        accent: colors.blue,
      },
    },
  },
  plugins: [],
};
export default config;
