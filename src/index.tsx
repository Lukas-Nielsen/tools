import { createRoot } from "react-dom/client";
import React from "react";
import Main from "./Main";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "dayjs/locale/de";
import { DatesProvider } from "@mantine/dates";

const element = document.querySelector("#root");
if (element) {
	const root = createRoot(element);
	root.render(
		<MantineProvider defaultColorScheme="auto">
			<DatesProvider settings={{ locale: "de" }}>
				<Main />
			</DatesProvider>
		</MantineProvider>,
	);
}
