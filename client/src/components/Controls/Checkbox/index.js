import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";
const Checkbox = ({ value, name, handleChange, label }) => {
	return (
		<div className="checkbox-container">
			<div
				className={classNames("checkbox", { checked: value })}
				onClick={() => handleChange(name, !value)}
			>
				<i className="fas fa-check" />
			</div>
			<label className="label">{label}</label>
		</div>
	);
};
Checkbox.propTypes = {
	value: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string
};

Checkbox.defaultProps = {
	value: false
};
export default Checkbox;
