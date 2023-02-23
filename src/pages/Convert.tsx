import * as React from "react";
import { toast } from "react-toastify";
import Shuffle from "../icons/Shuffle";

const Convert = () => {
	function Copy(msg: string) {
		navigator.clipboard.writeText(msg);
		toast.info("Ergebnis kopiert");
	}

	type selectOption = {
		key: string;
		displayName: string;
	};

	const modes: selectOption[] = [
		{
			key: "string",
			displayName: "Zeichenkette",
		},
		{
			key: "b64",
			displayName: "base64",
		},
		{
			key: "hex",
			displayName: "HEX",
		},
		// {
		// 	key: "string",
		// 	displayName: "Zeichenkette"
		// }
	];

	const [from, setFrom] = React.useState("");
	const [to, setTo] = React.useState("");
	const [fromMode, setFromMode] = React.useState("string");
	const [toMode, setToMode] = React.useState("b64");

	// const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
	// 	setFrom(e.target.value);
	// 	setTo(convertToResult(convertFromInput(e.target.value)));
	// };

	React.useEffect(() => {
		const convertToResult = (str: string) => {
			switch (toMode) {
				case "b64":
					try {
						return window.btoa(str);
					} catch (error) {
						return str;
					}
				case "hex":
					try {
						return encodeToHex(str);
					} catch (error) {
						return str;
					}

				default:
					return str;
			}
		};

		const convertFromInput = (str: string) => {
			switch (fromMode) {
				case "b64":
					try {
						return window.atob(str);
					} catch (error) {
						return str;
					}
				case "hex":
					try {
						return decodeFromHex(str);
					} catch (error) {
						return str;
					}

				default:
					return str;
			}
		};
		setTo(convertToResult(convertFromInput(from)));
	}, [from, fromMode, toMode]);

	const switchMode = () => {
		const tempFrom = fromMode
		const tempTo = toMode
		setFromMode(tempTo)
		setToMode(tempFrom)
	}

	return (
		<div className="card">
			<div className="flex gap-2 child:w-full">
			<select value={fromMode} onChange={(e) => setFromMode(e.target.value)}>
				{modes.map((entry) => {
					return (
						<option key={entry.key} value={entry.key}>
							{entry.displayName}
						</option>
					);
				})}
			</select>
			<div className="!w-max pt-2 cursor-pointer" onClick={switchMode}><Shuffle /></div>
			<select value={toMode} onChange={(e) => setToMode(e.target.value)}>
				{modes.map((entry) => {
					return (
						<option key={entry.key} value={entry.key}>
							{entry.displayName}
						</option>
					);
				})}
			</select>
			</div>
			<h4>Eingabe</h4>
			<div className="p-4">
				<textarea className="w-full" placeholder="Zeichenkette" value={from} onChange={(e) => setFrom(e.target.value)}></textarea>
			</div>
			<h4>Ergebnis</h4>
			<div className="p-4 cursor-pointer break-words" title="klicken zum Kopieren" onClick={(e) => Copy(to)}>
				{to}
			</div>
		</div>
	);
};

export default Convert;

const toHex = (char: string = "") => {
	return char.charCodeAt(0).toString(16);
};

const encodeToHex = (str: string = "") => {
	return str.split("").map(toHex).join("");
};

const decodeFromHex = (hex: string = "") => {
	const result = [];
	for (let i = 0; i < hex.length; i += 2) {
		result.push(String.fromCharCode(parseInt(hex.substr(i, 2), 16)));
	}
	return result.join("");
};
