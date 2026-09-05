import react from "@vitejs/plugin-react";
import { oxfmt, oxlint } from "oxc-config-mantine";
import { defineConfig } from "vite-plus";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	lint: {
		...oxlint,
		overrides: [
			{
				files: ["**/scripts/**.ts"],
				rules: {
					"no-console": "off",
				},
			},
		],
	},
	fmt: {
		...oxfmt,
		useTabs: true,
		singleQuote: false,
		tabWidth: 4,
		sortPackageJson: true,
		printWidth: 150,
	},
	plugins: [react()],
	base: "/",
	server: { open: true },
	build: { emptyOutDir: true, outDir: "./build" },
});
