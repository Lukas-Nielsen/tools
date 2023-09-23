import React, { useEffect, useState } from "react";
import Copy from "../functions/copy";

const IP = () => {
	const [ipv4, setIpv4] = useState<string>();
	const [ipv6] = useState<string>();

	useEffect(() => {
		const get = () => {
			fetch("https://ip4.lukasnielsen.de")
				.then((res) => {
					if (res.ok) {
						return res.text();
					}
					return undefined;
				})
				.then((text) => {
					setIpv4(text);
				})
				.catch(() => setIpv4(undefined));
		};
		const interval = setInterval(get, 60 * 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<>
			<div className="card md:grid grid-cols-2 grid-rows-2 grid-flow-col auto-rows-auto">
				<div>IPv4 Adresse</div>
				<div
					className="copy"
					onClick={() => {
						if (ipv4) Copy(ipv4, "IP kopiert.");
					}}
				>
					{ipv4 || "unbekannt"}
				</div>
				<div>IPv6 Adresse</div>
				<div
					className="copy"
					onClick={() => {
						if (ipv6) Copy(ipv6, "IP kopiert.");
					}}
				>
					{ipv6 || "unbekannt"}
				</div>
			</div>
		</>
	);
};

export default IP;
