import { Client } from "@hyper-fetch/core";

export const clientV4 = new Client({ url: "https://ip4.lukasnielsen.de" });

export const clientV6 = new Client({ url: "https://ip6.lukasnielsen.de" });
