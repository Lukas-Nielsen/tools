import { IconArrowsExchange } from "@tabler/icons-react";
import React, { useState } from "react";
import {
	Card,
	CopyButton,
	Group,
	Select,
	Stack,
	Textarea,
	Title,
	Tooltip,
} from "@mantine/core";
import classes from "../main.module.css";
import { useForm } from "@mantine/form";

const Convert = () => {
	type TMode = "string" | "hex" | "b64";

	interface selectOption {
		value: TMode;
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

	const [result, setResult] = useState<string>("");

	const handleChange = () => {
		const convertToResult = (str: string) => {
			switch (form.getValues().toMode) {
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
			switch (form.getValues().fromMode) {
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

		setResult(convertToResult(convertFromInput(form.getValues().from)));
	};

	const form = useForm<{
		from: string;
		to: string;
		fromMode: TMode;
		toMode: TMode;
	}>({
		initialValues: { from: "", to: "", fromMode: "string", toMode: "b64" },
		onValuesChange: handleChange,
	});

	const switchMode = () => {
		const tempFrom = form.getValues().fromMode;
		const tempTo = form.getValues().toMode;
		form.setFieldValue("fromMode", tempTo);
		form.setFieldValue("toMode", tempFrom);
	};

	return (
		<Card mb="xs" component={Stack}>
			<Title order={3}>konvertieren zwischen Formaten</Title>
			<Group wrap="nowrap">
				<Select
					key={form.key("fromMode")}
					{...form.getInputProps("fromMode")}
					data={modes}
					checkIconPosition="right"
				/>
				<IconArrowsExchange onClick={switchMode} />
				<Select
					key={form.key("toMode")}
					{...form.getInputProps("toMode")}
					data={modes}
					checkIconPosition="right"
				/>
			</Group>
			<Textarea
				key={form.key("from")}
				{...form.getInputProps("from")}
				placeholder="Zeichenkette"
				label="Eingabe"
			/>
			<CopyButton value={result}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Text kopiert" : "Text kopieren"}>
						<Textarea
							title="klicken zum Kopieren"
							onClick={copy}
							readOnly
							value={result}
							className={classes.copy}
							label="Ergebnis"
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
