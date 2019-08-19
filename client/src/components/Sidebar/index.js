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
import Links from "./Links";
import { Level, LevelSide } from "components/Layout";
import { logoutUser } from "actions/authActions";
/**
 * Sidebar
 *
 * @todo
 *
 * Refactor mobile view into seperate component
 */
class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.user = this.props.auth.user._id;
		this.topLinks = [{ ...paths.explore }];

		this.state = {
			smallView: false,
			menuOpen: false
		};
	}

	componentDidMount() {
		if (window.innerWidth < 600 && !this.state.smallView) {
			this.setState({ smallView: true });
		}
		window.addEventListener("resize", e => this.handleResize(e));
	}

	handleResize(e) {
		if (e.currentTarget.innerWidth < 600 && !this.state.smallView) {
			this.setState({ smallView: true });
		} else if (e.currentTarget.innerWidth > 600 && this.state.smallView) {
			this.setState({ smallView: false });
		}
	}
	render() {
		console.log(this.bottomLinks);
		const { pathname } = this.props.history.location;
		return this.state.smallView ? (
			<>
				<Level className="p-x-md mobile-nav">
					<LevelSide side="left">
						<Links position="top" links={this.topLinks} current={pathname} />
					</LevelSide>
					<LevelSide side="right">
						<i
							className="fas fa-bars"
							onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
						/>
					</LevelSide>
				</Level>
				{this.state.menuOpen && <div className="mobile-nav-menu" />}
			</>
		) : (
			<div className="sidebar-container">
				<div className="sidebar">
					<div className="brand">
						<p className="is-size-4">WeChat</p>
					</div>
					<Links position="top" links={this.topLinks} current={pathname} />
					<ul className="links bottom-links">
						<li className="link">
							<a href="/" onClick={() => this.props.logoutUser()}>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

Sidebar.propTypes = {
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
)(withRouter(Sidebar));
