import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Paths
import paths from "constants/paths";

// Actions
import { getChats } from "actions/chatActions";

// Styles
import "./index.scss";
// Containers
import withLayout from "containers/withLayout";

// Components
// import ChatsList from "./ChatsList";
import PageTopbar from "components/PageTopbar";
import { Page } from "components/Layout";
import { Button } from "components/Controls";
import List from "./List";

/**
 * Explore
 *
 * @description Fetches all the chats in the database and displays them
 * @todo Add filtering, sorting, search, etc
 *
 */
class Explore extends Component {
	componentDidMount() {
		this.props.getChats();
	}

	render() {
		const { chats, loading, loaded } = this.props.chats;
		return (
			<Page isFullheight hasFooter>
				<PageTopbar title="Explore">
					<Button isOutlined isColor="primary" href={paths.newChat.path}>
						{paths.newChat.name}
					</Button>
				</PageTopbar>
				<div className="p-md">
					<List
						chats={chats}
						loading={loading}
						loaded={loaded}
						history={this.props.history}
					/>
				</div>
			</Page>
		);
	}
}

Explore.propTypes = {
	getChats: PropTypes.func.isRequired,
	chats: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	chats: state.chats,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ getChats }
)(withRouter(withLayout(Explore)));
