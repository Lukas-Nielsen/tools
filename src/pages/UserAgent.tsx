import React from "react";
import { Card, Code, CopyButton, Stack, Title, Tooltip } from "@mantine/core";
import classes from "../main.module.css";

const UserAgent = () => {
	return (
		<Card mb="xs" component={Stack}>
			<Title order={3}>User-Agent</Title>
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
