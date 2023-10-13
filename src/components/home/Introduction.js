import { Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import homeMain from "../../assets/home-main.svg";

const Introduction = () => {
	return (
		<Row className="introduction">
			<Col md={6} className="introduction__text">
				<h1 className="heading">
					Hi There! <span className="wave">👋🏻</span>
				</h1>

				<h1 className="heading">
					I'm <span className="purple-text">Austin Wang</span>
				</h1>

				<p className="sub-heading purple-text">
					<Typewriter
						options={{
							strings: [
								"Software Developer",
								"Full Stack Developer",
								"Open Source Contributor",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</p>
			</Col>

			<Col md={6} className="introduction__img-col">
				<Image
					src={homeMain}
					alt="Main page image"
					fluid
					className="introduction__img"
				/>
			</Col>
		</Row>
	);
};

export default Introduction;
