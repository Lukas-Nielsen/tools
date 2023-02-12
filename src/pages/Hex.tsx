import * as React from "react";

const Hex = () => {
	const [hex, setHex] = React.useState("");
	const [str, setString] = React.useState("");

	function handleHex(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setHex(e.target.value);
		setString(decode(e.target.value));
	}

	function handleString(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setString(e.target.value);
		setHex(encode(e.target.value));
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<h3>Zeichenkette &lt;&#61;&#61;&gt; HEX</h3>
			<h4>Zeichenkette</h4>
			<div className="p-4">
				{/* <Daisy.Textarea className="w-full" placeholder="Zeichenkette" value={str} onChange={handleString}></Daisy.Textarea> */}
			</div>
			<h4>HEX</h4>
			<div className="p-4">
				{/* <Daisy.Textarea className="w-full" placeholder="HEX" value={hex} onChange={handleHex}></Daisy.Textarea> */}
			</div>
		</div>
	);
};

export default Hex;

const toHex = (char: string = "") => {
	return char.charCodeAt(0).toString(16);
};

const encode = (str: string = "") => {
	return str.split("").map(toHex).join("");
};

const decode = (hex: string = "") => {
	const result = [];
	for (let i = 0; i < hex.length; i += 2) {
		result.push(String.fromCharCode(parseInt(hex.substr(i, 2), 16)));
	}
	return result.join("");
};
