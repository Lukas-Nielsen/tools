import { Client } from "@hyper-fetch/core";

export const client = new Client({ url: "" })
	.onError(async (response) => {
		console.error(response);
		return response;
	})
	.onSuccess(async (response) => {
		return response;
	});
