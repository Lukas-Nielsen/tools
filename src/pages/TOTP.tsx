import React, { useEffect, useState } from "react";
import { base32 } from "@otplib/plugin-base32-scure";
import { crypto } from "@otplib/plugin-crypto-web";
import { generate, getRemainingTime } from "@otplib/totp";
import { Box, Card, Code, CopyButton, Fieldset, Group, Stack, Text, TextInput, Title, Tooltip } from "@mantine/core";
import { useField } from "@mantine/form";
import { useInterval } from "@mantine/hooks";
import classes from "../main.module.css";

const TOTP = () => {
	const [result, setResult] = useState<string>("");
	const [timer, setTimer] = useState<number>(0);
	useInterval(
		() => {
			setTimer(getRemainingTime());
		},
		1000,
		{ autoInvoke: true }
	);

	const form = useField({
		initialValue: "",
	});

	useEffect(() => {
		if (form.getValue().length !== 0) {
			const interval = setInterval(() => {
				generate({
					secret: form.getValue(),
					crypto,
					base32,
				}).then((token) => {
					setResult(token);
				});
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [form.getValue()]);

	return (
		<Card mb="xs">
			<Fieldset m={0} p={0} component={Stack} bd={0} bg="inherit">
				<Title order={3}>TOTP</Title>
				<TextInput key={form.key} {...form.getInputProps()} placeholder="TOTP Secret" label="TOTP Secret" />
				<Stack gap="xs">
					<Group justify="space-evenly">
						<Box>
							<Title order={4} ta="center">
								Timer
							</Title>
							<Text c={timer < 5 ? "red" : "green"} ta="center">
								{timer} Sek.
							</Text>
						</Box>
						<Box>
							<Title order={4} ta="center">
								Code
							</Title>
							<CopyButton value={result}>
								{({ copied, copy }) => (
									<Tooltip label={copied ? "Code kopiert" : "Code kopieren"}>
										<Code onClick={copy} className={classes.copy} ta="center">
											{result.substring(0, 3)}&nbsp;{result.substring(3, 6)}
										</Code>
									</Tooltip>
								)}
							</CopyButton>
						</Box>
					</Group>
				</Stack>
			</Fieldset>
		</Card>
	);
};

export default TOTP;
