import React, { useState } from "react";
import { Card, ListGroup, Image } from "react-bootstrap";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const ExperienceCard = ({
	logo,
	title,
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
					<Card.Text className="experience-card__project">{project}</Card.Text>
					<Card.Text className="experience-card__project-description">
						{projectDescription}
					</Card.Text>
				</div>
			</Card.Header>
			<Card.Body className="experience-card__body">
				<ListGroup
					className={`experience-card__duties ${
						showDetails ? "experience-card__duties--show" : ""
					}`}
				>
					{duties.map((duty, index) => (
						<ListGroup.Item key={index} className="experience-card__duty">
							{duty}
						</ListGroup.Item>
					))}
				</ListGroup>
				<div onClick={handleToggleDetails} className="experience-card__button">
					{showDetails ? (
						<span>
							Hide details
							<AiOutlineArrowUp />
						</span>
					) : (
						<span>
							More details
							<AiOutlineArrowDown />
						</span>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default ExperienceCard;
