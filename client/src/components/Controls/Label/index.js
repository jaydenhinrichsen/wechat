import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

/**
 * Label
 *
 */
const Label = ({ children, className, label, isHorizontal }) => {
	return (
		<div
			className={classNames(
				"field",
				{ "is-horizontal": isHorizontal },
				className
			)}
		>
			<label className="label">{label}</label>
			<div className="control">{children}</div>
		</div>
	);
};

Label.propTypes = {
	children: PropTypes.any.isRequired,
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	isHorizontal: PropTypes.bool
};

Label.defaultProps = {
	className: "",
	isHorizontal: false
};
export default Label;
