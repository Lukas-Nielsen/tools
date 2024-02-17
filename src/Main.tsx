import React from "react";
import Convert from "./pages/Convert";
import DateTime from "./pages/DateTime";
import Hash from "./pages/Hash";
import IP from "./pages/IP";
import Mac from "./pages/MAC";
import Password from "./pages/Password";
import UserAgent from "./pages/UserAgent";
import { DHCP } from "./pages/DHCP";
import classes from "./main.module.css";
import { Center } from "@mantine/core";

const Main = () => {
	return (
		<Center>
			<div className={classes.main}>
				<IP />
				<UserAgent />
				<Password />
				<Hash />
				<Mac />
				<DateTime />
				<Convert />
				<DHCP />
			</div>
		</Center>
	);
};

export default Main;
