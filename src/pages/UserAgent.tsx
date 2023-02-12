import * as React from "react";
import { toast } from "react-toastify";

const UserAgent = () => {
	function Copy(msg: string) {
		navigator.clipboard.writeText(msg);
		toast.info("User-Agent kopiert");
	}
	return (
		<div className="card">
			<div>User-Agent</div>
			<div className="copy !text-xs inline-block" onClick={() => Copy(window.navigator.userAgent)}>
				{window.navigator.userAgent}
			</div>
		</div>
	);
};

export default UserAgent;
