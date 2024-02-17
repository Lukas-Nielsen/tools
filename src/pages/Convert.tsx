import { IconArrowsExchange } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import {
	Card,
	CopyButton,
	Group,
	Select,
	Textarea,
	Tooltip,
} from "@mantine/core";

const Convert = () => {
	interface selectOption {
		value: string;
		label: string;
	}

	const modes: selectOption[] = [
		{
			value: "string",
			label: "Zeichenkette",
		},
		{
			value: "b64",
			label: "base64",
		},
		{
			value: "hex",
			label: "HEX",
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
		<Card mb="xs">
			<Group>
				<Select
					value={fromMode}
					onChange={(e) => setFromMode(e || "")}
					data={modes}
					checkIconPosition="right"
				/>
				<IconArrowsExchange onClick={switchMode} />
				<Select
					value={toMode}
					onChange={(e) => setToMode(e || "")}
					data={modes}
					checkIconPosition="right"
				/>
			</Group>
			<h4>Eingabe</h4>
			<Textarea
				placeholder="Zeichenkette"
				value={from}
				onChange={(e) => setFrom(e.target.value)}
			/>
			<h4>Ergebnis</h4>
			<CopyButton value={to}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Text kopiert" : "Text kopieren"}>
						<Textarea
							title="klicken zum Kopieren"
							onClick={copy}
							readOnly
							value={to}
						/>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
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
