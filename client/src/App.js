import React, { Component } from "react";
// Styles
import "styles/theme.scss";
import "styles/spacing.scss";
import "styles/typography.scss";
import "styles/colors.scss";

// Router
import Router from "containers/Router";

class App extends Component {
	render() {
		return <Router />;
	}
}
export default App;
