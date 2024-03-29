import { Card, Input } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";

const DateTime = () => {
	const [unix, setUnix] = useState<string>(
		(new Date().getTime() / 1000).toFixed(0),
	);
	const [date, setDate] = useState<string>(toIsoString(new Date()));

	const handleUnix = (e: ChangeEvent<HTMLInputElement>) => {
		setUnix(e.target.value);
		setDate(toIsoString(new Date(parseInt(e.target.value) * 1000)));
	};

	const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value);
		setUnix((new Date(e.target.value).getTime() / 1000).toFixed(0));
	};

	return (
		<Card mb="xs">
			<h3>Zeitrechner</h3>
			<h4>Unixtimestamp</h4>
			<Input
				placeholder="Unixtimestamp"
				value={unix}
				onChange={handleUnix}
			/>
			<h4>Datum & Uhrzeit</h4>
			<Input type="datetime-local" value={date} onChange={handleDate} />
		</Card>
	);
};

export default DateTime;

const toIsoString = (date: Date) => {
	const pad = (num: number) => (num < 10 ? "0" : "") + num;

	return (
		date.getFullYear() +
		"-" +
		pad(date.getMonth() + 1) +
		"-" +
		pad(date.getDate()) +
		"T" +
		pad(date.getHours()) +
		":" +
		pad(date.getMinutes()) +
		":" +
		pad(date.getSeconds())
	);
};
