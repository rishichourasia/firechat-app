import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const authContext = React.createContext();

export const useAuth = () => createContext(authContext);

export const AuthProvider = ({ children }) => {
	const [loading, setloading] = useState(true);
	const [user, setUser] = useState({});
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
			setloading(false);
			history.push("/chats");
		});
	}, [user, history]);

	const value = { user };

	return (
		<AuthProvider.Provider value={value}>
			{!loading && children}
		</AuthProvider.Provider>
	);
};
