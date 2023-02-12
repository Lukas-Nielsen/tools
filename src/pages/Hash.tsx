import * as React from "react";
import sha256 from "crypto-js/sha256";
import sha1 from "crypto-js/sha1";
import md5 from "crypto-js/md5";
import hex from "crypto-js/enc-hex";
import { toast } from "react-toastify";

const Hash = () => {
	function Copy(msg: string) {
		navigator.clipboard.writeText(msg);
		toast.info("Hash kopiert");
	}

	const [hash, setHash] = React.useState({
		md5: "",
		sha1: "",
		sha256: "",
	});

	function newHash(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setHash({
			md5: hex.stringify(md5(text)),
			sha1: hex.stringify(sha1(text)),
			sha256: hex.stringify(sha256(text)),
		});
	}

	return (
		<div className="card">
			<h3>Hashes</h3>
			<div className="p-4">
				<input placeholder="was möchtest du hashen?" onChange={newHash}></input>
			</div>
			<h4>MD5</h4>
			<div className="copy !text-sm !sm:text-lg" onClick={() => Copy(hash.md5)}>
				{hash.md5} &nbsp;
			</div>
			<h4>SHA1</h4>
			<div className="copy !text-xs !sm:text-sm" onClick={() => Copy(hash.sha1)}>
				{hash.sha1} &nbsp;
			</div>
			<h4>SHA256</h4>
			<div className="copy !text-[0.49rem] !sm:text-[0.65rem]" onClick={() => Copy(hash.sha256)}>
				{hash.sha256} &nbsp;
			</div>
		</div>
	);
};

export default Hash;
