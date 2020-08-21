import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import history from "./history";

import { Popup, LandingPage, Profile } from "./containers";

import "./App.css";

class App extends Component {
	render() {
		const { isLoggedIn } = this.props;
		return (
			<Router history={history}>
				<Popup />
				<Switch>
					{isLoggedIn ? (
						<Route exact path="/profile" component={Profile} />
					) : (
						<Route exact path="/login" component={LandingPage} />
					)}
					<Route>{isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="/login" />}</Route>
				</Switch>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.account.isLoggedIn
	};
};

export default connect(mapStateToProps)(App);
