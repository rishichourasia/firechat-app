import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyDOoWVWRNTjiJMubh3uBNFhGxwMSXPwffo",
		authDomain: "firechat-ceb09.firebaseapp.com",
		projectId: "firechat-ceb09",
		storageBucket: "firechat-ceb09.appspot.com",
		messagingSenderId: "610117387110",
		appId: "1:610117387110:web:e15edc896d839c4becbea7",
	})
	.auth();
