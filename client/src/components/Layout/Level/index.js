import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const Level = ({ children, className }) => {
	return <div className={classNames("level", className)}>{children}</div>;
};

Level.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

Level.defaultProps = {
	className: ""
};
export default Level;
