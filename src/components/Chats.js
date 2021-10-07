import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "./Context";
import axios from "axios";

export const Chats = () => {
	const history = useHistory();
	const { user } = useAuth();
	const [loading, setLoading] = useState();

	const logOut = async () => {
		await auth.signOut();
		history.push("/");
	};

	const getPhoto = async (url) => {
		const response = await fetch(url);
		const data = await response.blob();

		return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
	};

	useEffect(() => {
		setLoading(true);

		if (!user) {
			history.push("/");

			return;
		}
		axios
			.get("https://api.chatengine.io/users/me/", {
				headers: {
					"project-id": "14c85376-da10-4bee-8503-e4887e270c08",
					"user-name": user.email,
					"user-secret": user.uid,
				},
			})
			.then(() => {
				setLoading(false);
			})
			.catch(() => {
				let formdata = new FormData();
				formdata.append("email", user.email);
				formdata.append("username", user.email);
				formdata.append("secret", user.uid);

				getPhoto(user.photoURL).then((avatar) => {
					formdata.append("avatar", avatar, avatar.name);

					axios
						.post("https://api.chatengine.io/users/", formdata, {
							headers: {
								"private-key": "99cfaf15-4900-4fb7-9e46-942bd92a45bd",
							},
						})
						.then(() => setLoading(false))
						.catch((err) => console.log(err));
				});
			});
	}, [user, history]);

	if (!user || loading) return "Loading...";

	return (
		<div className="chat-page">
			<nav class="navbar navbar-light bg-light justify-content-between">
				<h1 class="navbar-brand">Navbar</h1>
				<button onClick={logOut} class="btn btn-outline-danger my-2 my-sm-0">
					Log Out
				</button>
			</nav>

			<ChatEngine
				height="calc(100vh - 66px)"
				projectID="14c85376-da10-4bee-8503-e4887e270c08"
				userName={user.email}
				userSecret={user.uid}
			/>
		</div>
	);
};
