import React, { Component } from "react";
import { connect } from "react-redux";

import history from "../../history";

import { authenticateUser } from "../../store/actions";

import { Login } from "../../components/UI";

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount = () => {
		const { isLoggedIn } = this.props;
		if (isLoggedIn) return history.push("/profile");
	};

	render() {
		const { authenticateUser, isLoggedIn } = this.props;
		return <Login authenticateUser={authenticateUser} isLoggedIn={isLoggedIn} />;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.account.isLoggedIn,
		user: state.account.user
	};
};

export default connect(mapStateToProps, { authenticateUser })(LandingPage);
