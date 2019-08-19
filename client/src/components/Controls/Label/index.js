import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

/**
 * Label
 *
 */
const Label = ({ children, className, label, isHorizontal, error }) => {
	if (!isHorizontal) {
		return (
			<div className={classNames("field", className)}>
				<label className="label">{label}</label>
				<div className="control">{children}</div>
				<p className="input-error is-size-7 text-danger ">{error}</p>
			</div>
		);
	} else {
		return (
			<div className={classNames("field", className)}>
				<div className="horizontal-input-container">
					<label className="label">{label}</label>
					<div className="control">{children}</div>
				</div>
				<p className="input-error is-size-7 text-danger ">{error}</p>
			</div>
		);
	}
};

Label.propTypes = {
	children: PropTypes.any,
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	isHorizontal: PropTypes.bool
};

Label.defaultProps = {
	className: "",
	isHorizontal: false
};
export default Label;
