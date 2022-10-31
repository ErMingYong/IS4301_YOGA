import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	logInWithEmailAndPassword,
	signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import DataLockIcon from "../../icons/datalock.png";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) navigate("/home");
	}, [user, loading]);

	return (
		<Container>
			<Card style={{ margin: "8rem auto ", width: "70%" }}>
				<img src={DataLockIcon} alt="DataLock" height={300} width={300} />
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
				<Button
					variant="primary"
					type="submit"
					onClick={() => logInWithEmailAndPassword(email, password)}
					style={{ marginBottom: "0.5rem" }}
				>
					Submit
				</Button>
				<Button variant="secondary" type="submit" onClick={signInWithGoogle}>
					Login with Google
				</Button>
				<Card.Text>
					Don't have an account? <a href="/register">Register</a>
				</Card.Text>
			</Card>
		</Container>
	);
}

export default Login;
