import React, { Component } from "react";
import { connect } from "react-redux";

import { removeErrorMessage, removeSuccessMessage } from "../../store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import "./Popup.css";

class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = { fadeOut: false };
	}

	setClassName = () => {
		const { fadeOut } = this.state;
		const { error, success } = this.props;
		const className = ["Popup__container"];
		if (error) className.push("error");
		if (success) className.push("success");
		if (fadeOut) className.push("fade-out");
		return className.join(" ");
	};

	setVisibility = () => {
		const { error, success } = this.props;
		const obj = { display: "none" };
		if (error) obj.display = "flex";
		if (success) obj.display = "flex";
		return obj;
	};

	onClickHandler = () => {
		this.setState({ fadeOut: true });
	};

	onAnimationEndHandler = () => {
		const { fadeOut } = this.state;
		const { removeErrorMessage, removeSuccessMessage } = this.props;
		if (fadeOut) {
			if (removeErrorMessage) removeErrorMessage();
			if (removeSuccessMessage) removeSuccessMessage();
			this.setState({ fadeOut: false });
		}
	};

	setMessage = () => {
		const { error, success } = this.props;
		return error || success;
	};

	render() {
		return (
			<div
				className={this.setClassName()}
				style={this.setVisibility()}
				onClick={() => this.onClickHandler()}
				onAnimationEnd={() => this.onAnimationEndHandler()}
			>
				<span className="Popup__message">{this.setMessage()}</span>
				<FontAwesomeIcon className="Popup__close" icon={faTimesCircle} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.info.error?.message,
		success: state.info.success?.message
	};
};

export default connect(mapStateToProps, { removeErrorMessage, removeSuccessMessage })(Popup);
