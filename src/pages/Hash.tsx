import React, { ChangeEvent, useState } from "react";
import sha256 from "crypto-js/sha256";
import sha1 from "crypto-js/sha1";
import md5 from "crypto-js/md5";
import hex from "crypto-js/enc-hex";
import { Card, Code, CopyButton, Input, Tooltip } from "@mantine/core";
import classes from "../main.module.css";

const Hash = () => {
	const [hash, setHash] = useState({
		md5: "",
		sha1: "",
		sha256: "",
	});

	const newHash = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setHash({
			md5: hex.stringify(md5(text)),
			sha1: hex.stringify(sha1(text)),
			sha256: hex.stringify(sha256(text)),
		});
	};

	return (
		<Card mb="xs">
			<h3>Hashes</h3>
			<Input placeholder="was möchtest du hashen?" onChange={newHash} />
			<h4>MD5</h4>
			<CopyButton value={hash.md5}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Hash kopiert" : "Hash kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{hash.md5}&nbsp;
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>SHA1</h4>
			<CopyButton value={hash.sha1}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Hash kopiert" : "Hash kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{hash.sha1}&nbsp;
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<h4>SHA256</h4>
			<CopyButton value={hash.sha256}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Hash kopiert" : "Hash kopieren"}>
						<Code onClick={copy} className={classes.copy}>
							{hash.sha256}&nbsp;
						</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default Hash;
