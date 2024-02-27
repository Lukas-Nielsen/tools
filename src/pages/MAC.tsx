import React, { useState } from "react";
import {
	Card,
	Code,
	CopyButton,
	SegmentedControl,
	Stack,
	TextInput,
	Tooltip,
} from "@mantine/core";
import classes from "../main.module.css";

const Mac = () => {
	const [mac, setMac] = useState<string>("");
	const [macCase, setCase] = useState<string>("lower");
	const [sep, setSep] = useState<string>("");

	const format = () => {
		let r = mac;
		if (r.length === 12 || r.length === 17) {
			r = r.replaceAll(":", "");
			r = r.replaceAll("-", "");

			if (macCase === "lower") {
				r = r.toLowerCase();
			} else {
				r = r.toUpperCase();
			}

			return r
				.split(/(.{2})/)
				.filter((O) => O)
				.join(sep);
		}
		return "";
	};

	return (
		<Card mb="xs">
			<h3>MAC-Adresse formatieren</h3>
			<Stack>
				<TextInput
					placeholder="MAC-Adresse"
					value={mac}
					onChange={(e) => setMac(e.currentTarget.value)}
				/>
				<SegmentedControl
					size="xs"
					value={macCase}
					onChange={setCase}
					data={[
						{ label: "klein", value: "lower" },
						{ label: "GROSS", value: "upper" },
					]}
				/>
				<SegmentedControl
					size="xs"
					value={sep}
					onChange={setSep}
					data={[
						{ label: "ohne", value: "" },
						{ label: ":", value: ":" },
						{ label: "-", value: "-" },
					]}
				/>
			</Stack>
			<h4>Ergebis</h4>
			<CopyButton value={format()}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "MAC kopiert" : "MAC kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{format()}&nbsp;
						</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default Mac;
