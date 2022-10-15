import * as React from "react";
import * as Daisy from "react-daisyui";
import sha256 from "crypto-js/sha256";
import sha1 from "crypto-js/sha1";
import md5 from "crypto-js/md5";
import hex from "crypto-js/enc-hex";

const Hash = () => {
	const [copy, setCopy] = React.useState(false);

	function Copy(msg) {
		navigator.clipboard.writeText(msg);
		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3 * 1000);
	}

	const [hash, setHash] = React.useState({
		md5: "",
		sha1: "",
		sha256: "",
	});

	function newHash(text) {
		setHash({
			md5: hex.stringify(md5(text)),
			sha1: hex.stringify(sha1(text)),
			sha256: hex.stringify(sha256(text)),
		});
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<h3>Hashes</h3>
			<div className="p-4">
				<Daisy.Input placeholder="was möchtest du hashen?" onChange={(e) => newHash(e.target.value)}></Daisy.Input>
			</div>
			<h4>MD5</h4>
			<div className="font-monospace font-bold text-sm sm:text-lg cursor-pointer" onClick={() => Copy(hash.md5)}>
				{hash.md5}
			</div>
			<h4>SHA1</h4>
			<div className="font-monospace font-bold text-xs sm:text-sm cursor-pointer" onClick={() => Copy(hash.sha1)}>
				{hash.sha1}
			</div>
			<h4>SHA256</h4>
			<div className="font-monospace font-bold text-[0.49rem] sm:text-[0.65rem] cursor-pointer" onClick={() => Copy(hash.sha256)}>
				{hash.sha256}
			</div>
			{copy && (
				<Daisy.Alert className="col-span-2 text-center" status="info">
					Passwort kopiert.
				</Daisy.Alert>
			)}
		</div>
	);
};

export default Hash;
