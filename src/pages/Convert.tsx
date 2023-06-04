import React, { useEffect, useState } from "react";
import Copy from "../functions/copy";
import { Swap } from "@phosphor-icons/react";

const Convert = () => {
	interface selectOption {
		key: string;
		displayName: string;
	}

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
	];

	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [fromMode, setFromMode] = useState("string");
	const [toMode, setToMode] = useState("b64");

	useEffect(() => {
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
		const tempFrom = fromMode;
		const tempTo = toMode;
		setFromMode(tempTo);
		setToMode(tempFrom);
	};

	return (
		<div className="card">
			<div className="flex gap-2 child:w-full">
				<select
					value={fromMode}
					onChange={(e) => setFromMode(e.target.value)}
				>
					{modes.map((entry) => {
						return (
							<option key={entry.key} value={entry.key}>
								{entry.displayName}
							</option>
						);
					})}
				</select>
				<div
					className="!w-max pt-2 cursor-pointer"
					onClick={switchMode}
				>
					<Swap />
				</div>
				<select
					value={toMode}
					onChange={(e) => setToMode(e.target.value)}
				>
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
				<textarea
					className="w-full"
					placeholder="Zeichenkette"
					value={from}
					onChange={(e) => setFrom(e.target.value)}
				></textarea>
			</div>
			<h4>Ergebnis</h4>
			<div
				className="p-4 cursor-pointer break-words"
				title="klicken zum Kopieren"
				onClick={() => Copy(to, "Ergebnis kopiert.")}
			>
				{to}
			</div>
		</div>
	);
};

export default Convert;

const toHex = (char = "") => {
	return char.charCodeAt(0).toString(16);
};

const encodeToHex = (str = "") => {
	return str.split("").map(toHex).join("");
};

const decodeFromHex = (hex = "") => {
	const result = [];
	for (let i = 0; i < hex.length; i += 2) {
		result.push(String.fromCharCode(parseInt(hex.substr(i, 2), 16)));
	}
	return result.join("");
};
