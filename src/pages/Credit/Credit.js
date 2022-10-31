import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Credit.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header/Header.js";

export const data1 = {
	company: "DBS",
	iD: "23522638",
	Description:
		"Tax Invoice, Loan Repayment Invoice, Personal Email Address, Gender, Age, Google Acco...",
	date: "Sep 2022",
	amount: "$2.46",
	status: "Credited",
};
export const data2 = {
	company: "VISA",
	iD: "37212638",
	Description: "Tax Invoice, Loan Repayment Invoice",
	date: "Sep 2022",
	amount: "$0.85",
	status: "Credited",
};
export const data3 = {
	company: "DBS",
	iD: "12456356",
	Description:
		"Tax Invoice, Loan Repayment Invoice, Personal Email Address, Gender, Age, Google Acco...",
	date: "Aug 2022",
	amount: "$0.08",
	status: "Confirmed",
};

function Credit() {
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
						border: "1px solid black",
						borderRadius: "10%",
						display: "flex",
						textAlign: "center",
					}}
				>
					<Card.Body>
						<Card.Title>This Month's Credit</Card.Title>
						<Card.Text style={{ fontSize: "2rem" }}>SGD: 5.31</Card.Text>
					</Card.Body>
				</Card>
				<Card
					className="card"
					style={{
						border: "1px solid black",
						borderRadius: "10%",
						display: "flex",
						textAlign: "center",
					}}
				>
					<Card.Body>
						<Card.Title>Wallet</Card.Title>
						<Card.Text style={{ fontSize: "2rem" }}>SGD: 5.31</Card.Text>
						<Card.Text style={{ margin: "0rem", padding: "0rem" }}>
							<a href="/withdraw">Withdraw</a>
						</Card.Text>
					</Card.Body>
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
					<div style={{ display: "flex", margin: "1rem", width: "90%" }}>
						<Card.Text style={{ fontSize: "1.5rem", width: "15%" }}>
							{data1.company}
						</Card.Text>
						<div style={{ margin: "0rem 1rem", width: "90%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								ID: {data1.iD}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{data1.Description}
							</Card.Text>
						</div>
						<div style={{ lineHeight: "0.9" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>{data1.date}</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{data1.amount}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem", color: "blue" }}>
								{data1.status}
							</Card.Text>
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
					<div style={{ display: "flex", margin: "1rem", width: "90%" }}>
						<Card.Text style={{ fontSize: "1.5rem", width: "15%" }}>
							{data2.company}
						</Card.Text>
						<div style={{ margin: "0rem 1rem", width: "90%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								ID: {data2.iD}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{data2.Description}
							</Card.Text>
						</div>
						<div style={{ lineHeight: "0.9" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>{data2.date}</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{data2.amount}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem", color: "blue" }}>
								{data2.status}
							</Card.Text>
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
					<div style={{ display: "flex", margin: "1rem", width: "90%" }}>
						<Card.Text style={{ fontSize: "1.5rem", width: "15%" }}>
							{data3.company}
						</Card.Text>
						<div style={{ margin: "0rem 1rem", width: "90%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								ID: {data3.iD}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{data3.Description}
							</Card.Text>
						</div>
						<div style={{ lineHeight: "0.9" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>{data3.date}</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{data3.amount}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem", color: "green" }}>
								{data3.status}
							</Card.Text>
						</div>
					</div>
				</Card>
			</Container>
		</>
	);
}

export default Credit;
