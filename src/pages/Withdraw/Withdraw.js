import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Withdraw.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import Header from "../../components/Header/Header.js";

import BankTransferIcon from "../../icons/bank_transfer.png";
import PayLahIcon from "../../icons/paylah.png";
import PayAnyoneIcon from "../../icons/payanyone.png";
import InfinityIcon from "../../icons/infinity.png";
import OCBCIcon from "../../icons/ocbc.png";
import DBSIcon from "../../icons/dbs.png";
import DeleteIcon from "../../icons/delete.png";
import AdditionIcon from "../../icons/addition.png";

export const account1 = {
	bank: "OCBC",
	name: "JON**********",
	accountNo: "********917",
	status: "Verified",
};
export const account2 = {
	bank: "DBS",
	name: "JON**********",
	accountNo: "********661",
	status: "Verified",
};

function Withdraw() {
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

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Header />
			<Container className="container">
				<Container lassName="inner_container">
					<h1 className="title">Payment</h1>
				</Container>
				<Container className="inner_container"></Container>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						marginRight: "40rem",
						border: "none",
					}}
				>
					<Card.Body>
						<Card.Title style={{ fontSize: "2rem", fontWeight: "bold" }}>
							Wallet
						</Card.Title>
						<Card.Text style={{ fontSize: "2rem" }}>SGD: 5.31</Card.Text>
					</Card.Body>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						border: "1px solid black",
						borderRadius: "10%",
						display: "flex",
						width: "80%",
					}}
				>
					<Card.Text>
						<img
							src={BankTransferIcon}
							alt="Bank Transfer"
							height={100}
							width={100}
							style={{ margin: "1rem" }}
						/>
						<img
							src={PayLahIcon}
							alt="DBS Paylah"
							height={100}
							width={100}
							style={{ margin: "1rem" }}
						/>
						<img
							src={PayAnyoneIcon}
							alt="OCBC PayAnyone"
							height={100}
							width={100}
							style={{ margin: "1rem" }}
						/>
						<img
							src={InfinityIcon}
							alt="UOB Infinity"
							height={100}
							width={100}
							style={{ margin: "1rem" }}
						/>
					</Card.Text>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						border: "1px solid black",
						borderRadius: "10%",
					}}
				>
					<div style={{ display: "flex", margin: "1rem", width: "90%" }}>
						<img
							src={OCBCIcon}
							alt="OCBC"
							height={100}
							width={100}
							style={{ margin: "1rem 4rem 1rem 1rem" }}
						/>
						<div style={{ margin: "auto", width: "90%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{account1.name}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{account1.accountNo}
							</Card.Text>
						</div>
						<div style={{ margin: "auto" }}>
							<Card.Text
								style={{
									fontSize: "2rem",
									color: "green",
								}}
							>
								{account1.status}
							</Card.Text>
							<Button
								onClick={handleShow}
								style={{
									backgroundColor: "white",
									border: "none",
								}}
							>
								<img src={DeleteIcon} alt="Delete" height={30} width={30} />
							</Button>
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
						border: "1px solid black",
						borderRadius: "10%",
					}}
				>
					<div style={{ display: "flex", margin: "1rem", width: "90%" }}>
						<img
							src={DBSIcon}
							alt="DBS"
							height={100}
							width={100}
							style={{ margin: "1rem 4rem 1rem 1rem" }}
						/>
						<div style={{ margin: "auto", width: "90%" }}>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{account2.name}
							</Card.Text>
							<Card.Text style={{ fontSize: "1.5rem" }}>
								{account2.accountNo}
							</Card.Text>
						</div>
						<div style={{ margin: "auto" }}>
							<Card.Text
								style={{
									fontSize: "2rem",
									color: "green",
								}}
							>
								{account2.status}
							</Card.Text>
							<Button
								onClick={handleShow}
								style={{
									backgroundColor: "white",
									border: "none",
								}}
							>
								<img src={DeleteIcon} alt="Delete" height={30} width={30} />
							</Button>
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
						border: "1px solid black",
						borderRadius: "10%",
					}}
				>
					<Button
						href="/addAccount"
						style={{ backgroundColor: "white", border: "none" }}
					>
						<img
							src={AdditionIcon}
							alt="Add Account"
							height={80}
							width={80}
							style={{ margin: "0rem" }}
						/>
					</Button>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						margin: "auto",
						marginBottom: "3rem",
						width: "80%",
					}}
				>
					<Card.Body>
						<Card.Title style={{ fontSize: "1.5rem", width: "100%" }}>
							Withdraw Amount (Minimum: $10)
						</Card.Title>
						<InputGroup className="mb-3">
							<InputGroup.Text>$</InputGroup.Text>&nbsp;
							<Form.Control aria-label="Amount (to the nearest dollar)" />
						</InputGroup>
						<Button
							style={{
								border: "1px solid black",
								borderRadius: "15%",
								backgroundColor: "green",
								color: "white",
								height: "2rem",
								width: "10rem",
								margin: "1rem",
							}}
							onClick={handleShow}
						>
							Withdraw
						</Button>
						<Card.Title style={{ fontSize: "1.3rem", width: "100%" }}>
							* Takes 3 - 5 business days to reflect in your bank account
						</Card.Title>
					</Card.Body>
				</Card>
			</Container>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Bank Account Deletion</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					* Deletion of Bank Account will take 1 - 2 Business Days
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						Accept
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Reject
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Withdraw;
