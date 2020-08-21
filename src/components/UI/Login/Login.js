import React, { useEffect } from "react";

import { GITHUB_AUTH_URL } from "../../../config/api";

import history from "../../../history";

import "./Login.css";

export const Login = ({ authenticateUser, isLoggedIn }) => {
	useEffect(() => {
		const { location } = history;
		if (location.search.includes("?code=")) {
			const code = location.search.split("=")[1];
			authenticateUser({ code });
		}

		if (isLoggedIn) {
			history.push("/profile");
		}
	}, []);

	return (
		<div className="Login__main">
			<div className="Login__container">
				<span className="Login__info">Convert your profile to PDF:</span>
				<a
					className="Login__github-login"
					href={`${GITHUB_AUTH_URL}?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}`}
				>
					Login via GitHub
				</a>
			</div>
		</div>
	);
};
