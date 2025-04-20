import React from "react";
import { Card, Code, CopyButton, Tooltip } from "@mantine/core";
import classes from "../main.module.css";
import { client } from "../func/client";
import { useFetch } from "@hyper-fetch/react";
import { DateInterval } from "@hyper-fetch/core";

const getIpV4 = client.createRequest<string>()({
	endpoint: "https://ip4.lukasnielsen.de",
});

const getIpV6 = client.createRequest<string>()({
	endpoint: "https://ip6.lukasnielsen.de",
});

const IP = () => {
	const { data: ip4 } = useFetch(getIpV4, {
		refreshTime: DateInterval.minute * 15,
		refresh: true,
	});
	const { data: ip6 } = useFetch(getIpV6, {
		refreshTime: DateInterval.minute * 15,
		refresh: true,
	});

	return (
		<Card mb="xs">
			<h4>IPv4 Adresse</h4>
			<CopyButton value={ip4 || ""}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "IP kopiert" : "IP kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{ip4 || "unbekannt"}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>IPv6 Adresse</h4>
			<CopyButton value={ip6 || ""}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "IP kopiert" : "IP kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{ip6 || "unbekannt"}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default IP;
