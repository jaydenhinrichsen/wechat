import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
// Utils
import checkToken from "utils/checkToken";

// Constants
import paths from "constants/paths";

// Unauthenticated Views
import Login from "views/Login";
import Register from "views/Register";
import Landing from "views/Landing";
import PageNotFound from "views/PageNotFound";

// Authenticated Views
import Explore from "views/Explore";
import NewChat from "views/NewChat";
import Chat from "views/Chat";

class Router extends Component {
	componentDidMount() {
		checkToken();
	}

	render() {
		const { auth } = this.props;
		let routes;

		if (auth.isAuthenticated) {
			routes = (
				<Switch>
					<Route exact path={paths.explore.path} component={Explore} />
					<Route exact path={paths.newChat.path} component={NewChat} />
					<Route exact path={`${paths.chat.path}/:chat`} component={Chat} />
					<Redirect to="/explore" />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Route exact path={paths.login.path} component={Login} />
					<Route exact path={paths.register.path} component={Register} />
					<Route exact path={paths.landing.path} component={Landing} />
					<Route component={PageNotFound} />
				</Switch>
			);
		}

		return <BrowserRouter>{routes}</BrowserRouter>;
	}
}

Router.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{}
)(Router);
