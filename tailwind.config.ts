import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				"dt-exl": { min: "1779px" },
				"dt-l-min": { min: "1366px" },
				"dt-xl": { max: "1660px" },
				"dt-l": { max: "1440px" },
				"tl-l": { max: "1280px" },
				"tl-p": { max: "1000px" },
				mb: { max: "767px" },
			},

			fontFamily: {
				Barlow: ["'Barlow Condensed', sans-serif"],
				Bebas: ["'Bebas Neue', sans-serif"],
				Patrick: ["'Patrick Hand', cursive"],
			},

			colors: {
				purple: "#B228E2",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio")],
};
export default config;
