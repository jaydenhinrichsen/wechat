import React from "react";

// Paths
import paths from "constants/paths";

// Components
import { Page } from "components/Layout";
import { Button, ButtonGroup } from "components/Controls";
import Heading from "components/Heading";

const Landing = () => {
	return (
		<Page centerY centerX isFullheight>
			<Heading size={1}>Websockets Chat Application</Heading>
			<ButtonGroup>
				<Button href={paths.register.path}>Register</Button>

				<Button isColor="primary" href={paths.login.path}>
					Login
				</Button>
			</ButtonGroup>
		</Page>
	);
};

export default Landing;
