import * as React from "react";
import * as Toast from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";
// import B64 from "./pages/B64";
import DateTime from "./pages/DateTime";
import Hash from "./pages/Hash";
// import Hex from "./pages/Hex";
import IP from "./pages/IP";
import Mac from "./pages/Mac";
import Password from "./pages/Password";
import UserAgent from "./pages/UserAgent";

const Main = () => {
	return (
		<>
			<Toast.ToastContainer position="bottom-right" autoClose={1000} newestOnTop pauseOnHover hideProgressBar theme="colored" />
			<div className="md:columns-2 lg:columns-3 space-y-2 md:w-4/5 lg:w-4/5 w-full mx-auto px-4 my-4 gap-2">
				<IP />
				<UserAgent />
				<Password />
				<Hash />
				<Mac />
				<DateTime />
				{/* <Hex /> */}
				{/* <B64 /> */}
			</div>
		</>
	);
};

export default Main;
