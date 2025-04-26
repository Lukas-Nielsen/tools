import React, { useEffect, useState } from "react";
import { IconRefresh } from "@tabler/icons-react";
import {
	Card,
	Code,
	CopyButton,
	Group,
	Stack,
	Title,
	Tooltip,
} from "@mantine/core";
import classes from "../main.module.css";

const Password = () => {
	interface passwordType {
		a: string;
		b: string;
		c: string;
		d: string;
	}

	const [password, setPassword] = useState<passwordType>({
		a: "",
		b: "",
		c: "",
		d: "",
	});

	useEffect(() => {
		setPassword(generatePassword());
	}, []);

	return (
		<Card mb="xs" component={Stack}>
			<Group>
				<Title order={3}>Passwörter</Title>
				<IconRefresh
					size={24}
					onClick={() => setPassword(generatePassword())}
					style={{ cursor: "pointer" }}
				/>
			</Group>
			<Title order={4}>8 Zeichen</Title>
			<CopyButton value={password.a}>
				{({ copied, copy }) => (
					<Tooltip
						label={
							copied ? "Passwort kopiert" : "Passwort kopieren"
						}
					>
						<Code onClick={copy} className={classes.copy}>
							{password.a}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<Title order={4}>10 Zeichen</Title>
			<CopyButton value={password.b}>
				{({ copied, copy }) => (
					<Tooltip
						label={
							copied ? "Passwort kopiert" : "Passwort kopieren"
						}
					>
						<Code onClick={copy} className={classes.copy}>
							{password.b}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<Title order={4}>18 Zeichen</Title>
			<CopyButton value={password.c}>
				{({ copied, copy }) => (
					<Tooltip
						label={
							copied ? "Passwort kopiert" : "Passwort kopieren"
						}
					>
						<Code onClick={copy} className={classes.copy}>
							{password.c}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
			<Title order={4}>30 Zeichen</Title>
			<CopyButton value={password.d}>
				{({ copied, copy }) => (
					<Tooltip
						label={
							copied ? "Passwort kopiert" : "Passwort kopieren"
						}
					>
						<Code onClick={copy} className={classes.copy}>
							{password.d}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default Password;

const generatePassword = () => {
	return {
		a: getPassword(8),
		b: getPassword(10),
		c: getPassword(18),
		d: getPassword(30),
	};
};

const getPassword = (
	length = 20,
	characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$+*",
) => {
	const password = [];
	const maxMultiple = Math.floor(256 / characters.length) * characters.length;
	while (password.length < length) {
		const byte = crypto.getRandomValues(new Uint8Array(1))[0];
		if (byte < maxMultiple) {
			password.push(characters[byte % characters.length]);
		}
	}
	return password.join("");
};
