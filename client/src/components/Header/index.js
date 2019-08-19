import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Paths
import paths from "constants/paths";
// Actions
// Styles
import "./index.scss";

// Components
import { Level, LevelSide } from "components/Layout";
import { logoutUser } from "actions/authActions";
import Link from "./Link";
import { Button } from "components/Controls";
import Heading from "components/Heading";
/**
 * Header
 *

 */
class Header extends Component {
	constructor(props) {
		super(props);
		this.user = this.props.auth.user._id;
	}

	render() {
		const { pathname } = this.props.history.location;

		return (
			<Level className="header p-x-md">
				<LevelSide side="left">
					<Heading isMarginless size={2}>
						WeChat
					</Heading>
					<Link link={paths.explore} current={pathname} />
				</LevelSide>
				<LevelSide side="right">
					<a href="/">Logout</a>
				</LevelSide>
			</Level>
		);
	}
}

Header.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(withRouter(Header));
