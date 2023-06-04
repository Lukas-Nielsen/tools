import React from "react";
import Copy from "../functions/copy";

const UserAgent = () => {
	return (
		<div className="card">
			<div>User-Agent</div>
			<div
				className="copy !text-xs inline-block"
				onClick={() =>
					Copy(window.navigator.userAgent, "User-Agent kopiert!")
				}
			>
				{window.navigator.userAgent}
			</div>
		</div>
	);
};

export default UserAgent;
