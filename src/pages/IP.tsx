import React, { useEffect, useState } from "react";
import Copy from "../functions/copy";

const IP = () => {
	const [ipv4, setIpv4] = useState<string>("unbekannt");
	const [ipv6] = useState<string>("unbekannt");

	useEffect(() => {
		fetch("https://ip4.lukasnielsen.de")
			.then((res) => {
				if (res.ok) {
					return res.text();
				}
				return "unbekant";
			})
			.then((text) => {
				setIpv4(text);
			}).catch;
		// fetch("https://ip6.lukasnielsen.de")
		// 	.then((res) => {
		// 		if (res.ok) {
		// 			return res.text();
		// 		}
		// 		return "unbekant";
		// 	})
		// 	.then((text) => {
		// 		setIpv6(text);
		// 	})
		// 	.catch(() => {});
	}, []);
	return (
		<>
			<div className="card md:grid grid-cols-2 grid-rows-2 grid-flow-col auto-rows-auto">
				<div>IPv4 Adresse</div>
				<div
					className="copy"
					onClick={() => {
						Copy(ipv4, "IP kopiert.");
					}}
				>
					{ipv4}
				</div>
				<div>IPv6 Adresse</div>
				<div
					className="copy"
					onClick={() => {
						Copy(ipv6, "IP kopiert.");
					}}
				>
					{ipv6}
				</div>
			</div>
		</>
	);
};

export default IP;
