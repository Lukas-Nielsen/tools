import { typecheckPlugin } from "@jgoz/esbuild-plugin-typecheck";
import autoprefixer from "autoprefixer";
import * as esbuild from "esbuild";
import stylePlugin from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";
import eslint from "esbuild-plugin-eslint";

let ctx = await esbuild.context({
	entryPoints: ["src/index.tsx"],
	bundle: true,
	outfile: "public/assets/app.js",
	define: {
		"process.env.NODE_ENV": '"development"',
		"process.env.REACT_APP_API_HOST": '"http://localhost:8080"',
	},
	plugins: [
		typecheckPlugin({ watch: true }),
		stylePlugin({
			postcss: {
				plugins: [tailwindcss, autoprefixer],
			},
		}),
		eslint(),
	],
});

await ctx.watch();

await ctx.serve({
	servedir: "public",
	port: 3000,
});
