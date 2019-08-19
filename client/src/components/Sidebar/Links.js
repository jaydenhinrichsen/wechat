import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * Links
 *
 */
const Links = ({ links, position, current }) => {
	return (
		<ul className={classNames("links", [`${position}-links`])}>
			{links.map((link, i) => (
				<li className="link" key={i}>
					<a
						className={classNames({ "is-active": current === link.path })}
						href={link.path}
					>
						{link.icon && (
							<span className="icon">
								<i className={link.icon} />
							</span>
						)}
						{link.name}
					</a>
				</li>
			))}
		</ul>
	);
};

Links.propTypes = {
	links: PropTypes.array.isRequired,
	position: PropTypes.string.isRequired,
	current: PropTypes.string.isRequired
};

Links.defaultProps = {
	links: []
};

export default Links;
