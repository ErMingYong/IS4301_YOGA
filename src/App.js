import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";
import Register from "./pages/Register/Register.js";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Settings from "./pages/Settings/Settings.js";
import DataSettings from "./pages/DataSettings/DataSettings.js";
import Credit from "./pages/Credit/Credit.js";
import Withdraw from "./pages/Withdraw/Withdraw.js";

import DBS from "./pages/companies/DBS/DBS.js";
import Amazon from "./pages/companies/Amazon/Amazon.js";
import Taobao from "./pages/companies/Taobao/Taobao.js";
import Grab from "./pages/companies/Grab/Grab.js";
import Twitter from "./pages/companies/Twitter/Twitter.js";
import Visa from "./pages/companies/Visa/Visa.js";
import TigerBroker from "./pages/companies/TigerBroker/TigerBroker.js";
import Google from "./pages/companies/Google/Google.js";
import Apple from "./pages/companies/Apple/Apple.js";
import SingPass from "./pages/companies/SingPass/SingPass.js";

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
					<Route exact path="/settings" element={<Settings />} />
					<Route exact path="/dataSettings" element={<DataSettings />} />
					<Route exact path="/credit" element={<Credit />} />
					<Route exact path="/withdraw" element={<Withdraw />} />
					<Route exact path="/DBS" element={<DBS />} />
					<Route exact path="/Amazon" element={<Amazon />} />
					<Route exact path="/Taobao" element={<Taobao />} />
					<Route exact path="/Grab" element={<Grab />} />
					<Route exact path="/Twitter" element={<Twitter />} />
					<Route exact path="/Visa" element={<Visa />} />
					<Route exact path="/TigerBroker" element={<TigerBroker />} />
					<Route exact path="/Google" element={<Google />} />
					<Route exact path="/Apple" element={<Apple />} />
					<Route exact path="/SingPass" element={<SingPass />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
