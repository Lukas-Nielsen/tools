import { Card, Code, CopyButton, Fieldset, Group, NumberInput, Select, Stack, Switch, TextInput, Title, Tooltip } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconRefresh } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

import classes from "../main.module.css";
import wordsDE from "../words/de.json";
import wordsEN from "../words/en.json";

type TLanguage = "de" | "en";

const WORDS: Record<TLanguage, string[]> = {
	de: wordsDE,
	en: wordsEN,
};

function getRandomWord(lang: TLanguage) {
	return WORDS[lang][Math.floor(Math.random() * WORDS[lang].length)];
}

interface IForm {
	wordCount: number;
	delimiter: string;
	capitalize: boolean;
	language: TLanguage;
}

export const Passphrase = () => {
	const form = useForm<IForm>({
		initialValues: {
			capitalize: true,
			delimiter: "-",
			wordCount: 6,
			language: "en",
		},
		onValuesChange: () => generate(),
	});

	const [phrase, setPhrase] = useState("");

	const generate = () => {
		const v = form.getValues();
		const parts = Array.from({ length: v.wordCount }, () => getRandomWord(v.language));
		const formatted = parts.map((w) => (v.capitalize ? w[0].toUpperCase() + w.slice(1) : w[0].toLowerCase() + w.slice(1)));
		setPhrase(formatted.join(v.delimiter));
	};

	useEffect(generate, []);

	return (
		<Card mb="xs">
			<Fieldset m={0} p={0} component={Stack} bd={0} bg="inherit">
				<Group>
					<Title order={3}>Passphrase</Title>
					<IconRefresh size={24} onClick={generate} style={{ cursor: "pointer" }} />
				</Group>

				<Select
					label="Sprache der Wörter"
					key={form.key("language")}
					data={[
						{ value: "de", label: "deutsch" },
						{ value: "en", label: "englisch" },
					]}
					checkIconPosition="right"
					{...form.getInputProps("language")}
				/>

				<NumberInput
					label="Anzahl der Wörter"
					key={form.key("wordCount")}
					min={1}
					max={12}
					allowLeadingZeros={false}
					allowDecimal={false}
					allowNegative={false}
					clampBehavior="strict"
					{...form.getInputProps("wordCount")}
				/>

				<TextInput label="Trennzeichen" key={form.key("delimiter")} placeholder="-" maxLength={1} {...form.getInputProps("delimiter")} />

				<Switch label="Wortänfänge großschreiben" key={form.key("capitalize")} {...form.getInputProps("capitalize", { type: "checkbox" })} />

				{phrase && (
					<CopyButton value={phrase}>
						{({ copied, copy }) => (
							<Tooltip label={copied ? "Passphrase kopiert" : "Passphrase kopieren"}>
								<Code mt="md" onClick={copy} className={classes.copy}>
									{phrase}
								</Code>
							</Tooltip>
						)}
					</CopyButton>
				)}
			</Fieldset>
		</Card>
	);
};

export default Passphrase;
