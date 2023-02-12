import * as React from "react";
import { toast } from "react-toastify";

const Mac = () => {
	function Copy(msg: string) {
		navigator.clipboard.writeText(msg);
		toast.info("MAC kopiert");
	}

	const [mac, setMac] = React.useState({
		lower: "",
		upper: "",
		dash: "",
		colon: "",
	});

	function newFormat(e: React.ChangeEvent<HTMLInputElement>) {
		let text = e.target.value;
		if (text.length === 12 || text.length === 17) {
			text = text.replaceAll(":", "");
			text = text.replaceAll("-", "");
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
		}
	}

	return (
		<div className="card">
			<h3>MAC-Adresse Formatieren</h3>
			<div className="p-4">
				<input placeholder="MAC-Adresse" onChange={newFormat}></input>
			</div>
			<h4>kleinbuchstaben</h4>
			<div className="copy" onClick={() => Copy(mac.lower)}>
				{mac.lower} &nbsp;
			</div>
			<h4>GROSSBUCHSTABEN</h4>
			<div className="copy" onClick={() => Copy(mac.upper)}>
				{mac.upper} &nbsp;
			</div>
			<h4>mit "-"</h4>
			<div className="copy" onClick={() => Copy(mac.dash)}>
				{mac.dash} &nbsp;
			</div>
			<h4>mit ":"</h4>
			<div className="copy" onClick={() => Copy(mac.colon)}>
				{mac.colon} &nbsp;
			</div>
		</div>
	);
};

export default Mac;
