import React from "react";
import classNames from "classnames";
// Styles
import "./index.scss";

// Components
import { Level, LevelSide } from "components/Layout";
import Heading from "components/Heading";

const PageTopbar = ({ title, children, className }) => {
	return (
		<Level className={classNames("page-topbar m-x-md", className)}>
			<LevelSide side="left">
				<Heading size={3} weight={700} isMarginless>
					{title}
				</Heading>
			</LevelSide>
			<LevelSide side="right">{children}</LevelSide>
		</Level>
	);
};

export default PageTopbar;
