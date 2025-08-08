import React from "react";
import { Card, Code, CopyButton, Stack, Title, Tooltip } from "@mantine/core";
import classes from "../main.module.css";
import { clientV4, clientV6 } from "../func/client";
import { useFetch } from "@hyper-fetch/react";
import { Time } from "@hyper-fetch/core";

const getIpV4 = clientV4.createRequest<{ response: string }>()({
	endpoint: "",
});

const getIpV6 = clientV6.createRequest<{ response: string }>()({
	endpoint: "",
});

const IP = () => {
	const { data: ip4 } = useFetch(getIpV4, {
		refreshTime: Time.MIN * 15,
		refresh: true,
	});
	const { data: ip6 } = useFetch(getIpV6, {
		refreshTime: Time.MIN * 15,
		refresh: true,
	});

	return (
		<Card mb="xs" component={Stack}>
			<Title order={4}>IPv4 Adresse</Title>
			<CopyButton value={ip4 || ""}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "IP kopiert" : "IP kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{ip4 || "unbekannt"}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<Title order={4}>IPv6 Adresse</Title>
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
