import React, { ChangeEvent, useState } from "react";
import sha256 from "crypto-js/sha256";
import sha1 from "crypto-js/sha1";
import md5 from "crypto-js/md5";
import hex from "crypto-js/enc-hex";
import {
	Card,
	Code,
	CopyButton,
	Fieldset,
	Input,
	Stack,
	TextInput,
	Title,
	Tooltip,
} from "@mantine/core";
import classes from "../main.module.css";

const Hash = () => {
	const [hash, setHash] = useState<string>("");
	const [hashList, setHashList] = useState<{
		md5: string;
		sha1: string;
		sha256: string;
	}>({
		md5: "",
		sha1: "",
		sha256: "",
	});

	const newHash = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setHash(text);
		setHashList({
			md5: hex.stringify(md5(text)),
			sha1: hex.stringify(sha1(text)),
			sha256: hex.stringify(sha256(text)),
		});
	};

	return (
		<Card mb="xs">
			<Fieldset m={0} p={0} component={Stack} bd={0} bg="inherit">
				<Title order={3}>Hashes</Title>
				<TextInput
					placeholder="was möchtest du hashen?"
					value={hash}
					onChange={newHash}
				/>
				<Title order={4}>MD5</Title>
				<CopyButton value={hashList.md5}>
					{({ copied, copy }) => (
						<Tooltip
							label={copied ? "Hash kopiert" : "Hash kopieren"}
						>
							<Code onClick={copy} className={classes.copy}>
								{hashList.md5}&nbsp;
							</Code>
						</Tooltip>
					)}
				</CopyButton>
				<Title order={4}>SHA1</Title>
				<CopyButton value={hashList.sha1}>
					{({ copied, copy }) => (
						<Tooltip
							label={copied ? "Hash kopiert" : "Hash kopieren"}
						>
							<Code onClick={copy} className={classes.copy}>
								{hashList.sha1}&nbsp;
							</Code>
						</Tooltip>
					)}
				</CopyButton>
				<Title order={4}>SHA256</Title>
				<CopyButton value={hashList.sha256}>
					{({ copied, copy }) => (
						<Tooltip
							label={copied ? "Hash kopiert" : "Hash kopieren"}
						>
							<Code onClick={copy} className={classes.copy}>
								{hashList.sha256}&nbsp;
							</Code>
						</Tooltip>
					)}
				</CopyButton>
			</Fieldset>
		</Card>
	);
};

export default Hash;
