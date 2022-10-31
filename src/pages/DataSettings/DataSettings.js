import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./DataSettings.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Header from "../../components/Header/Header.js";

import DBSIcon from "../../icons/dbs.png";
import OCBCIcon from "../../icons/ocbc.png";
import MasterCardIcon from "../../icons/mastercard.png";
import VisaIcon from "../../icons/visa.png";
import UOBIcon from "../../icons/uob.png";

const data1 = {
	fileName: "August_Paycheck.pdf",
	dateUploaded: "02-09-2022",
	fileType: "Pay / Remuneration",
};

const data2 = {
	fileName: "House_Mortgage.jpg",
	dateUploaded: "28-08-2022",
	fileType: "Property / Proof of Ownership",
};

const data3 = {
	fileName: "Visa_Card_Bill_Aug_2022.pdf",
	dateUploaded: "27-08-2022",
	fileType: "Credit Card Bill",
};

function DataSettings() {
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
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
			<h1
				className="title"
				style={{
					fontWeight: "bold",
					marginTop: "3rem",
					height: "4rem",
					textAlign: "center",
				}}
			>
				Uploaded Documents
			</h1>
			<div
				style={{
					margin: "1rem auto",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button href="/uploadDocument">Upload New Document</Button>
			</div>
			<Container>
				<Card style={{ margin: "2rem auto", width: "40%" }}>
					<div style={{ alignItems: "left", width: "100%" }}>
						<Card.Text>File Name: {data1.fileName}</Card.Text>
						<Card.Text>Date of Upload: {data1.dateUploaded}</Card.Text>
						<Card.Text>File Type: {data1.fileType}</Card.Text>
						<Card.Text>Services with Access: </Card.Text>
					</div>
					<div>
						<img
							src={DBSIcon}
							alt="DBS"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
						<img
							src={OCBCIcon}
							alt="OCBC"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container>
				<Card style={{ margin: "2rem auto", width: "40%" }}>
					<div style={{ alignItems: "left", width: "100%" }}>
						<Card.Text>File Name: {data2.fileName}</Card.Text>
						<Card.Text>Date of Upload: {data2.dateUploaded}</Card.Text>
						<Card.Text>File Type: {data2.fileType}</Card.Text>
						<Card.Text>Services with Access: </Card.Text>
					</div>
					<div>
						<img
							src={MasterCardIcon}
							alt="MasterCard"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
						<img
							src={VisaIcon}
							alt="Visa"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
			<Container>
				<Card style={{ margin: "2rem auto", width: "40%" }}>
					<div style={{ alignItems: "left", width: "100%" }}>
						<Card.Text>File Name: {data3.fileName}</Card.Text>
						<Card.Text>Date of Upload: {data3.dateUploaded}</Card.Text>
						<Card.Text>File Type: {data3.fileType}</Card.Text>
						<Card.Text>Services with Access: </Card.Text>
					</div>
					<div>
						<img
							src={DBSIcon}
							alt="DBS"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
						<img
							src={MasterCardIcon}
							alt="MasterCard"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
						<img
							src={UOBIcon}
							alt="UOB"
							height={50}
							width={50}
							style={{ margin: "1rem" }}
						/>
					</div>
				</Card>
			</Container>
		</>
	);
}

export default DataSettings;
