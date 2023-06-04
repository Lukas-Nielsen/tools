import React, { ChangeEvent, useState } from "react";
import sha256 from "crypto-js/sha256";
import sha1 from "crypto-js/sha1";
import md5 from "crypto-js/md5";
import hex from "crypto-js/enc-hex";
import Copy from "../functions/copy";

const Hash = () => {
	const [hash, setHash] = useState({
		md5: "",
		sha1: "",
		sha256: "",
	});

	const newHash = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setHash({
			md5: hex.stringify(md5(text)),
			sha1: hex.stringify(sha1(text)),
			sha256: hex.stringify(sha256(text)),
		});
	};

	return (
		<div className="card">
			<h3>Hashes</h3>
			<div className="px-4">
				<input
					placeholder="was möchtest du hashen?"
					onChange={newHash}
				></input>
			</div>
			<h4>MD5</h4>
			<div
				className="copy !text-sm !sm:text-lg"
				onClick={() => Copy(hash.md5, "Hash kopiert.")}
			>
				{hash.md5} &nbsp;
			</div>
			<h4>SHA1</h4>
			<div
				className="copy !text-xs !sm:text-sm"
				onClick={() => Copy(hash.sha1, "Hash kopiert.")}
			>
				{hash.sha1} &nbsp;
			</div>
			<h4>SHA256</h4>
			<div
				className="copy !text-[0.49rem] !sm:text-[0.65rem]"
				onClick={() => Copy(hash.sha256, "Hash kopiert.")}
			>
				{hash.sha256} &nbsp;
			</div>
		</div>
	);
};

export default Hash;
