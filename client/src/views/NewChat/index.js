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
import { getCategories, createCategory } from "actions/categoryActions";

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

	componentDidMount() {
		this.props.getCategories();
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
		const { categories } = this.props.categories;
		return (
			<>
				<Page centerX centerY isFullheight>
					<Form
						user={this.user}
						fields={this.state}
						handleChange={(name, value) => this.handleChange(name, value)}
						handleSubmit={e => this.handleSubmit(e)}
					/>
				</Page>
			</>
		);
	}
}

NewChat.propTypes = {
	createChat: PropTypes.func.isRequired,
	getCategories: PropTypes.func.isRequired,
	createCategory: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	categories: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	categories: state.categories,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ createChat, getCategories, createCategory }
)(withRouter(withSidebar(NewChat)));
