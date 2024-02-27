import React from "react";
import { Card, Code, CopyButton, Tooltip } from "@mantine/core";
import classes from "../main.module.css";

const UserAgent = () => {
	return (
		<Card mb="xs">
			<h4>User-Agent</h4>
			<CopyButton value={window.navigator.userAgent}>
				{({ copied, copy }) => (
					<Tooltip
						label={
							copied
								? "User-Agent kopiert"
								: "User-Agent kopieren"
						}
					>
						<Code onClick={copy} className={classes.copy}>
							{window.navigator.userAgent}
						</Code>
					</Tooltip>
				)}
			</CopyButton>
		</Card>
	);
};

export default UserAgent;
