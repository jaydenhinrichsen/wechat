import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const Page = ({ children, className, centerX, centerY, isFullheight }) => {
	return (
		<div
			className={classNames(
				"page",
				{
					"content-centered-x": centerX && !centerY,
					"content-centered-y": centerY && !centerX,
					"content-centered-xy": centerX && centerY,
					"is-fullheight": isFullheight
				},
				className
			)}
		>
			<div className="page-content">{children}</div>
		</div>
	);
};
Page.propTypes = {
	children: PropTypes.any.isRequired,
	centerX: PropTypes.bool.isRequired,
	centerY: PropTypes.bool.isRequired,
	isFullheight: PropTypes.bool,
	className: PropTypes.string
};

Page.defaultProps = {
	className: "",
	centerX: false,
	centerY: false,
	isFullheight: false
};
export default Page;
