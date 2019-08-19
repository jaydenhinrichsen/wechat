import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";

// Styles
import "./index.scss";

// FramerMotion Animations
const container = {
	hidden: { scale: 0 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

/**
 * BoxGroup
 * 
 * @description displays multiple boxes in a grid with responsive breakpoints
 * 
 * @param {any} children 
 * @param {string} className 

 */
const BoxGroup = ({ children, className }) => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className={classNames("box-group", className)}
		>
			{children}
		</motion.div>
	);
};

BoxGroup.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

BoxGroup.defaultProps = {
	className: ""
};

export default BoxGroup;
