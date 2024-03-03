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
import DNS from "./pages/DNS";
import DHCP from "./pages/DHCP";

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
				<DNS />
				<DHCP />
			</div>
		</Center>
	);
};

export default Main;
