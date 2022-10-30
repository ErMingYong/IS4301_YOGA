import React from "react";
import "./Header.css";
import { logout } from "../../firebase";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container className="container">
					<Nav
						className="me-auto"
						style={{
							margin: "auto",
						}}
					>
						<Navbar.Brand className="navbar_item">DATALOCK</Navbar.Brand>{" "}
						<Nav.Link className="navbar_item" href="/home">
							Home
						</Nav.Link>{" "}
						<Nav.Link className="navbar_item" href="/settings">
							Account Settings
						</Nav.Link>{" "}
						<Nav.Link className="navbar_item" href="/dataSettings">
							Manage My Data
						</Nav.Link>{" "}
						<Button className="navbar_item" variant="primary" onClick={logout}>
							Logout
						</Button>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
