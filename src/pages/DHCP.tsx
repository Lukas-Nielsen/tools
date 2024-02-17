import React, { useEffect, useState } from "react";
import { Card, CopyButton, Input, Textarea, Tooltip } from "@mantine/core";

export const DHCP = () => {
	const [net, setNet] = useState<string>();
	const [start, setStart] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [input, setInput] = useState<string>();
	const [result, setResult] = useState<string>();

	useEffect(() => {
		if (input && net && start) {
			const macs = [
				...input.matchAll(/(?:[0-9A-Fa-f]{12}|[0-9A-Fa-f:-]{17})/g),
			];

			if (!/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g.test(net))
				return;

			const ip = ipToNumber(start);

			let callback = "";
			macs.map((item, index) => {
				const mac = item[0].replaceAll(/[^0-9A-Fa-f]/g, "");

				callback += `netsh dhcp server scope ${net} add reservedip ${numberToIP(
					ip + index,
				)} ${mac} "${description || ""}"\n`;
			});
			setResult(callback);
		}
		setResult(undefined);
	}, [net, start, description, input]);

	return (
		<Card mb="xs">
			<h3>DHCP-Reservierungen</h3>
			<h4>Netz (192.168.178.0)</h4>
			<Input
				value={net}
				onChange={(e) => setNet(e.target.value)}
				placeholder="192.168.178.0"
			/>
			<h4>Start IP</h4>
			<Input
				value={start}
				onChange={(e) => setStart(e.target.value)}
				placeholder="192.168.178.200"
			/>
			<h4>Beschreibung</h4>
			<Input
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="IP-Telefon"
			/>
			<h4>MAC-Adressen</h4>
			<Textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<h4>Ergebnis</h4>
			<CopyButton value={result || ""}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Text kopiert" : "Text kopieren"}>
						<Textarea onClick={copy} readOnly value={result} />
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

const ipToNumber = (ip: string) =>
	ip
		.split(".")
		.reduce((sum, x, i) => sum + (parseInt(x) << (8 * (3 - i))), 0);

const numberToIP = (ip: number) =>
	[24, 16, 8, 0].map((n) => (ip >> n) & 0xff).join(".");
