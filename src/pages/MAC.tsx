import React, { ChangeEvent, useState } from "react";
import { Card, Code, CopyButton, Input, Tooltip } from "@mantine/core";

const Mac = () => {
	const [mac, setMac] = useState({
		lower: "",
		upper: "",
		dash: "",
		colon: "",
	});

	const newFormat = (e: ChangeEvent<HTMLInputElement>) => {
		let text = e.target.value;
		if (text.length === 12 || text.length === 17) {
			text = text.replaceAll(":", "");
			text = text.replaceAll("-", "");
			setMac({
				lower: text.toLowerCase(),
				upper: text.toUpperCase(),
				dash: text
					.split(/(.{2})/)
					.filter((O) => O)
					.join("-"),
				colon: text
					.split(/(.{2})/)
					.filter((O) => O)
					.join(":"),
			});
		}
	};

	return (
		<Card mb="xs">
			<h3>MAC-Adresse formatieren</h3>
			<Input placeholder="MAC-Adresse" onChange={newFormat} />
			<h4>kleinbuchstaben</h4>
			<CopyButton value={mac.lower}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "MAC kopiert" : "MAC kopieren"}>
						<Code onClick={copy}>{mac.lower}&nbsp;</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>GROSSBUCHSTABEN</h4>
			<CopyButton value={mac.upper}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "MAC kopiert" : "MAC kopieren"}>
						<Code onClick={copy}>{mac.upper}&nbsp;</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>mit "-"</h4>
			<CopyButton value={mac.dash}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "MAC kopiert" : "MAC kopieren"}>
						<Code onClick={copy}>{mac.dash}&nbsp;</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>mit ":"</h4>
			<CopyButton value={mac.colon}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "MAC kopiert" : "MAC kopieren"}>
						<Code onClick={copy}>{mac.colon}&nbsp;</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default Mac;
