import React, { useState } from "react";
import { Card, Button, ListGroup, Image } from "react-bootstrap";

const ExperienceCard = ({
	logo,
	title,
	date,
	project,
	projectDescription,
	duties,
}) => {
	const [showDetails, setShowDetails] = useState(false);

	const handleToggleDetails = () => {
		setShowDetails(prevShowDetails => !prevShowDetails);
	};

	return (
		<Card className="mb-3">
			<Card.Header>
				<div className="d-flex align-items-center">
					<Image src={logo} alt={"Company logo"} className="mr-3" rounded />
					<div>
						<Card.Title>{title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
						<Card.Text>{project}</Card.Text>
						<Card.Text>{projectDescription}</Card.Text>
					</div>
				</div>
			</Card.Header>
			<Card.Body>
				<Button onClick={handleToggleDetails}>
					{showDetails ? "Hide Details" : "More Details"}
				</Button>
				{showDetails && (
					<ListGroup className="mt-3">
						{duties.map((duty, index) => (
							<ListGroup.Item key={index}>{duty}</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Card.Body>
		</Card>
	);
};

export default ExperienceCard;
