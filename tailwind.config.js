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
						"primary-content": "#FFFFFF",
						"primary-container": "#EADDFF",
						"primary-container-content": "#21005D",
						secondary: "#625B71",
						"secondary-content": "#FFFFFF",
						"secondary-container": "#E8DEF8",
						"secondary-container-content": "#1D192B",
						tertiary: "#7D5260",
						"tertiary-content": "#FFFFFF",
						"tertiary-container": "#FFD8E4",
						"tertiary-container-content": "#31111D",
						error: "#B3261E",
						"error-content": "#FFFFFF",
						"error-container": "#F9DEDC",
						"error-container-content": "#410E0B",
						background: "#FFFBFE",
						"background-content": "#1C1B1F",
						surface: "#F7F2F9",
						"surface-content": "#1C1B1F",
						outline: "#79747E",
						"surface-variant": "#E7E0EC",
						"surface-variant-content": "#49454F",

						success: "#81C784",
						"success-content": "#FFFFFF",
						info: "#4FC3F7",
						"info-content": "#FFFFFF",
					},
				},
			},
			themes: [
				{
					name: "dark-theme",
					mediaQuery: "@media (prefers-color-scheme: dark)",
					extend: {
						colors: {
							primary: "#D0BCFF",
							"primary-content": "#381E72",
							"primary-container": "#4F378B",
							"primary-container-content": "#EADDFF",
							secondary: "#CCC2DC",
							"secondary-content": "#332D41",
							"secondary-container": "#4A4458",
							"secondary-container-content": "#E8DEF8",
							tertiary: "#EFB8C8",
							"tertiary-content": "#492532",
							"tertiary-container": "#633B48",
							"tertiary-container-content": "#FFD8E4",
							error: "#F2B8B5",
							"error-content": "#601410",
							"error-container": "#8C1D18",
							"error-container-content": "#F9DEDC",
							background: "#1C1B1F",
							"background-content": "#E6E1E5",
							surface: "#26242A",
							"surface-content": "#E6E1E5",
							outline: "#938F99",
							"surface-variant": "#49454F",
							"surface-variant-content": "#CAC4D0",

							success: "#388E3C",
							"success-content": "#4F378B",
							info: "#0288D1",
							"info-content": "#4F378B",
						},
					},
				},
			],
		}),
	],
};
