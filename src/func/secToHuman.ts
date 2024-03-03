export const secToHuman = (input: number) => {
	let temp = input;
	const years = Math.floor(temp / 31536000),
		days = Math.floor((temp %= 31536000) / 86400),
		hours = Math.floor((temp %= 86400) / 3600),
		minutes = Math.floor((temp %= 3600) / 60),
		seconds = temp % 60;

	if (days || hours || seconds || minutes) {
		return [
			years ? years + "y" : "",
			days ? days + "d" : "",
			hours ? hours + "h" : "",
			minutes ? minutes + "m" : "",
			seconds !== 0 ? seconds + "s" : "",
		]
			.filter((i) => i.length !== 0)
			.join(" ");
	}

	return "< 1s";
};
