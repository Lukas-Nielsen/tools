/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "node_modules/daisyui/dist/**/*.js", "node_modules/react-daisyui/dist/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
};
