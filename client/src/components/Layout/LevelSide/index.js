import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Styles
import "./index.scss";
const LevelSide = ({ children, side, className }) => {
	let items = Array.isArray(children) ? children : [children];

	return (
		<div className={classNames(`level-${side}`, className)}>
			{items.map((item, i) => (
				<div className="level-item" key={i}>
					{item}
				</div>
			))}
		</div>
	);
};

LevelSide.propTypes = {
	children: PropTypes.any.isRequired,
	side: PropTypes.string.isRequired,
	className: PropTypes.string
};

LevelSide.defaultProps = {
	className: ""
};

export default LevelSide;
