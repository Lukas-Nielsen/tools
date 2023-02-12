import * as React from "react";
import { toast } from "react-toastify";

const IP = () => {
	function Copy(msg: string) {
		navigator.clipboard.writeText(msg);
		toast.info("IP kopiert");
	}

	const [ipv4, setIpv4] = React.useState<string>("unbekannt");
	const [ipv6, setIpv6] = React.useState<string>("unbekannt");

	React.useEffect(() => {
		fetch("https://ip4.lukasnielsen.de")
			.then((res) => {
				if (res.ok) {
					return res.text();
				}
				return "unbekant";
			})
			.then((text) => {
				setIpv4(text);
			})
			.catch(() => {});
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
						Copy(ipv4);
					}}
				>
					{ipv4}
				</div>
				<div>IPv6 Adresse</div>
				<div
					className="copy"
					onClick={() => {
						Copy(ipv6);
					}}
				>
					{ipv6}
				</div>
			</div>
		</>
	);
};

export default IP;
