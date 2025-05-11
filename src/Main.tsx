import React from "react";
import { Center } from "@mantine/core";
import classes from "./main.module.css";
import IP from "./pages/IP";
import UserAgent from "./pages/UserAgent";
import Password from "./pages/Password";
import Hash from "./pages/Hash";
import Mac from "./pages/MAC";
import DateTime from "./pages/DateTime";
import Convert from "./pages/Convert";
import DHCP from "./pages/DHCP";
import ConvertFile from "./pages/ConvertFile";
import DID from "./pages/DID";

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
