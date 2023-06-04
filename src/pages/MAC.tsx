import React, { ChangeEvent, useState } from "react";
import Copy from "../functions/copy";

const Mac = () => {
	const [mac, setMac] = useState({
		lower: "",
		upper: "",
		dash: "",
		colon: "",
	});

	const newFormat = (e: ChangeEvent<HTMLInputElement>) => {
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
	};

	return (
		<div className="card">
			<h3>MAC-Adresse formatieren</h3>
			<div className="px-4">
				<input placeholder="MAC-Adresse" onChange={newFormat}></input>
			</div>
			<h4>kleinbuchstaben</h4>
			<div
				className="copy"
				onClick={() => Copy(mac.lower, "MAC kopiert.")}
			>
				{mac.lower} &nbsp;
			</div>
			<h4>GROSSBUCHSTABEN</h4>
			<div
				className="copy"
				onClick={() => Copy(mac.upper, "MAC kopiert.")}
			>
				{mac.upper} &nbsp;
			</div>
			<h4>mit "-"</h4>
			<div
				className="copy"
				onClick={() => Copy(mac.dash, "MAC kopiert.")}
			>
				{mac.dash} &nbsp;
			</div>
			<h4>mit ":"</h4>
			<div
				className="copy"
				onClick={() => Copy(mac.colon, "MAC kopiert.")}
			>
				{mac.colon} &nbsp;
			</div>
		</div>
	);
};

export default Mac;
