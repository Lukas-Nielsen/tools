import { Card, Fieldset, NumberInput, Stack, Title } from "@mantine/core";
import { DateInput, DateValue } from "@mantine/dates";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState } from "react";

dayjs.extend(customParseFormat);

const DateTime = () => {
	const [unix, setUnix] = useState<string>(
		(new Date().getTime() / 1000).toFixed(0),
	);
	const [date, setDate] = useState<DateValue>(new Date());

	const handleUnix = (e: string | number) => {
		const temp = Number(e);
		setUnix(temp.toFixed(0));
		setDate(new Date(temp * 1000));
	};

	const handleDate = (e: DateValue) => {
		if (e && e instanceof Date) {
			setDate(e);
			setUnix((e.getTime() / 1000).toFixed(0));
		}
	};

	return (
		<Card mb="xs">
			<Fieldset m={0} p={0} component={Stack} bd={0} bg="inherit">
				<Title order={3}>Zeitrechner</Title>
				<NumberInput
					value={unix}
					onChange={handleUnix}
					placeholder="Unixtimestamp"
					label="Unixtimestamp"
					hideControls
				/>
				<DateInput
					valueFormat="DD.MM.YYYY HH:mm:ss"
					value={date}
					onChange={handleDate}
					label="Datum & Uhrzeit"
				/>
			</Fieldset>
		</Card>
	);
};

export default DateTime;
