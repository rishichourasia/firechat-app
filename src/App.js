import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { AuthProvider } from "./components/Context";

function App() {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Switch>
						<Route path="/" component={Login} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
