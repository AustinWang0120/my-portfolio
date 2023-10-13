import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { parseDuties } from "../utils/parseDuties";
import Layout from "../layouts/Layout";
import ExperienceCard from "../components/experience/ExperienceCard";
import antraLogo from "../assets/companies/antra.jpeg";
import antraDuties from "../assets/companies/antra.txt";
import bpdaLogo from "../assets/companies/bpda.jpeg";
import bpdaDuties from "../assets/companies/bpda.txt";
import boardxLogo from "../assets/companies/boardx.jpeg";
import boardxDuties from "../assets/companies/boardx.txt";

const Experience = () => {
	const [duties1, setDuties1] = useState([]);
	const [duties2, setDuties2] = useState([]);
	const [duties3, setDuties3] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch(antraDuties).then(response => response.text()),
			fetch(bpdaDuties).then(response => response.text()),
			fetch(boardxDuties).then(response => response.text()),
		]).then(([text1, text2, text3]) => {
			setDuties1(parseDuties(text1));
			setDuties2(parseDuties(text2));
			setDuties3(parseDuties(text3));
		});
	}, []);

	return (
		<Layout>
			<Container className="projects">
				<Row className="mb-5">
					<Col className="text-center">
						<h1 className="heading">
							My recent <span className="purple-text">works</span>
						</h1>
					</Col>
				</Row>

				<Row>
					<Col>
						<ExperienceCard
							logo={antraLogo}
							title={"Full Stack Developer"}
							project={"PatUI Component Library Development"}
							projectDescription={
								"Actively participated in developing the PatUI web suite, focusing on creating reusable React components, refining styles with SCSS, and ensuring rigorous unit testing and CI/CD integration."
							}
							duties={duties1}
						/>
					</Col>
				</Row>

				<Row>
					<Col>
						<ExperienceCard
							logo={bpdaLogo}
							title={"Full Stack Developer"}
							project={"Boston Streetwise Dashboard"}
							projectDescription={
								"Participated in developing an interactive map-based dashboard for Boston street management, encompassing front-end, backend, design collaboration, and secure authentication features."
							}
							duties={duties2}
						/>
					</Col>
				</Row>

				<Row>
					<Col>
						<ExperienceCard
							logo={boardxLogo}
							title={"Front End Developer"}
							project={"AI Collaborative Digital Whiteboard"}
							projectDescription={
								"Assisted in building a dynamic homepage and a collaborative office feature using Meteor, Angular, and PostgreSQL, enhancing real-time multi-user interactions and broadening audience reach with bilingual support."
							}
							duties={duties3}
						/>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Experience;
