import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Styles
import "./index.scss";

const TextArea = ({
	onChange,
	value,
	name,
	placeholder,
	className,
	...rest
}) => {
	return (
		<textarea
			className={classNames("textarea", className)}
			placeholder={placeholder}
			onChange={e => onChange(e.target.name, e.target.value)}
			value={value}
			name={name}
			{...rest}
		/>
	);
};

TextArea.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	className: PropTypes.string
};

TextArea.defaultProps = {
	className: ""
};

export default TextArea;
