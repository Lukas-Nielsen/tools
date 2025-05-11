import React, { useEffect, useState } from "react";
import {
	Card,
	CopyButton,
	Fieldset,
	Input,
	SegmentedControl,
	Stack,
	TextInput,
	Textarea,
	Title,
	Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "../main.module.css";

const DHCP = () => {
	const [result, setResult] = useState<string>();

	const handleChange = () => {
		const macs = [
			...form
				.getValues()
				.mac.matchAll(/(?:[0-9A-Fa-f]{12}|[0-9A-Fa-f:-]{17})/g),
		];

		if (
			!/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g.test(
				form.getValues().net,
			)
		)
			return;

		const ip = ipToNumber(form.getValues().start);

		let callback = "";
		macs.map((item, index) => {
			const mac = item[0].replaceAll(/[^0-9A-Fa-f]/g, "");
			if (form.getValues().mode === "ps") {
				callback += `Add-DhcpServerv4Reservation -ScopeId ${form.getValues().net} -IPAddress ${numberToIP(ip + index)} -ClientId "${mac}" -Description "${form.getValues().desc || ""}"\n`;
			} else {
				callback += `netsh dhcp server scope ${form.getValues().net} add reservedip ${numberToIP(ip + index)} ${mac} "${form.getValues().desc || ""}"\n`;
			}
		});
		setResult(callback);
	};

	const form = useForm<{
		net: string;
		start: string;
		desc: string;
		mac: string;
		mode: "batch" | "ps";
	}>({
		initialValues: { desc: "", mac: "", net: "", start: "", mode: "ps" },
		onValuesChange: handleChange,
	});

	return (
		<Card mb="xs">
			<Fieldset m={0} p={0} component={Stack} bd={0} bg="inherit">
				<Title order={3}>DHCP-Reservierungen</Title>
				<Fieldset
					legend="Konsole"
					bd={0}
					bg="inherit"
					p={0}
					m={0}
					w="100%"
				>
					<SegmentedControl
						key={form.key("mode")}
						data={[
							{ label: "PowerShell", value: "ps" },
							{ label: "Batch", value: "batch" },
						]}
						{...form.getInputProps("mode")}
						fullWidth
						aria-label="Konsole"
					/>
				</Fieldset>
				<TextInput
					key={form.key("net")}
					{...form.getInputProps("net")}
					placeholder="192.168.178.0"
					label="Netz (192.168.178.0)"
				/>
				<TextInput
					key={form.key("start")}
					{...form.getInputProps("start")}
					placeholder="192.168.178.200"
					label="Start IP"
				/>
				<TextInput
					key={form.key("desc")}
					{...form.getInputProps("desc")}
					placeholder="IP-Telefon"
					label="Beschreibung"
				/>
				<Textarea
					key={form.key("mac")}
					{...form.getInputProps("mac")}
					placeholder={`000000000000\n00-00-00-00-00-00\n00:00:00:00:00:00`}
					label="MAC-Adressen"
					rows={3}
				/>
				<CopyButton value={result || ""}>
					{({ copied, copy }) => (
						<Tooltip
							label={copied ? "Text kopiert" : "Text kopieren"}
						>
							<Textarea
								label="Ergebnis"
								onClick={copy}
								readOnly
								value={result}
								className={classes.copy}
								aria-label="DHCP-Ergebnis"
							/>
						</Tooltip>
					)}
				</CopyButton>
			</Fieldset>
		</Card>
	);
};

const ipToNumber = (ip: string) =>
	ip
		.split(".")
		.reduce((sum, x, i) => sum + (parseInt(x) << (8 * (3 - i))), 0);

const numberToIP = (ip: number) =>
	[24, 16, 8, 0].map((n) => (ip >> n) & 0xff).join(".");

export default DHCP;
