import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
	db,
} from "../../firebase";
import "./Register.css";

import DataLockIcon from "../../icons/datalock.png";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [dob, setDob] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	const register = () => {
		if (!name) alert("Please enter name");
		registerWithEmailAndPassword(name, email, password, address, dob, mobileNo);
	};

	useEffect(() => {
		if (loading) return;
		if (user) navigate("/home");
	}, [user, loading]);

	return (
		<>
			<h1
				className="title"
				style={{
					fontWeight: "bold",
					marginTop: "3rem",
					width: "100%",
					height: "4rem",
					textAlign: "center",
				}}
			>
				REGISTRATION
			</h1>
			<Container>
				<Card style={{ margin: "2rem auto ", width: "70%" }}>
					<img src={DataLockIcon} alt="DataLock" height={300} width={300} />
					<Card.Text style={{ fontSize: "2rem" }}>
						Create a New Account with DataLock now!
					</Card.Text>
					<Card.Text style={{ textAlign: "center" }}>
						While you are at it, you may connect some of your accounts at the
						end to get started with earning money from your data
					</Card.Text>
				</Card>
				<Card style={{ margin: "2rem auto ", width: "70%" }}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Full Name"
						></Form.Control>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="E-mail Address"
						></Form.Control>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Address</Form.Label>
						<Form.Control
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							placeholder="Address"
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Date of Birth</Form.Label>
						<Form.Control
							value={dob}
							onChange={(e) => setDob(e.target.value)}
							placeholder="D.O.B"
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control
							value={mobileNo}
							onChange={(e) => setMobileNo(e.target.value)}
							placeholder="Mobile Number"
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Button
							type="submit"
							href="/"
							style={{
								margin: "1rem",
								backgroundColor: "white",
								border: "none",
								color: "black",
								textDecoration: "underline",
							}}
						>
							Cancel
						</Button>
						<Button
							variant="primary"
							type="submit"
							onClick={register}
							style={{ margin: "1rem" }}
						>
							Submit
						</Button>
					</Form.Group>
				</Card>
			</Container>
		</>
	);
}

export default Register;
