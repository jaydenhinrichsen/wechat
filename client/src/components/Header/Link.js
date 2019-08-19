import React from "react";

const Link = ({ link, current }) => {
	return (
		<a className={current === link.path ? "is-active" : ""} href={link.path}>
			{link.name}
		</a>
	);
};

export default Link;
