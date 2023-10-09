import { Container } from "react-bootstrap";
import Introduction from "../components/Introduction";
import Description from "../components/Description";
import Contact from "../components/Contact";
import Layout from "../layouts/Layout";

const Home = () => {
	return (
		<Layout>
			<Container className="home">
				<Introduction />

				<Description />

				<Contact />
			</Container>
		</Layout>
	);
};

export default Home;
