import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import { auth, db, logout } from "../../firebase";
import {
	query,
	collection,
	getDocs,
	where,
	updateDoc,
} from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Header from "../../components/Header/Header.js";

import ProfileIcon from "../../icons/user_profile_pic.png";

export const data = {
	name: "Jon",
	email: "test@test.com",
};

function Register() {
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [dob, setDob] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [name, setName] = useState("");
	const [doc, setDoc] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();

			setName(data.name);
			setAddress(data.address);
			setDob(data.dob);
			setMobileNo(data.mobileNo);
			setEmail(data.email);
			setDoc(doc);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};

	const update = () => {
		if (!name) alert("Please enter name");
		if (!address) alert("Please enter Address");
		if (!dob) alert("Please enter Date of Birth");
		if (!mobileNo) alert("Please enter Mobile Number");

		const data = {
			name: { name },
			email: { email },
			address: { address },
			dob: { dob },
			mobileNo: { mobileNo },
		};

		try {
			const docRef = query(
				collection(db, "users"),
				where("uid", "==", user?.uid)
			);
			updateDoc(docRef, data);
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
			<h1
				className="title"
				style={{
					fontWeight: "bold",
					marginTop: "3rem",
					height: "4rem",
					textAlign: "center",
				}}
			>
				Profile Page
			</h1>
			<Container>
				<Card style={{ margin: "2rem auto ", width: "70%" }}>
					<img src={ProfileIcon} alt="DataLock" height={300} width={300} />
					<Card.Text style={{ fontSize: "2rem" }}>Welcome {name} !</Card.Text>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							value={name}
							type="email"
							onChange={(e) => setName(e.target.value)}
							placeholder="Full Name"
						></Form.Control>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Address</Form.Label>
						<Form.Control
							value={address}
							placeholder="Address"
							onChange={(e) => setAddress(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Date of Birth</Form.Label>
						<Form.Control
							value={dob}
							placeholder="Date of Birth"
							onChange={(e) => setDob(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control
							value={mobileNo}
							placeholder="Mobile Number"
							onChange={(e) => setMobileNo(e.target.value)}
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
							onClick={update}
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
