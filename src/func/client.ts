import { Client } from "@hyper-fetch/core";

export const clientV4 = new Client({ url: "https://ip4.lukasnielsen.de" })
	.onError(async (response) => {
		console.error(response);
		return response;
	})
	.onSuccess(async (response) => {
		return response;
	});

export const clientV6 = new Client({ url: "https://ip6.lukasnielsen.de" })
	.onError(async (response) => {
		console.error(response);
		return response;
	})
	.onSuccess(async (response) => {
		return response;
	});

export const clientWord = new Client({
	url: "https://random-word-api.herokuapp.com/word",
})
	.onError(async (response) => {
		console.error(response);
		return response;
	})
	.onSuccess(async (response) => {
		return response;
	});
