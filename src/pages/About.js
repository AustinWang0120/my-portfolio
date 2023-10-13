import { Container } from "react-bootstrap";
import Layout from "../layouts/Layout";
import Details from "../components/about/Details";
import SkillSet from "../components/about/SkillSet";
import Tools from "../components/about/Tools";

const About = () => {
	return (
		<Layout>
			<Container className="about">
				<Details />

				<h1 className="heading text-center">
					<span className="purple-text">SkillSet</span> I Have
				</h1>
				<SkillSet />

				<h1 className="heading text-center">
					<span className="purple-text">Tools</span> I Use
				</h1>
				<Tools />
			</Container>
		</Layout>
	);
};

export default About;
