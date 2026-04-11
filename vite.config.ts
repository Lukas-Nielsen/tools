import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";
import oxlintPlugin from "vite-plugin-oxlint";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	lint: { options: { typeAware: true, typeCheck: true } },
	fmt: {
		proseWrap: "always",
		singleQuote: false,
		tabWidth: 4,
		useTabs: true,
		printWidth: 80,
		sortPackageJson: false,
		ignorePatterns: ["node_modules/**", "build/**"],
	},
	plugins: [react(), oxlintPlugin()],
	resolve: {
		alias: {
			"@tabler/icons-react":
				"@tabler/icons-react/dist/esm/icons/index.mjs",
		},
	},
	base: "/",
	server: { open: true },
	build: { emptyOutDir: true, outDir: "./build" },
});
