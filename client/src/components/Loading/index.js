import React from "react";
import { motion } from "framer-motion";
// Styles
import "./index.scss";
const Loading = () => {
	return (
		<motion.div
			id="main"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<span className="spinner" />
		</motion.div>
	);
};

export default Loading;
