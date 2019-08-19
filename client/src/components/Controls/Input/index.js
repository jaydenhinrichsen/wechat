import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

/**
 * Input
 *
 * @remarks handleChange returns (name, value) rather than an event
 *
 */
const Input = ({
	handleChange,
	value,
	name,
	className,
	placeholder,
	type,
	...rest
}) => {
	return (
		<input
			className={classNames("input", className)}
			onChange={e => handleChange(e.target.name, e.target.value)}
			placeholder={placeholder}
			name={name}
			defaultValue={value}
			type={type}
			{...rest}
		/>
	);
};

Input.propTypes = {
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.any,
	name: PropTypes.string,
	className: PropTypes.any,
	placeholder: PropTypes.string,
	type: PropTypes.string
};

Input.defaultProps = {
	type: "text"
};
export default Input;
