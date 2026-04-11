import { Card, Fieldset, NumberInput, Stack, Title } from "@mantine/core";
import { DateTimePicker, DateValue } from "@mantine/dates";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState } from "react";

dayjs.extend(customParseFormat);

const DateTime = () => {
	const [unix, setUnix] = useState<number>(new Date().getTime() / 1000);
	const [date, setDate] = useState<DateValue>(new Date());

	const handleUnix = (v: string | number) => {
		const temp = Number(v);
		setUnix(temp);
		setDate(new Date(temp * 1000));
	};

	const handleDate = (v: string | null) => {
		if (v) {
			const date = new Date(v);
			setDate(date);
			setUnix(date.getTime() / 1000);
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
					allowDecimal={false}
					allowLeadingZeros={false}
				/>
				<DateTimePicker valueFormat="DD.MM.YYYY HH:mm:ss" value={date} onChange={handleDate} label="Datum & Uhrzeit" />
			</Fieldset>
		</Card>
	);
};

export default DateTime;
