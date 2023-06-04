import React, { useEffect, useState } from "react";
import Copy from "../functions/copy";

export const DHCP = () => {
	const [net, setNet] = useState<string>();
	const [start, setStart] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [input, setInput] = useState<string>();
	const [result, setResult] = useState<string>();

	useEffect(() => {
		if (input && net && start) {
			const macs = [
				...input.matchAll(/(?:[0-9A-Fa-f]{12}|[0-9A-Fa-f:-]{17})/g),
			];

			if (!/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g.test(net))
				return;

			const ip = ipToNumber(start);

			let callback = "";
			macs.map((item, index) => {
				const mac = item[0].replaceAll(/[^0-9A-Fa-f]/g, "");

				callback += `netsh dhcp server scope ${net} add reservedip ${numberToIP(
					ip + index
				)} ${mac} "${description || ""}"\n`;
			});
			setResult(callback);
		}
	}, [net, start, description, input]);

	return (
		<div className="card">
			<h4>DHCP-Reservierungen</h4>
			<div className="flex gap-2 child:w-full flex-col px-4">
				<h4>Netz (192.168.178.0)</h4>
				<input
					value={net}
					onChange={(e) => setNet(e.target.value)}
					placeholder="192.168.178.0"
				/>
				<h4>Start IP</h4>
				<input
					value={start}
					onChange={(e) => setStart(e.target.value)}
					placeholder="192.168.178.200"
				/>
				<h4>Beschreibung</h4>
				<input
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="IP-Telefon"
				/>
			</div>
			<h4>MAC-Adressen</h4>
			<div className="px-4">
				<textarea
					className="w-full"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
			<h4>Ergebnis</h4>
			<div className="px-4">
				<textarea
					className="cursor-pointer break-words w-full"
					title="klicken zum Kopieren"
					onClick={() => {
						result && Copy(result ?? "", "Ergebnis kopiert.");
					}}
					readOnly
					value={result}
				/>
			</div>
		</div>
	);
};

// const ipToNumber = (ip: string): number => {
// 	let ipNumber = 0;

// 	const ipArr = ip.split(".");
// 	if (ipArr.length !== 4) return 0;

// 	if (isNaN(parseInt(ipArr[3]))) return 0;
// 	ipNumber += parseInt(ipArr[3]);

// 	if (isNaN(parseInt(ipArr[2]))) return 0;
// 	ipNumber += parseInt(ipArr[2]) * 256;

// 	if (isNaN(parseInt(ipArr[1]))) return 0;
// 	ipNumber += parseInt(ipArr[1]) * 256 * 256;

// 	if (isNaN(parseInt(ipArr[0]))) return 0;
// 	ipNumber += parseInt(ipArr[0]) * 256 * 256 * 256;

// 	return ipNumber;
// };

const ipToNumber = (ip: string) =>
	ip
		.split(".")
		.reduce((sum, x, i) => sum + (parseInt(x) << (8 * (3 - i))), 0);
const numberToIP = (ip: number) =>
	[24, 16, 8, 0].map((n) => (ip >> n) & 0xff).join(".");

// const numberToIP = (input: number): string => {
// 	const ipArr: number[] = [];

// 	ipArr[3] = input % 256;
// 	ipArr[2] = (input - ipArr[3]) % (256 * 256);
// 	ipArr[1] = (input - ipArr[2] - ipArr[3]) % (256 * 256 * 256);
// 	ipArr[0] = input - ipArr[1] - ipArr[2] - ipArr[3];

// 	return ipArr.join(".");
// };
