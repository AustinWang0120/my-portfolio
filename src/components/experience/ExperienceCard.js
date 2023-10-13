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
		<Card className="experience-card">
			<Card.Header className="experience-card__header">
				<Image
					src={logo}
					alt={"Company logo"}
					roundedCircle
					className="experience-card__logo"
				/>
				<div className="experience-card__text">
					<Card.Title className="experience-card__title">{title}</Card.Title>
					<Card.Subtitle className="experience-card__date">
						{date}
					</Card.Subtitle>
					<Card.Text className="experience-card__project">{project}</Card.Text>
					<Card.Text className="experience-card__project-description">
						{projectDescription}
					</Card.Text>
				</div>
			</Card.Header>
			<Card.Body className="experience-card__body">
				{showDetails && (
					<ListGroup className="experience-card__duties">
						{duties.map((duty, index) => (
							<ListGroup.Item key={index} className="experience-card__duty">
								{duty}
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
				<Button
					onClick={handleToggleDetails}
					className="experience-card__button"
				>
					{showDetails ? "Hide Details" : "More Details"}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ExperienceCard;
