import * as React from "react";
import * as Daisy from "react-daisyui";

const UserAgent = () => {
	const [copy, setCopy] = React.useState(false);

	function Copy(msg) {
		navigator.clipboard.writeText(msg);
		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3 * 1000);
	}
	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1">
			<div>User-Agent</div>
			<div className="font-monospace font-bold text-xs inline-block cursor-pointer" onClick={() => Copy(window.navigator.userAgent)}>
				{window.navigator.userAgent}
			</div>
			{copy && (
				<Daisy.Alert className="col-span-2 text-center" status="info">
					User-Agent kopiert.
				</Daisy.Alert>
			)}
		</div>
	);
};

export default UserAgent;
