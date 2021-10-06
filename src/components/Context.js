import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const authContext = React.createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
	const [loading, setloading] = useState(true);
	const [user, setUser] = useState(null);
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
			setloading(false);
			if (user) {
				history.push("/chats");
			}
		});
	}, [user, history]);

	const value = { user };

	return (
		<authContext.Provider value={value}>
			{!loading && children}
		</authContext.Provider>
	);
};
////comment
