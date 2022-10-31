import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";
import Register from "./pages/Register/Register.js";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Credit from "./pages/Credit/Credit.js";
import Withdraw from "./pages/Withdraw/Withdraw.js";

import DBS from "./pages/companies/DBS/DBS.js";
import Amazon from "./pages/companies/Amazon/Amazon.js";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/reset" element={<Reset />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/credit" element={<Credit />} />
					<Route exact path="/withdraw" element={<Withdraw />} />
					<Route exact path="/DBS" element={<DBS />} />
					<Route exact path="/Amazon" element={<Amazon />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
