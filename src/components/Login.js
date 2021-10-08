import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/compat/app";

import { auth } from "../firebase";

export const Login = () => {
	return (
		<div className="over">
			<div classname="card text-center  border-dark">
				<div className="card-header text-muted">Login/Signup</div>
				<div className="card-body">
					<h3 className="card-title">Firechat</h3>
					<p className="card-text">
						Sign In Using Google and start using Firechat rightaway !
					</p>
					<div
						className="btn btn-primary"
						onClick={() =>
							auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
						}
					>
						<GoogleOutlined /> Login
					</div>
				</div>
				<div class="card-footer text-muted">© Rishi Chourasia 2021</div>
			</div>
		</div>
	);
};
