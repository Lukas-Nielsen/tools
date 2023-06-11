import { createRoot } from "react-dom/client";
import React from "react";
import Main from "./Main";
import "./index.css";

const element = document.querySelector("#root");
if (element) {
	const root = createRoot(element);
	root.render(<Main />);
}
