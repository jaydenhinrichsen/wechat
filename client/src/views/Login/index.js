import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";

// Actions
import { loginUser } from "actions/authActions";
// Components
import Form from "./Form";
import { Page } from "components/Layout";

/**
 * Login
 */
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange(name, value) {
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.loginUser(this.state);
		this.props.history.push("/dashboard");
	}
	render() {
		return (
			<div className="view">
				<div className="view-with-layout">
					<Page centerX centerY isFullheight>
						<Form
							fields={this.state}
							handleChange={(name, value) => this.handleChange(name, value)}
							handleSubmit={e => this.handleSubmit(e)}
						/>
					</Page>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(withRouter(Login));
