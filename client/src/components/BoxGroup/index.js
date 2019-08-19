import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

/**
 * BoxGroup
 * 
 * @description displays multiple boxes in a grid with responsive breakpoints
 * 
 * @param {any} children 
 * @param {string} className 

 */
const BoxGroup = ({ children, className }) => {
	return <div className={classNames("box-group", className)}>{children}</div>;
};

BoxGroup.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

BoxGroup.defaultProps = {
	className: ""
};

export default BoxGroup;
