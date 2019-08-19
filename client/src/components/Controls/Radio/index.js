import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";
const Radio = ({ value, name, handleChange, options, isHorizontal }) => {
	return (
		<div
			className={classNames("radio-buttons", { "is-horizontal": isHorizontal })}
		>
			{options.map((option, i) => (
				<div className="radio-container" key={i}>
					<div
						className={option === value ? "radio is-selected " : "radio"}
						onClick={() => handleChange(name, option)}
					>
						<div className="radio-circle" />
					</div>
					<label className="label">{option}</label>
				</div>
			))}
		</div>
	);
};
Radio.propTypes = {
	value: PropTypes.any,
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string
};

Radio.defaultProps = {
	value: 0
};
export default Radio;
