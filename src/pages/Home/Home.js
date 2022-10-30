import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header/Header.js";

import UserProfileIcon from "../../icons/user_profile_pic.png";
import ShopeeIcon from "../../icons/shopee.png";
import AmazonIcon from "../../icons/amazon.png";
import TaobaoIcon from "../../icons/taobao.png";
import GrabIcon from "../../icons/grab.png";
import TwitterIcon from "../../icons/twitter.png";
import DBSIcon from "../../icons/dbs.png";
import VisaIcon from "../../icons/visa.png";
import TigerBrokerIcon from "../../icons/tiger_broker.png";
import GoogleIcon from "../../icons/google.png";
import AppleIcon from "../../icons/apple.png";
import SingPassIcon from "../../icons/singpass.png";
import AdditionIcon from "../../icons/addition.png";

export const user = {
	name: "Jon",
};

function Home() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();

			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};

	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/");

		fetchUserName();
	}, [user, loading]);

	return (
		<>
			<Header />
			<Container className="container">
				<Container lassName="inner_container">
					<img
						className="brand_image"
						src="/favicon.ico"
						alt="Brand Logo"
						height={80}
						width={80}
					/>
					<h1 className="title">Your Dashboard</h1>
					<img
						className="profile_image"
						src={UserProfileIcon}
						alt="User Profile"
						height={80}
						width={80}
					/>
				</Container>
				<Container className="inner_container"></Container>
			</Container>
		</>
	);
}

export default Home;
