import { Container } from "react-bootstrap";
import Layout from "../layouts/Layout";
import Details from "../components/Details";
import SkillSet from "../components/SkillSet";

const About = () => {
	return (
		<Layout>
			<Container className="about">
				<Details />

				<h1 className="heading text-center">
					<span className="purple-text">SkillSet</span> I Have
				</h1>
				<SkillSet />
			</Container>
		</Layout>
	);
};

export default About;
