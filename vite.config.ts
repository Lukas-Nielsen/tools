import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import oxlintPlugin from "vite-plugin-oxlint";

export default defineConfig({
	plugins: [
		react(),
		oxlintPlugin(),
		VitePWA({
			registerType: "autoUpdate",
			manifest: false,
			workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] },
			devOptions: { enabled: true },
		}),
	],
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
