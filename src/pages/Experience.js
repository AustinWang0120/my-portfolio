import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { parseDuties } from "../utils/parseDuties";
import Layout from "../layouts/Layout";
import ExperienceCard from "../components/experience/ExperienceCard";
import wayfairLogo from "../assets/companies/wayfair.jpeg";
import wayfairDuties from "../assets/companies/wayfair.txt";
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
			fetch(wayfairDuties).then(response => response.text()),
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
							logo={wayfairLogo}
							title={"Senior Full-Stack Developer"}
							project={"Enhanced E-commerce Experience"}
							projectDescription={
								"Participated in the redesign of Wayfair's e-commerce platform, emphasizing a user-centric design, enhanced performance, and tighter integration with backend systems. Collaborated with cross-functional teams to identify areas for improvement, implement best practices, and integrate cutting-edge frontend and backend technologies."
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
							project={"Urban Street Management System"}
							projectDescription={
								"As a dedicated full-stack developer, my role encompassed both front-end and back-end development to support Boston's innovative street management solutions. This system was built to facilitate smoother urban planning and street management for Boston, providing real-time insights to street managers."
							}
							duties={duties2}
						/>
					</Col>
				</Row>

				<Row>
					<Col>
						<ExperienceCard
							logo={boardxLogo}
							title={"Full Stack Developer"}
							project={"Real-time Collaborative Office Suite"}
							projectDescription={
								"As a senior full-stack developer, I was involved in the seamless integration of front-end and back-end functionalities for the BoardX collaborative office suite. The platform facilitates real-time collaboration among users, with an emphasis on enhancing productivity and user engagement. Significant efforts were made to cater to a global audience, ensuring versatile language support and efficient real-time data synchronization."
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
