import React, { useState } from "react";
import {
	Card,
	CopyButton,
	Select,
	Stack,
	Textarea,
	Title,
	Tooltip,
} from "@mantine/core";
import { json2csv, csv2json } from "json-2-csv";
import { useForm } from "@mantine/form";
import classes from "../main.module.css";

type TMode = "csv2json" | "json2csv";

const ConvertFile = () => {
	interface selectOption {
		value: TMode;
		label: string;
	}

	const modes: selectOption[] = [
		{ value: "json2csv", label: "JSON 2 CSV" },
		{ value: "csv2json", label: "CSV 2 JSON" },
	];

	const [result, setResult] = useState("");

	const handleChange = () => {
		switch (form.getValues().mode) {
			case "csv2json":
				try {
					setResult(JSON.stringify(csv2json(form.getValues().from)));
				} catch (error) {
					setResult("");
				}
				break;
			case "json2csv":
				try {
					setResult(
						json2csv(JSON.parse(form.getValues().from), {
							expandArrayObjects: true,
						}),
					);
				} catch (error) {
					setResult("");
				}
				break;
		}
	};

	const form = useForm<{ from: string; mode: TMode }>({
		initialValues: { from: "", mode: "json2csv" },
		onValuesChange: handleChange,
	});

	return (
		<Card mb="xs" component={Stack}>
			<Title order={3} mb="0">
				CSV/JSON Konverter
			</Title>
			<Select
				key={form.key("mode")}
				{...form.getInputProps("mode")}
				data={modes}
				checkIconPosition="right"
			/>
			<Textarea
				key={form.key("from")}
				{...form.getInputProps("from")}
				placeholder="Quelle"
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

export default ConvertFile;
