import { Col, Container, Row } from "react-bootstrap";
import homeMain from "../../assets/home-main.svg";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<Container>
				<Row className="align-items-center">
					<Col md={7}>
						<h1 className="home__heading">
							Hi There! <span className="home__wave">👋🏻</span>
						</h1>

						<h1 className="home__heading">
							I'm <span className="home__name">Austin Wang</span>
						</h1>

						<p className="home_roles">
							MERN Stack Developer
							<br />
							Open Source Contributor
						</p>
					</Col>

					<Col md={5}>
						<img
							src={homeMain}
							alt="Coder is programming"
							className="home__img"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
