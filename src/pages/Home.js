import { Container } from "react-bootstrap";
import Introduction from "../components/Introduction";
import Description from "../components/Description";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<Container className="home">
			<Introduction />

			<Description />

			<Contact />
		</Container>
	);
};

export default Home;
