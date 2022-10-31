import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Google.css";
import { auth, db, logout } from "../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";

import Header from "../../../components/Header/Header.js";

import GoogleIcon from "../../../icons/google.png";

export const company = {
	name: "Google",
	description:
		"Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.",
	emailAddress: "Personal Email Address",
	emailAddressExplantion1: "Direct contact method for transactional services",
	location: "Location Data",
	locationExplanation1:
		"Improved relevance of recommendations according to region",
	gender: "Gender Data",
	genderExplanation1:
		"Improved relevance of recommendations according to gender",
	age: "Age Data",
	ageExplanation1: "Improved relevance of recommendations according to age",
	searchHistory: "Google Search History Data",
	searchHistoryExplanation1:
		"Improved relevance of search results provided based on search history",
	searchHistoryExplanation2:
		"Improved recommendations based on personal search history",
	browserHistory: "Browser History Data",
	browserHistoryExplanation1:
		"Improved relevance of search results provided based on browsing history",
	browserHistoryExplanation2:
		"Improved recommendations based on personal browsing history",
	appleAccount: "Apple Account Data",
	appleAccountExplanation1:
		"Improved linking of personal data from Apple Account",
	creditCardRepaymentNotice: "Credit Card Repayment Notice Data",
	creditCardRepaymentNoticeExplanation1:
		"Improved analysis of personal credit rating",
	creditCardRepaymentNoticeExplanation2:
		"Improved recommendations based on Google's proprietary credit rating system",
	mobileWalletTransaction: "Mobile Wallet Transaction Data",
	mobileWalletTransactionExplanation1:
		"Improved analysis of personal credit rating",
};

function Google() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const [item1Check, setItem1Check] = useState(true);
	const [item2Check, setItem2Check] = useState(true);
	const [item3Check, setItem3Check] = useState(true);
	const [item4Check, setItem4Check] = useState(false);
	const [item5Check, setItem5Check] = useState(true);
	const [item6Check, setItem6Check] = useState(true);
	const [item7Check, setItem7Check] = useState(true);
	const [item8Check, setItem8Check] = useState(true);
	const [item9Check, setItem9Check] = useState(true);

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
						width: "80%",
					}}
				>
					<div style={{ display: "flex", margin: "1rem", width: "90%" }}>
						<img src={GoogleIcon} alt="Google" height={150} width={150} />
						<div style={{ margin: "0rem 5rem", width: "90%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.name}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.description}
							</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card.Text
					style={{
						textAlign: "left",
						borderBottom: "1px solid grey",
						width: "80%",
					}}
				>
					Year 2022
				</Card.Text>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.emailAddress}
							</Card.Text>
							<Card.Text>
								{">"} {company.emailAddressExplantion1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item1Check}
								value="1"
								onChange={(e) => setItem1Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.02</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.location}
							</Card.Text>
							<Card.Text>
								{">"} {company.locationExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item2Check}
								value="1"
								onChange={(e) => setItem2Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.20</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.searchHistory}
							</Card.Text>
							<Card.Text>
								{">"} {company.searchHistoryExplanation1}
							</Card.Text>
							<Card.Text>
								{">"} {company.searchHistoryExplanation2}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item3Check}
								value="1"
								onChange={(e) => setItem3Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.60</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.appleAccount}
							</Card.Text>
							<Card.Text>
								{">"} {company.appleAccountExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item4Check}
								value="1"
								onChange={(e) => setItem4Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.00</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.gender}
							</Card.Text>
							<Card.Text>
								{">"} {company.genderExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item5Check}
								value="1"
								onChange={(e) => setItem5Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.10</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.age}
							</Card.Text>
							<Card.Text>
								{">"} {company.ageExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item6Check}
								value="1"
								onChange={(e) => setItem6Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.02</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.browserHistory}
							</Card.Text>
							<Card.Text>
								{">"} {company.browserHistoryExplanation1}
							</Card.Text>
							<Card.Text>
								{">"} {company.browserHistoryExplanation2}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item7Check}
								value="1"
								onChange={(e) => setItem7Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.90</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.creditCardRepaymentNotice}
							</Card.Text>
							<Card.Text>
								{">"} {company.creditCardRepaymentNoticeExplanation1}
							</Card.Text>
							<Card.Text>
								{">"} {company.creditCardRepaymentNoticeExplanation2}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item8Check}
								value="1"
								onChange={(e) => setItem8Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.80</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						borderBottom: "1px solid grey",
					}}
				>
					<div style={{ display: "flex", width: "90%" }}>
						<div style={{ width: "70%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{company.mobileWalletTransaction}
							</Card.Text>
							<Card.Text>
								{">"} {company.mobileWalletTransactionExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check"
								type="checkbox"
								variant="outline-success"
								checked={item9Check}
								value="1"
								onChange={(e) => setItem9Check(e.currentTarget.checked)}
							>
								Checked
							</ToggleButton>
						</div>
						<div style={{ lineHeight: "0.9", textAlign: "center" }}>
							<Card.Text
								style={{
									fontSize: "1.3rem",
									margin: "1rem auto",
								}}
							>
								Estimated Credit (/Month)
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>$0.90</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
		</>
	);
}

export default Google;
