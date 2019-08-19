import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const BoxGroup = ({ children, spacing, className }) => {
	return (
		<div className={classNames("box-group", [`spacing-${spacing}`], className)}>
			{children}
		</div>
	);
};

BoxGroup.propTypes = {
	children: PropTypes.any.isRequired,
	spacing: PropTypes.string.isRequired,
	className: PropTypes.string
};

BoxGroup.defaultProps = {
	className: "",
	spacing: "normal"
};

export default BoxGroup;
