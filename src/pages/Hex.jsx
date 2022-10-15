import * as React from "react";
import * as Daisy from "react-daisyui";
import * as HEX from "hex-encode-decode";

const Hex = () => {
	const [hex, setHex] = React.useState("");
	const [str, setString] = React.useState("");

	function handleHex(e) {
		setHex(e.target.value);
		setString(HEX.decode(e.target.value));
	}

	function handleString(e) {
		setString(e.target.value);
		setHex(HEX.encode(e.target.value));
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<h3>Zeichenkette &lt;&#61;&#61;&gt; HEX</h3>
			<h4>Zeichenkette</h4>
			<div className="p-4">
				<Daisy.Textarea className="w-full" placeholder="Zeichenkette" value={str} onChange={handleString}></Daisy.Textarea>
			</div>
			<h4>HEX</h4>
			<div className="p-4">
				<Daisy.Textarea className="w-full" placeholder="HEX" value={hex} onChange={handleHex}></Daisy.Textarea>
			</div>
		</div>
	);
};

export default Hex;
