import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import "./index.scss";
import { motion } from "framer-motion";

const item = {
	hidden: { scale: 0 },
	show: {
		scale: 1
	}
};

/**
 * Box
 *
 * @description a generic box component to hold any type of content
 *
 * @param {any} children
 * @param {string} className
 * @param {any} rest
 */
const Box = ({ children, className, key, ...rest }) => {
	return (
		<motion.div
			key={key}
			variants={item}
			className={classNames("box", className)}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

Box.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

Box.defaultProps = {
	className: ""
};

export default Box;
