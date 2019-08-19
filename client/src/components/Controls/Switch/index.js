import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// Styles
import "./index.scss";
/**
 * Switch
 *
 * @param {string} leftLabel
 * @param {string} rightLabel
 * @param {boolean} value
 * @param {string} name
 * @param {function} handleChange
 */
const Switch = ({
	leftLabel,
	rightLabel,
	value,
	name,
	handleChange,
	isMarginless,
	className
}) => {
	return (
		<div
			className={classNames(
				"switch-container",
				{ "is-toggled": value },
				{ "is-marginless": isMarginless },
				className
			)}
		>
			<div className="left-label">{leftLabel}</div> {/*Off*/}
			<div className="switch" onClick={() => handleChange(name, !value)}>
				<div className="switch-button-container">
					<div className="switch-button" />
				</div>
			</div>
			<div className="right-label">{rightLabel}</div> {/*On*/}
		</div>
	);
};

Switch.propTypes = {
	value: PropTypes.bool.isRequired,
	leftLabel: PropTypes.string.isRequired,
	rightLabel: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

Switch.defaultProps = {
	value: false,
	className: ""
};

export default Switch;
