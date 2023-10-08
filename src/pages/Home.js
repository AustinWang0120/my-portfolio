import { Container, Row, Col, Image } from "react-bootstrap";
import homeMain from "../assets/home-main.svg";
import homeAvatar from "../assets/avatar.svg";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<Container className="p-5">
			<Row className="align-items-center">
				<Col md={6}>
					<h1>
						Hi There! <span className="wave">👋🏻</span>
					</h1>

					<h1>
						I'm <span className="name">Austin Wang</span>
					</h1>

					<p>
						MERN Stack Developer
						<br />
						Open Source Contributor
					</p>
				</Col>

				<Col md={6}>
					<Image src={homeMain} alt="Coder is programming" fluid />
				</Col>
			</Row>

			<Row>
				<Col md={8}>
					<h1>Let Me Introduce Myself</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					<p>
						Vitae quo ducimus nisi itaque aliquid, labore modi delectus possimus
						exercitationem ea aliquam hic ut.
					</p>
					<p>
						Distinctio quisquam velit necessitatibus excepturi tempore autem.
					</p>
				</Col>

				<Col
					md={4}
					className="d-flex align-items-center justify-content-center"
				>
					<Image src={homeAvatar} alt="Avatar" fluid />
				</Col>
			</Row>

			<Contact />
		</Container>
	);
};

export default Home;
