import { Col, Container, Row } from "react-bootstrap";
import homeMain from "../../assets/home-main.svg";

const Home = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col md={7}>
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

					<Col md={5}>
						<img
							src={homeMain}
							alt="Coder is programming"
							style={{ maxHeight: "450px" }}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
