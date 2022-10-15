import * as React from "react";
import * as Daisy from "react-daisyui";

const IP = () => {
	const [copy, setCopy] = React.useState(false);

	function Copy(msg) {
		navigator.clipboard.writeText(msg);
		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3 * 1000);
	}

	const [ipv4, setIpv4] = React.useState("unbekannt");
	const [ipv6, setIpv6] = React.useState("unbekannt");

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
		fetch("https://ip6.lukasnielsen.de")
			.then((res) => {
				if (res.ok) {
					return res.text();
				}
				return "unbekant";
			})
			.then((text) => {
				setIpv6(text);
			})
			.catch(() => {});
	}, []);
	return (
		<>
			<div className="break-inside-avoid w-full md:grid flex flex-col grid-cols-2 grid-rows-2 grid-flow-col auto-rows-auto child:p-2 h-fit bg-base-300 text-base-content rounded p-1">
				<div>IPv4 Adresse</div>
				<div
					className="font-monospace font-bold text-lg cursor-pointer"
					onClick={() => {
						Copy(ipv4);
					}}
				>
					{ipv4}
				</div>
				<div>IPv6 Adresse</div>
				<div
					className="font-monospace font-bold text-lg cursor-pointer"
					onClick={() => {
						Copy(ipv6);
					}}
				>
					{ipv6}
				</div>
				{copy && (
					<Daisy.Alert className="col-span-2 text-center" status="info">
						IP-Adresse kopiert.
					</Daisy.Alert>
				)}
			</div>
		</>
	);
};

export default IP;
