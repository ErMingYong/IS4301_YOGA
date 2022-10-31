import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./AddServices.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import LazadaIcon from "../../icons/lazada.png";
import Qoo10Icon from "../../icons/qoo10.png";
import ShopeeIcon from "../../icons/shopee.png";
import TaoBaoIcon from "../../icons/taobao.png";
import ZaloraIcon from "../../icons/zalora.png";
import AliExpressIcon from "../../icons/aliexpress.png";
import AmazonIcon from "../../icons/amazon.png";
import AsosIcon from "../../icons/asos.png";
import SheinIcon from "../../icons/shein.png";

import DBSIcon from "../../icons/dbs.png";
import OCBCIcon from "../../icons/ocbc.png";
import UOBIcon from "../../icons/uob.png";
import HSBCIcon from "../../icons/hsbc.png";
import StandardCharteredIcon from "../../icons/standard_chartered.png";

import TigerBrokerIcon from "../../icons/tiger_broker.png";
import MooMooIcon from "../../icons/moomoo.png";
import PhillipSecuritiesIcon from "../../icons/phillip_securities.png";
import SaxoIcon from "../../icons/saxo.png";
import SyfeIcon from "../../icons/syfe.png";
import DBSVickersIcon from "../../icons/dbs_vickers.png";
import OCBCSecuritiesIcon from "../../icons/ocbc_securities.png";
import UOBKayHianIcon from "../../icons/uob_kay_hian.png";

import GrabIcon from "../../icons/grab.png";
import VisaIcon from "../../icons/visa.png";
import MastercardIcon from "../../icons/mastercard.png";
import AmericanExpressIcon from "../../icons/american_express.png";
import PaypalIcon from "../../icons/paypal.png";

import FacebookIcon from "../../icons/facebook.png";
import TwitterIcon from "../../icons/twitter.png";
import InstagramIcon from "../../icons/instagram.png";
import TiktokIcon from "../../icons/tiktok.png";

import AppleIcon from "../../icons/apple.png";
import GoogleIcon from "../../icons/google.png";
import SingPassIcon from "../../icons/singpass.png";

import SteamIcon from "../../icons/steam.png";
import RiotIcon from "../../icons/riot.png";
import PlaystationIcon from "../../icons/playstation.png";
import EpicIcon from "../../icons/epic.png";
import NintendoIcon from "../../icons/nintendo.png";

import Header from "../../components/Header/Header.js";

function AddServices() {
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
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						E-Commerce:
					</Card.Text>
					<div>
						<img
							src={LazadaIcon}
							alt="Lazada"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={Qoo10Icon}
							alt="Qoo10"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={ShopeeIcon}
							alt="Shopee"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={TaoBaoIcon}
							alt="TaoBao"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={ZaloraIcon}
							alt="Zalora"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={AliExpressIcon}
							alt="AliExpress"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={AmazonIcon}
							alt="Amazon"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={AsosIcon}
							alt="ASOS"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={SheinIcon}
							alt="SHEIN"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						Banking and Finance:
					</Card.Text>
					<div>
						<img
							src={DBSIcon}
							alt="DBS"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={OCBCIcon}
							alt="OCBC"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={UOBIcon}
							alt="UOB"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={HSBCIcon}
							alt="HSBC"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={StandardCharteredIcon}
							alt="Standard Chartered"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						Trading and Investments:
					</Card.Text>
					<div>
						<img
							src={TigerBrokerIcon}
							alt="Tiger Broker"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={MooMooIcon}
							alt="MooMoo"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={PhillipSecuritiesIcon}
							alt="Phillip Securities"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={SaxoIcon}
							alt="Saxo"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={SyfeIcon}
							alt="Syfe"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={DBSVickersIcon}
							alt="DBS Vickers"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={OCBCSecuritiesIcon}
							alt="OCBCSecurities"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={UOBKayHianIcon}
							alt="UOB Kay Hian"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						Payments:
					</Card.Text>
					<div>
						<img
							src={GrabIcon}
							alt="Grab"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={VisaIcon}
							alt="Visa"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={MastercardIcon}
							alt="Mastercard"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={AmericanExpressIcon}
							alt="American Express"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={PaypalIcon}
							alt="Paypal"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						Social Media:
					</Card.Text>
					<div>
						<img
							src={FacebookIcon}
							alt="Facebook"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={TwitterIcon}
							alt="Twitter"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={InstagramIcon}
							alt="Instagram"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={TiktokIcon}
							alt="Tiktok"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						Accounts:
					</Card.Text>
					<div>
						<img
							src={GoogleIcon}
							alt="Google"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={AppleIcon}
							alt="Apple"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={SingPassIcon}
							alt="SingPass"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "70%",
					}}
				>
					<Card.Text
						style={{
							fontSize: "1.5rem",
							textDecoration: "underline",
						}}
					>
						Games:
					</Card.Text>
					<div>
						<img
							src={SteamIcon}
							alt="Steam"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={RiotIcon}
							alt="Riot"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={PlaystationIcon}
							alt="Playstation"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={EpicIcon}
							alt="Epic Games"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
						<img
							src={NintendoIcon}
							alt="Nintendo"
							height={60}
							width={60}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
		</>
	);
}

export default AddServices;
