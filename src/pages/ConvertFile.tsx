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
import { json2csv, csv2json } from "json-2-csv";
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

	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [mode, setMode] = useState<TMode>("json2csv");

	useEffect(() => {
		switch (mode) {
			case "csv2json":
				try {
					setTo(JSON.stringify(csv2json(from)));
				} catch (error) {
					setTo("");
				}
				break;
			case "json2csv":
				try {
					setTo(
						json2csv(JSON.parse(from), {
							expandArrayObjects: true,
						}),
					);
				} catch (error) {
					setTo("");
				}
				break;
		}
	}, [from, mode]);

	return (
		<Card mb="xs">
			<Group wrap="nowrap">
				<Select
					value={mode}
					onChange={(e) =>
						setMode((e as unknown as TMode) || "json2csv")
					}
					data={modes}
					checkIconPosition="right"
				/>
			</Group>
			<h4>Eingabe</h4>
			<Textarea
				placeholder="Quelle"
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
							className={classes.copy}
						/>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default ConvertFile;
