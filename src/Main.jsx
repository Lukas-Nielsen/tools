import * as React from "react";
import B64 from "./pages/B64";
import DateTime from "./pages/DateTime";
import Hash from "./pages/Hash";
import Hex from "./pages/Hex";
import IP from "./pages/IP";
import Mac from "./pages/Mac";
import Password from "./pages/Password";
import UserAgent from "./pages/UserAgent";

const Main = () => {
	return (
		<>
			<div className="md:columns-2 lg:columns-3 space-y-2 md:w-1/2 lg:w-4/5 w-full mx-auto px-4 my-4 gap-2">
				<IP />
				<UserAgent />
				<Password />
				<Hash />
				<Mac />
				<DateTime />
				<Hex />
				<B64 />
			</div>
		</>
	);
};

export default Main;
