import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";
// Styles
import "./index.scss";
// Components
import Footer from "components/Footer";
const Page = ({
	children,
	className,
	centerX,
	centerY,
	isFullheight,
	hasFooter
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={classNames(
				"page",
				{
					"content-centered-x": centerX && !centerY,
					"content-centered-y": centerY && !centerX,
					"content-centered-xy": centerX && centerY,
					"is-fullheight": isFullheight
				},
				className
			)}
		>
			<div className="page-content">{children}</div>
			{hasFooter && <Footer />}
		</motion.div>
	);
};
Page.propTypes = {
	children: PropTypes.any.isRequired,
	centerX: PropTypes.bool.isRequired,
	centerY: PropTypes.bool.isRequired,
	isFullheight: PropTypes.bool,
	className: PropTypes.string
};

Page.defaultProps = {
	className: "",
	centerX: false,
	centerY: false,
	isFullheight: false
};
export default Page;
