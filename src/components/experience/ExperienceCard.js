import React from "react";
import { Card, Button } from "react-bootstrap";

const ExperienceCard = ({
	image,
	title,
	description,
	buttonName,
	buttonLink,
}) => {
	return (
		<Card>
			<Card.Img variant="top" src={image} alt="Card image" />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				{buttonName && buttonLink && (
					<Button
						variant="primary"
						href={buttonLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						{buttonName}
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default ExperienceCard;
