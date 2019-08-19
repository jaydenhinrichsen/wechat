import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const CenterX = ({ children, className }) => {
	return <div className={classNames("center-x", className)}>{children}</div>;
};
CenterX.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

CenterX.defaultProps = {
	className: ""
};
export default CenterX;
