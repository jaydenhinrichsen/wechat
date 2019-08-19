import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Containers
import withSidebar from "containers/withSidebar";

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

		this.props.createChat({ ...this.state, user: this.user });
		this.props.history.push("/explore");
	}
	render() {
		return (

				<Page centerX centerY isFullheight>
					<Form
						user={this.user}
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
	{ createChat,  }
)(withRouter(withSidebar(NewChat)));
