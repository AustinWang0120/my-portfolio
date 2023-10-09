import { Row, Col, Image } from "react-bootstrap";
import homeMain from "../assets/home-main.svg";

const Introduction = () => {
	return (
		<Row className="introduction">
			<Col md={6} className="introduction__text">
				<h1 className="heading">
					Hi There! <span className="wave">👋🏻</span>
				</h1>

				<h1 className="heading">
					I'm <span className="name">Austin Wang</span>
				</h1>

				<p className="paragraph">
					MERN Stack Developer
					<br />
					Open Source Contributor
				</p>
			</Col>

			<Col md={6} className="introduction__img-col">
				<Image
					src={homeMain}
					alt="Coder is programming"
					fluid
					className="introduction__img"
				/>
			</Col>
		</Row>
	);
};

export default Introduction;
