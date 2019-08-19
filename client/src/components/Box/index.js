import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

/**
 * Box
 *
 * @description a generic box component to hold any type of content
 *
 * @param {any} children
 * @param {string} className
 * @param {any} rest
 */
const Box = ({ children, className, ...rest }) => {
	return (
		<div className={classNames("box", className)} {...rest}>
			{children}
		</div>
	);
};

Box.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

Box.defaultProps = {
	className: ""
};

export default Box;
