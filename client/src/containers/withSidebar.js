import React, { Component } from "react";
// Components
import Sidebar from "components/Sidebar";
// Styles
import "./containers.scss";
import Footer from "components/Footer";
/**
 * withSidebar
 *
 * A Higher Order Component that renders a component with a sidebar
 *
 * @param {object} WrappedComponent the view component that we wish to render with a sidebar
 */
const withSidebar = WrappedComponent => {
	return class ComponentContainer extends Component {
		render() {
			return (
				<div className="view">
					<Sidebar />

					<div className="view-with-sidebar">
						<WrappedComponent {...this.props} />
						<Footer />
					</div>
				</div>
			);
		}
	};
};

export default withSidebar;
