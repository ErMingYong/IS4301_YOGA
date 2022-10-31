import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./SingPass.css";
import { auth, db, logout } from "../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";

import Header from "../../../components/Header/Header.js";

import SingPassIcon from "../../../icons/singpass.png";

export const company = {
	name: "SingPass",
	description:
		"SingPass is brough to you from the Singapore Smart Nation initiative. The Smart Nation is an initiative by the Government of Singapore to harness infocomm technologies, networks and big data to create tech-enabled solutions.",
	emailAddress: "Personal Email Address",
	emailAddressExplantion1: "Direct contact method for transactional services",
	location: "Location Data",
	locationExplanation1:
		"Improved relevance of service recommendations according to region",
	gender: "Gender Data",
	genderExplanation1: "Foundational data for SingPass services",
	age: "Age Data",
	ageExplanation1: "Foundational data for SingPass services",
	address: "Address Data",
	addressExplanation1: "Foundational data for SingPass services",
	familyDetails: "Family Details Data",
	familyDetailsExplanation1:
		"Identity data on family members and next-of-kin for contact tracing purposes",
	familyDetailsExplanation2: "Mapping of all citizens of Singapore",
	appleAccount: "Apple Account Data",
	appleAccountExplanation1:
		"Improved linking of personal data from Apple Account",
	googleAccount: "Apple Account Data",
	googleAccountExplanation1:
		"Improved linking of personal data from Apple Account",
	personalIncomeStatement: "Personal Income Statement",
	personalIncomeStatementExplanation1:
		"Improve and Simplify tax payable and detuctable process",
	personalIncomeStatementExplanation2:
		"Required for categorisation and qualification of government grants and subsidies",
	charitableDonationsStatement: "Charitable Donations Statement",
	charitableDonationsStatementExplanation1:
		"Required for qualification of government tax deductibles",
};

function SingPass() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const [item1Check, setItem1Check] = useState(true);
	const [item2Check, setItem2Check] = useState(true);
	const [item3Check, setItem3Check] = useState(true);
	const [item4Check, setItem4Check] = useState(true);
	const [item5Check, setItem5Check] = useState(true);
	const [item6Check, setItem6Check] = useState(true);
	const [item7Check, setItem7Check] = useState(true);
	const [item8Check, setItem8Check] = useState(true);
	const [item9Check, setItem9Check] = useState(true);
	const [item10Check, setItem10Check] = useState(true);
	const [item11Check, setItem11Check] = useState(true);
	const [item12Check, setItem12Check] = useState(true);
	const [item13Check, setItem13Check] = useState(true);

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
						<img src={SingPassIcon} alt="SingPass" height={150} width={150} />
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
								id="toggle-check-1"
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
								{company.location}
							</Card.Text>
							<Card.Text>
								{">"} {company.locationExplanation1}
							</Card.Text>
						</div>
						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-2"
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
								id="toggle-check-3"
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
								{company.age}
							</Card.Text>
							<Card.Text>
								{">"} {company.ageExplanation1}
							</Card.Text>
						</div>
						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-4"
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
								{company.address}
							</Card.Text>
							<Card.Text>
								{">"} {company.addressExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-5"
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
								{company.familyDetails}
							</Card.Text>
							<Card.Text>
								{">"} {company.familyDetailsExplanation1}
							</Card.Text>
							<Card.Text>
								{">"} {company.familyDetailsExplanation2}
							</Card.Text>
						</div>
						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-6"
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
								{company.appleAccount}
							</Card.Text>
							<Card.Text>
								{">"} {company.appleAccountExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-7"
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
								{company.googleAccount}
							</Card.Text>
							<Card.Text>
								{">"} {company.googleAccountExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-8"
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
								id="toggle-check-9"
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
								{company.age}
							</Card.Text>
							<Card.Text>
								{">"} {company.ageExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-10"
								type="checkbox"
								variant="outline-success"
								checked={item10Check}
								value="1"
								onChange={(e) => setItem10Check(e.currentTarget.checked)}
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
								{company.familyDetails}
							</Card.Text>
							<Card.Text>
								{">"} {company.familyDetailsExplanation1}
							</Card.Text>
							<Card.Text>
								{">"} {company.familyDetailsExplanation2}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-11"
								type="checkbox"
								variant="outline-success"
								checked={item11Check}
								value="1"
								onChange={(e) => setItem11Check(e.currentTarget.checked)}
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
								{company.personalIncomeStatement}
							</Card.Text>
							<Card.Text>
								{">"} {company.personalIncomeStatementExplanation1}
							</Card.Text>
							<Card.Text>
								{">"} {company.personalIncomeStatementExplanation2}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-12"
								type="checkbox"
								variant="outline-success"
								checked={item12Check}
								value="1"
								onChange={(e) => setItem12Check(e.currentTarget.checked)}
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
								{company.charitableDonationsStatement}
							</Card.Text>
							<Card.Text>
								{">"} {company.charitableDonationsStatementExplanation1}
							</Card.Text>
						</div>

						<div style={{ margin: "auto 8rem", width: "40%" }}>
							<ToggleButton
								className="mb-2"
								id="toggle-check-13"
								type="checkbox"
								variant="outline-success"
								checked={item13Check}
								value="1"
								onChange={(e) => setItem13Check(e.currentTarget.checked)}
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
		</>
	);
}

export default SingPass;
