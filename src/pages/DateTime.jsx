import * as React from "react";
import * as Daisy from "react-daisyui";

const DateTime = () => {
	const [unix, setUnix] = React.useState((new Date().getTime() / 1000).toFixed(0));
	const [date, setDate] = React.useState(toIsoString(new Date()));

	function handleUnix(e) {
		setUnix(e.target.value);
		setDate(toIsoString(new Date(e.target.value * 1000)));
	}

	function handleDate(e) {
		setDate(e.target.value);
		setUnix(new Date(e.target.value).getTime() / 1000);
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<h3>Zeitrechner</h3>
			<h4>Unixtimestamp</h4>
			<div className="p-4">
				<Daisy.Input placeholder="Unixtimestamp" value={unix} onChange={handleUnix}></Daisy.Input>
			</div>
			<h4>Datum & Uhrzeit</h4>
			<div className="p-4">
				<Daisy.Input type={"datetime-local"} value={date} onChange={handleDate}></Daisy.Input>
			</div>
		</div>
	);
};

export default DateTime;

function toIsoString(date) {
	var pad = function (num) {
		return (num < 10 ? "0" : "") + num;
	};

	return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
}
