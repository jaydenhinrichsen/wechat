import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import classNames from "classnames";

import "react-datepicker/dist/react-datepicker.css";

// Styles
import "./index.scss";

const DateInput = ({
	handleChange,
	value,
	name,
	className,
	placeholder,
	isTime
}) => {
	return isTime ? (
		<DatePicker
			className={classNames("input date-input", [`${className}`])}
			selected={value ? value : null}
			onChange={date => handleChange(name, date)}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={15}
			dateFormat="h:mm aa"
			timeCaption="Time"
			placeholderText={placeholder}
		/>
	) : (
		<DatePicker
			className={classNames("input date-input", [`${className}`])}
			selected={value}
			onChange={date => handleChange(name, date)}
			dateFormat="MMMM d, yyyy"
			placeholderText={placeholder}
		/>
	);
};

DateInput.propTypes = {
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	className: PropTypes.string,
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	errors: PropTypes.object
};
DateInput.defaultProps = {
	className: "",
	iconLeft: "",
	iconRight: ""
};

export default DateInput;
