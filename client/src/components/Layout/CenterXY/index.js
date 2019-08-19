import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const CenterXY = ({ children, className }) => {
	return (
		<div className={classNames("center-xy", className)}>
			<div className="centered-content">{children}</div>
		</div>
	);
};
CenterXY.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

CenterXY.defaultProps = {
	className: ""
};
export default CenterXY;
