import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";
import Convert from "./pages/Convert";
import DateTime from "./pages/DateTime";
import Hash from "./pages/Hash";
import IP from "./pages/IP";
import Mac from "./pages/MAC";
import Password from "./pages/Password";
import UserAgent from "./pages/UserAgent";
import { DHCP } from "./pages/DHCP";

const Main = () => {
	return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={1000}
				newestOnTop
				pauseOnHover
				hideProgressBar
				theme="colored"
			/>
			<div className="md:columns-2 lg:columns-3 space-y-2 md:w-4/5 lg:w-4/5 w-full mx-auto px-4 my-4 gap-2">
				<IP />
				<UserAgent />
				<Password />
				<Hash />
				<Mac />
				<DateTime />
				<Convert />
				<DHCP />
			</div>
		</>
	);
};

export default Main;
