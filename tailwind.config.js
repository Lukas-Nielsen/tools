/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
		require("tailwindcss-themer")({
			defaultTheme: {
				extend: {
					colors: {
						primary: "#6750A4",
						"on-primary": "#FFFFFF",
						"primary-container": "#EADDFF",
						"on-primary-container": "#21005D",
						secondary: "#625B71",
						"on-secondary": "#FFFFFF",
						"secondary-container": "#E8DEF8",
						"on-secondary-container": "#1D192B",
						tertiary: "#7D5260",
						"on-tertiary": "#FFFFFF",
						"tertiary-container": "#FFD8E4",
						"on-tertiary-container": "#31111D",
						error: "#B3261E",
						"on-error": "#FFFFFF",
						"error-container": "#F9DEDC",
						"on-error-container": "#410E0B",
						background: "#FFFBFE",
						"on-background": "#1C1B1F",
						surface: "#F7F2F9",
						"on-surface": "#1C1B1F",
						outline: "#79747E",
						"surface-variant": "#E7E0EC",
						"on-surface-variant": "#49454F",

						success: "#81C784",
						"on-success": "#FFFFFF",
						info: "#4FC3F7",
						"on-info": "#FFFFFF",
					},
				},
			},
			themes: [
				{
					name: "dark",
					extend: {
						colors: {
							primary: "#D0BCFF",
							"on-primary": "#381E72",
							"primary-container": "#4F378B",
							"on-primary-container": "#EADDFF",
							secondary: "#CCC2DC",
							"on-secondary": "#332D41",
							"secondary-container": "#4A4458",
							"on-secondary-container": "#E8DEF8",
							tertiary: "#EFB8C8",
							"on-tertiary": "#492532",
							"tertiary-container": "#633B48",
							"on-tertiary-container": "#FFD8E4",
							error: "#F2B8B5",
							"on-error": "#601410",
							"error-container": "#8C1D18",
							"on-error-container": "#F9DEDC",
							background: "#1C1B1F",
							"on-background": "#E6E1E5",
							surface: "#26242A",
							"on-surface": "#E6E1E5",
							outline: "#938F99",
							"surface-variant": "#49454F",
							"on-surface-variant": "#CAC4D0",

							success: "#388E3C",
							"on-success": "#4F378B",
							info: "#0288D1",
							"on-info": "#4F378B",
						},
					},
				},
			],
		}),
	],
};
