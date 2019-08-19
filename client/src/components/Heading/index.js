import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";

const Heading = ({ size, children, className, weight, isMarginless }) => {
	let classname = classNames(
		"heading",
		[`is-size-${size}`],
		[`is-weight-${weight}`],
		{ "is-marginless": isMarginless },
		className
	);

	if (size === 1) {
		return <h1 className={classname}>{children}</h1>;
	} else if (size === 2) {
		return <h2 className={classname}>{children}</h2>;
	} else if (size === 3) {
		return <h3 className={classname}>{children}</h3>;
	} else if (size === 4) {
		return <h4 className={classname}>{children}</h4>;
	} else if (size === 5) {
		return <h5 className={classname}>{children}</h5>;
	} else if (size === 6) {
		return <h6 className={classname}>{children}</h6>;
	}
};

Heading.propTypes = {
	children: PropTypes.any,
	isMarginless: PropTypes.bool,
	size: PropTypes.number,
	weight: PropTypes.number,
	className: PropTypes.string
};

Heading.defaultProps = {
	className: "",
	isMarginless: false,
	size: 5,
	weight: 500
};

export default Heading;
