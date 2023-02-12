import ReactDOM from "react-dom/client";
import { React } from "react";
import Main from "./Main";
import "./index.css";

export default function App() {
	return <Main />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
	document.querySelector("body").classList.add("dark");
} else {
	document.querySelector("body").classList.remove("dark");
}

const mql = window.matchMedia("(prefers-color-scheme: dark)");

mql.onchange = (e) => {
	if (!("theme" in localStorage)) {
		if (e.matches) {
			document.querySelector("body").classList.add("dark");
		} else {
			document.querySelector("body").classList.remove("dark");
		}
	}
};
