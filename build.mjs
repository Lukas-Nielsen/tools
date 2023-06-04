import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import * as esbuild from "esbuild";
import stylePlugin from "esbuild-style-plugin";

await esbuild.build({
	entryPoints: ["src/index.tsx"],
	bundle: true,
	outfile: "public/assets/app.js",
	minify: true,
	define: {
		"process.env.NODE_ENV": '"prduction"',
		"process.env.REACT_APP_API_HOST": '""',
	},
	plugins: [
		stylePlugin({
			postcss: {
				plugins: [tailwindcss, autoprefixer],
			},
		}),
	],
});
