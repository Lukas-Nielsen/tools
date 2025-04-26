import React from "react";
import { Button, Card, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

const DID = () => {
	const form = useForm<{ base: string; start: number; end: number }>({
		initialValues: { base: "", start: 10, end: 99 },
	});

	const handleDownload = () => {
		let data = "";
		for (let i = form.getValues().start; i <= form.getValues().end; i++) {
			data += `${form.getValues().base}${i}\n`;
		}
		const element = document.createElement("a");
		const file = new Blob([data], {
			type: "text/csv",
		});
		element.href = URL.createObjectURL(file);
		element.download = `${form.getValues().base.replace(/[^\d]/, "")}.csv`;
		document.body.appendChild(element);
		element.click();
		element.remove();
	};

	return (
		<Card mb="xs">
			<Stack>
				<Title order={3} mb="0">
					DID Generator
				</Title>
				<TextInput
					key={form.key("base")}
					{...form.getInputProps("base")}
					placeholder="+49466198022"
					label="Baisnummer"
				/>
				<TextInput
					key={form.key("start")}
					{...form.getInputProps("start")}
					placeholder="10"
					label="Block Start"
				/>
				<TextInput
					key={form.key("end")}
					{...form.getInputProps("end")}
					placeholder="10"
					label="Block Ende"
				/>
				<Button onClick={handleDownload}>Download</Button>
			</Stack>
		</Card>
	);
};

export default DID;
