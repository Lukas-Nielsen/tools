import React, { useEffect, useState } from "react";
import { Card, Code, CopyButton, Tooltip } from "@mantine/core";

const IP = () => {
	const [ipv4, setIpv4] = useState<string>();
	const [ipv6] = useState<string>();

	useEffect(() => {
		const get = () => {
			fetch("https://ip4.lukasnielsen.de")
				.then((res) => {
					if (res.ok) {
						return res.text();
					}
					return undefined;
				})
				.then((text) => {
					setIpv4(text);
				})
				.catch(() => setIpv4(undefined));
		};
		const interval = setInterval(get, 60 * 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<Card mb="xs">
			<h4>IPv4 Adresse</h4>
			<CopyButton value={ipv4 || ""}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "IP kopiert" : "IP kopieren"}>
						<Code onClick={copy}>{ipv4 || "unbekannt"}</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>IPv6 Adresse</h4>
			<CopyButton value={ipv6 || ""}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "IP kopiert" : "IP kopieren"}>
						<Code onClick={copy}>{ipv6 || "unbekannt"}</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default IP;
