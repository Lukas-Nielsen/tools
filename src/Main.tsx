import { Center } from "@mantine/core";
import React from "react";
import classes from "./main.module.css";
import Convert from "./pages/Convert";
import ConvertFile from "./pages/ConvertFile";
import DateTime from "./pages/DateTime";
import DHCP from "./pages/DHCP";
import DID from "./pages/DID";
import Hash from "./pages/Hash";
import IP from "./pages/IP";
import Mac from "./pages/MAC";
import Password from "./pages/Password";
import UserAgent from "./pages/UserAgent";

const Main = () => {
	return (
		<Center>
			<main className={classes.main}>
				<IP />
				<UserAgent />
				<Password />
				<Hash />
				<Mac />
				<DateTime />
				<Convert />
				<ConvertFile />
				<DHCP />
				<DID />
			</main>
		</Center>
	);
};

export default Main;
