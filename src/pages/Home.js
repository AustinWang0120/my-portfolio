import { Container } from "react-bootstrap";
import Introduction from "../components/home/Introduction";
import Description from "../components/home/Description";
import Contact from "../components/home/Contact";
import Layout from "../layouts/Layout";

const Home = () => {
	return (
		<Layout>
			<Container className="home">
				<Introduction />

				<Description />
			</Container>
		</Layout>
	);
};

export default Home;
