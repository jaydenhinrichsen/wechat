import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Containers
import withLayout from "containers/withLayout";

// Styles
import "./index.scss";

// Actions
import { createChat } from "actions/chatActions";

// Components
import { Page } from "components/Layout";
import Form from "./Form";

/**
 * NewChat
 *
 *
 */
class NewChat extends Component {
	constructor(props) {
		super(props);
		this.user = this.props.auth.user;
		this.state = {
			name: "",
			category: ""
		};
	}

	handleChange(name, value) {
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createChat(
			{
				name: this.state.name,
				category: this.state.category._id,
				user: this.user
			},
			this.props.history
		);
	}
	render() {
		console.log(this.state);
		const { errors } = this.props;
		return (
			<Page centerX centerY isFullheight hasFooter>
				<Form
					user={this.user}
					errors={errors}
					fields={this.state}
					handleChange={(name, value) => this.handleChange(name, value)}
					handleSubmit={e => this.handleSubmit(e)}
				/>
			</Page>
		);
	}
}

NewChat.propTypes = {
	createChat: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ createChat }
)(withRouter(withLayout(NewChat)));
