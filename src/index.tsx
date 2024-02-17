import { createRoot } from "react-dom/client";
import React from "react";
import Main from "./Main";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const element = document.querySelector("#root");
if (element) {
	const root = createRoot(element);
	root.render(
		<MantineProvider defaultColorScheme="auto">
			<Main />
		</MantineProvider>,
	);
}
