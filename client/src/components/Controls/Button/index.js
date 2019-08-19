import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Styles
import "./index.scss";
/**
 * Button
 *
 * @param {any} children
 * @param {boolean} isOutlined
 * @param {string} isColor
 * @param {string} className
 * @param {boolean} isFullwidth
 * @param {any} rest
 */
const Button = ({
	children,
	isOutlined,
	isColor,
	className,
	isFullwidth,
	...rest
}) => {
	// Render an anchor element if an href prop is recieved
	if (rest.href) {
		return (
			<a
				className={classNames(
					"button",
					{ "is-outlined": isOutlined },
					{ "is-fullwidth": isFullwidth },
					[`is-${isColor}`],
					className
				)}
				{...rest}
			>
				{children}
			</a>
		);
	} else {
		return (
			<button
				className={classNames(
					"button",
					{ "is-outlined": isOutlined },
					{ "is-fullwidth": isFullwidth },
					[`is-${isColor}`],
					className
				)}
				{...rest}
			>
				{children}
			</button>
		);
	}
};

Button.propTypes = {
	children: PropTypes.any.isRequired,
	isColor: PropTypes.string,
	isOutlined: PropTypes.bool,
	isFullwidth: PropTypes.bool,
	className: PropTypes.string
};

Button.defaultProps = {
	className: "",
	isColor: "",
	isFullwidth: false,
	isOutlined: false
};

export default Button;
