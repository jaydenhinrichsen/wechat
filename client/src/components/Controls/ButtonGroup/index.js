import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";
/**
 * ButtonGroup
 *
 * @description Vertically centers multiple button components in a horizontal line. The buttons can optionally be aligned to the left, middle, or right.
 *
 * @param {any} children
 * @param {string} children
 * @param {string} align
 */
const ButtonGroup = ({ children, className, align }) => {
	return (
		<div
			className={classNames(
				"button-group",

				[`align-${align}`],
				className
			)}
		>
			{children}
		</div>
	);
};

ButtonGroup.propTypes = {
	children: PropTypes.any.isRequired,
	align: PropTypes.string,
	className: PropTypes.string
};

ButtonGroup.defaultProps = {
	className: "",
	align: "middle"
};

export default ButtonGroup;
