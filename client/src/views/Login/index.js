import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Actions
import { loginUser } from "actions/authActions";
// Components
import Form from "./Form";
import { Page } from "components/Layout";
import Loading from "components/Loading";

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

		this.props.loginUser(this.state, this.props.history);
	}
	render() {
		const { errors } = this.props;
		const { loading, loaded } = this.props.auth;
		if (loading && !loaded) {
			return <Loading />;
		} else {
			return (
				<Page centerX centerY isFullheight>
					<Form
						fields={this.state}
						errors={errors}
						handleChange={(name, value) => this.handleChange(name, value)}
						handleSubmit={e => this.handleSubmit(e)}
					/>
				</Page>
			);
		}
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
