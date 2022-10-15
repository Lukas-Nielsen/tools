import * as React from "react";
import * as Daisy from "react-daisyui";

const B64 = () => {
	const [b64, setB64] = React.useState("");
	const [str, setString] = React.useState("");

	function handleB64(e) {
		setB64(e.target.value);
		setString(window.atob(e.target.value));
	}

	function handleString(e) {
		setString(e.target.value);
		setB64(window.btoa(e.target.value));
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<h3>Zeichenkette &lt;&#61;&#61;&gt; Base64</h3>
			<h4>Zeichenkette</h4>
			<div className="p-4">
				<Daisy.Textarea className="w-full" placeholder="Zeichenkette" value={str} onChange={handleString}></Daisy.Textarea>
			</div>
			<h4>Base64</h4>
			<div className="p-4">
				<Daisy.Textarea className="w-full" placeholder="Base64" value={b64} onChange={handleB64}></Daisy.Textarea>
			</div>
		</div>
	);
};

export default B64;
