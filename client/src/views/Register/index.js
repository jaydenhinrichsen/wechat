import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Actions
import { registerUser } from "actions/authActions";

// Components
import { Page } from "components/Layout";
import Form from "./Form";

/**
 * Register(view)
 *
 */
class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleChange(name, value) {
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.registerUser(this.state, this.props.history);
	}
	render() {
		const { errors } = this.props;
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

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Register));
