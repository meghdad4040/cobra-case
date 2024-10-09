import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				purple: "#3f3cbb",
				midnight: "#121063",
				metal: "#565584",
				tahiti: "#3ab7bf",
				silver: "#ecebff",
				"bubble-gum": "#ff77e9",
				bermuda: "#78dcca",
				brown: {
					50: "#fdf8f6",
					100: "#f2e8e5",
					200: "#eaddd7",
					300: "#e0cec7",
					400: "#d2bab0",
					500: "#bfa094",
					600: "#a18072",
					700: "#977669",
					800: "#846358",
					900: "#43302b",
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"fade-in": {
					from: {
						opacity: "0",
					},
					to: {
						opacity: "1",
					},
				},
				marquee: {
					"100%": {
						transform: "translateY(-50%)",
					},
				},
				flashing: {
					"0%, 100%": { opacity: "0.2" },
					"20%": { opacity: "1" },
				},
			},
			animation: {
				marquee: "marquee var(--marquee-duration) linear infinite",
				"fade-in": "fade-in 0.5s linear forwards",
				flashing: "flashing 1.4s infinite linear",
			},
		},
	},
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			"dim",
			"nord",
			"sunset",
		],
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
};
export default config;
