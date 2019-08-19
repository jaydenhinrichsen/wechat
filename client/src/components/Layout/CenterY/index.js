import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const CenterY = ({ children, isFullheight, className }) => {
	return (
		<div
			className={classNames(
				"center-y",
				{ "is-fullheight": isFullheight },
				className
			)}
		>
			{children}
		</div>
	);
};
CenterY.propTypes = {
	children: PropTypes.any.isRequired,
	isFullheight: PropTypes.bool,
	className: PropTypes.string
};

CenterY.defaultProps = {
	className: "",
	isFullheight: false
};
export default CenterY;
