import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

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
