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
			<Navbar className="navbar" bg="dark" variant="dark">
				<Container>
					<Nav className="me-auto">
						<Navbar.Brand className="navbar_item">DATALOCK</Navbar.Brand>{" "}
						<Nav.Link className="navbar_item" href="#home">
							Home
						</Nav.Link>{" "}
						<Nav.Link className="navbar_item" href="#features">
							Features
						</Nav.Link>{" "}
						<Nav.Link className="navbar_item" href="#pricing">
							Pricing
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
