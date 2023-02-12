import * as React from "react";

const DateTime = () => {
	const [unix, setUnix] = React.useState<string>((new Date().getTime() / 1000).toFixed(0));
	const [date, setDate] = React.useState<string>(toIsoString(new Date()));

	function handleUnix(e: React.ChangeEvent<HTMLInputElement>) {
		setUnix(e.target.value);
		setDate(toIsoString(new Date(parseInt(e.target.value) * 1000)));
	}

	function handleDate(e: React.ChangeEvent<HTMLInputElement>) {
		setDate(e.target.value);
		setUnix((new Date(e.target.value).getTime() / 1000).toFixed(0));
	}

	return (
		<div className="card">
			<h3>Zeitrechner</h3>
			<h4>Unixtimestamp</h4>
			<div className="p-4">
				<input placeholder="Unixtimestamp" value={unix} onChange={handleUnix}></input>
			</div>
			<h4>Datum & Uhrzeit</h4>
			<div className="p-4">
				<input type="datetime-local" value={date} onChange={handleDate}></input>
			</div>
		</div>
	);
};

export default DateTime;

function toIsoString(date: Date) {
	const pad = function (num: number) {
		return (num < 10 ? "0" : "") + num;
	};

	return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
}
