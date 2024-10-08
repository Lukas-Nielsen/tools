import React, { useEffect, useState } from "react";
import { IconRefresh } from "@tabler/icons-react";
import { Card, Code, CopyButton, Group, Tooltip } from "@mantine/core";
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
		<Card mb="xs">
			<Group>
				<h3>Passwörter</h3>
				<IconRefresh
					size={30}
					onClick={() => setPassword(generatePassword())}
					style={{ cursor: "pointer" }}
				/>
			</Group>
			<h4>8 Zeichen</h4>
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
			<h4>10 Zeichen</h4>
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
			<h4>18 Zeichen</h4>
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
			<h4>30 Zeichen</h4>
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

// const getPassword = (length: number) => {
// 	let password = "";
// 	// for (let i = 0; i < length; i++) {
// 	// 	const choice = random(0, 3);
// 	// 	if (choice === 0) {
// 	// 		password += randomLower();
// 	// 	} else if (choice === 1) {
// 	// 		password += randomUpper();
// 	// 	} else if (choice === 2) {
// 	// 		password += randomSymbol();
// 	// 	} else if (choice === 3) {
// 	// 		password += random(0, 9);
// 	// 	} else {
// 	// 		i--;
// 	// 	}
// 	// }
// 	return password;
// };

// const random = (min = 0, max = 1) => {
// 	return Math.floor(
// 		window.crypto.getRandomValues(new Uint32Array(1))[0] * (max + 1 - min) +
// 			min,
// 	);
// };

// const randomLower = () => {
// 	return String.fromCharCode(random(97, 122));
// };

// const randomUpper = () => {
// 	return String.fromCharCode(random(65, 90));
// };

// const randomSymbol = () => {
// 	const symbols = "$%@#&!?-.{}()[]<>";
// 	return symbols[random(0, symbols.length - 1)];
// };

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
