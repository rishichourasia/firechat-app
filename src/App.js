import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { AuthProvider } from "./components/Context";
import { Chats } from "./components/Chats";

function App() {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Switch>
						<Route path="/chats" component={Chats} />
						<Route path="/" component={Login} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
