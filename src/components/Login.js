import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/compat/app";

import { auth } from "../firebase";

export const Login = () => {
	return (
		<div className="login-page">
			<div className="login-box">
				<div
					className="btn"
					onClick={() =>
						auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
					}
				>
					<GoogleOutlined /> Sign in
				</div>
			</div>
		</div>
	);
};
