import * as React from "react";
import * as Daisy from "react-daisyui";

const Mac = () => {
	const [error, setError] = React.useState(false);
	const [copy, setCopy] = React.useState(false);

	function Copy(msg) {
		navigator.clipboard.writeText(msg);
		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3 * 1000);
	}

	const [mac, setMac] = React.useState({
		lower: "",
		upper: "",
		dash: "",
		colon: "",
	});

	function newFormat(text) {
		if (text.length === 12 || text.length === 17) {
			text = text.replaceAll(":", "");
			text = text.replaceAll("-", "");
			setError(false);
			setMac({
				lower: text.toLowerCase(),
				upper: text.toUpperCase(),
				dash: text
					.split(/(.{2})/)
					.filter((O) => O)
					.join("-"),
				colon: text
					.split(/(.{2})/)
					.filter((O) => O)
					.join(":"),
			});
		} else {
			setError(true);
		}
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<h3>MAC-Adresse Formatieren</h3>
			<div className="p-4">
				<Daisy.Input placeholder="MAC-Adresse" onChange={(e) => newFormat(e.target.value)}></Daisy.Input>
			</div>
			<h4>kleinbuchstaben</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(mac.lower)}>
				{mac.lower}
			</div>
			<h4>GROSSBUCHSTABEN</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(mac.upper)}>
				{mac.upper}
			</div>
			<h4>mit "-"</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(mac.dash)}>
				{mac.dash}
			</div>
			<h4>mit ":"</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(mac.colon)}>
				{mac.colon}
			</div>
			{copy && (
				<Daisy.Alert className="col-span-2 text-center" status="info">
					MAC-Adresse kopiert.
				</Daisy.Alert>
			)}
			{error && (
				<Daisy.Alert className="col-span-2 text-center" status="error">
					Die MAC-Adresse muss 12 oder 17 Zeichen haben.
				</Daisy.Alert>
			)}
		</div>
	);
};

export default Mac;
