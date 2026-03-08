import { Center } from "@mantine/core";
import React, { lazy } from "react";
import classes from "./main.module.css";
const Passphrase = lazy(() => import("./pages/Passphrase"));
const IP = lazy(() => import("./pages/IP"));
const UserAgent = lazy(() => import("./pages/UserAgent"));
const Password = lazy(() => import("./pages/Password"));
const Hash = lazy(() => import("./pages/Hash"));
const Mac = lazy(() => import("./pages/MAC"));
const DateTime = lazy(() => import("./pages/DateTime"));
const Convert = lazy(() => import("./pages/Convert"));
const ConvertFile = lazy(() => import("./pages/ConvertFile"));
const DHCP = lazy(() => import("./pages/DHCP"));
const DID = lazy(() => import("./pages/DID"));

const Main = () => {
	return (
		<Center>
			<main className={classes.main}>
				<IP />
				<UserAgent />
				<Password />
				<Passphrase />
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
