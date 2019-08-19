import React, { Component } from "react";
// Components
// Styles
import "./containers.scss";
import Header from "components/Header";
/**
 * withLayout
 *
 * A Higher Order Component that renders a component with a sidebar
 *
 * @param {object} WrappedComponent the view component that we wish to render with a sidebar
 */
const withLayout = WrappedComponent => {
	return class ComponentContainer extends Component {
		render() {
			return (
				<div className="view">
					{/* <Sidebar /> */}
					<Header />
					{/* <div className="view-with-sidebar"> */}
					<WrappedComponent {...this.props} />
					{/* </div> */}
				</div>
			);
		}
	};
};

export default withLayout;
