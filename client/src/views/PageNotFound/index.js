import React from "react";
// Components
import { Page } from "components/Layout";
import Heading from "components/Heading";
/**
 * PageNotFound(404)
 * 
 */
const PageNotFound = () => {
	return (
		<Page centerX centerY isFullheight>
			<Heading className="text-center" size={2}>
				Sorry
			</Heading>
			<Heading weight={400}>
				We couldn't find the page you were looking for.
			</Heading>
		</Page>
	);
};

export default PageNotFound;
