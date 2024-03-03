import React, { SyntheticEvent, useState } from "react";
import {
	Accordion,
	Button,
	Card,
	Group,
	Table,
	TextInput,
} from "@mantine/core";
import { Client } from "@hyper-fetch/core";
import { IResDNS } from "../types/dns";
import { useSubmit } from "@hyper-fetch/react";
import { secToHuman } from "../func/secToHuman";

const client = new Client({ url: "https://cloudflare-dns.com/dns-query" });

const request = client.createRequest<IResDNS>()({
	endpoint: "",
	headers: { accept: "application/dns-json" },
	cache: false,
});

const DNS = () => {
	const [query, setQuery] = useState<string>("");
	const { data: A, submit: doA } = useSubmit(
		request.setQueryParams({ name: query, type: "A" }),
	);
	const { data: AAAA, submit: doAAAA } = useSubmit(
		request.setQueryParams({ name: query, type: "AAAA" }),
	);
	const { data: TXT, submit: doTXT } = useSubmit(
		request.setQueryParams({ name: query, type: "TXT" }),
	);
	const { data: MX, submit: doMX } = useSubmit(
		request.setQueryParams({ name: query, type: "MX" }),
	);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		doA();
		doAAAA();
		doTXT();
		doMX();
	};

	const defaultResources = [
		{
			type: "A",
			data: A,
		},
		{
			type: "AAAA",
			data: AAAA,
		},
		{
			type: "TXT",
			data: TXT,
		},
		{
			type: "MX",
			data: MX,
		},
	];

	return (
		<Card mb="xs">
			<h4>DNS</h4>
			<form onSubmit={handleSubmit}>
				<Group wrap="nowrap">
					<TextInput
						value={query}
						onChange={(e) => setQuery(e.currentTarget.value)}
						placeholder="example.com"
						w="80%"
					/>
					<Button type="submit">Los</Button>
				</Group>
			</form>
			<Accordion defaultValue="A">
				{defaultResources.map((r) => {
					return (
						<Accordion.Item value={r.type} key={r.type}>
							<Accordion.Control>
								{r.type} - {r.data?.Question[0].name}
							</Accordion.Control>
							<Accordion.Panel>
								<Table>
									<Table.Thead>
										<Table.Tr>
											<Table.Th>Wert</Table.Th>
											<Table.Th w={100} ta="center">
												TTL
											</Table.Th>
										</Table.Tr>
									</Table.Thead>
									<Table.Tbody>
										{r.data?.Answer?.map((e) => {
											return (
												<Table.Tr>
													<Table.Td>
														{e.data}
													</Table.Td>
													<Table.Td
														w={100}
														ta="right"
													>
														{secToHuman(e.TTL)}
													</Table.Td>
												</Table.Tr>
											);
										})}
										{!r.data?.Answer && (
											<Table.Tr>
												<Table.Td colSpan={2}>
													keine Daten gefunden oder
													fehlerhafte Eingabe
												</Table.Td>
											</Table.Tr>
										)}
									</Table.Tbody>
								</Table>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion>
		</Card>
	);
};

export default DNS;
