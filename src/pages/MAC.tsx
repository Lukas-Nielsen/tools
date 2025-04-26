import React, { useState } from "react";
import {
	Card,
	Code,
	CopyButton,
	SegmentedControl,
	Stack,
	TextInput,
	Title,
	Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "../main.module.css";

const Mac = () => {
	const [result, setResult] = useState<string>("");

	const handleChange = () => {
		let r = form.getValues().mac;

		if (r.length === 12 || r.length === 17) {
			r = r.replaceAll(/[^A-Za-z0-9]/g, "");

			r =
				form.getValues().case === "lower"
					? r.toLowerCase()
					: r.toUpperCase();

			console.log(
				r
					.split(/(.{2})/)
					.filter((O) => O)
					.join(form.getValues().sep),
			);
			setResult(
				r
					.split(/(.{2})/)
					.filter((O) => O)
					.join(form.getValues().sep),
			);
			return;
		}
		setResult("");
	};

	const form = useForm<{
		mac: string;
		sep: "" | ":" | "-";
		case: "lower" | "upper";
	}>({
		initialValues: { mac: "", case: "lower", sep: "" },
		onValuesChange: handleChange,
	});

	return (
		<Card mb="xs" component={Stack}>
			<Title order={3}>MAC-Adresse formatieren</Title>
			<TextInput
				key={form.key("mac")}
				{...form.getInputProps("mac")}
				placeholder="MAC-Adresse"
				label="MAC-Adresse"
			/>
			<SegmentedControl
				key={form.key("case")}
				{...form.getInputProps("case")}
				size="xs"
				data={[
					{ label: "klein", value: "lower" },
					{ label: "GROSS", value: "upper" },
				]}
			/>
			<SegmentedControl
				key={form.key("sep")}
				{...form.getInputProps("sep")}
				data={[
					{ label: "ohne", value: "" },
					{ label: ":", value: ":" },
					{ label: "-", value: "-" },
				]}
			/>
			<Stack gap="xs">
				<Title order={4}>Ergebnis</Title>
				<CopyButton value={result}>
					{({ copied, copy }) => (
						<Tooltip
							label={copied ? "MAC kopiert" : "MAC kopieren"}
						>
							<Code onClick={copy} className={classes.copy}>
								{result}&nbsp;
							</Code>
						</Tooltip>
					)}
				</CopyButton>
			</Stack>
		</Card>
	);
};

export default Mac;
