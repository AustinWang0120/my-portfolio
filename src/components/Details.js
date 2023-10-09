import { Col, Row, Image } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import aboutMain from "../assets/about-main.png";

const Details = () => {
	return (
		<Row className="details">
			<Col md={6} className="details__text">
				<h1 className="heading">
					Know Who <span className="purple-text">I'm</span>
				</h1>
				<p className="paragraph">
					Hi Everyone, I am <span className="purple-text">Austin Wang</span>,
					graduated from <span className="purple-text">Boston University</span>.
				</p>
				<p className="paragraph">
					Eius natus hic quidem, odit perferendis dicta corporis consectetur
					aliquam ipsum consequuntur accusamus maxime vero, exercitationem
					debitis voluptatibus, dolores non minus recusandae.
				</p>
				<p className="paragraph">Apart from coding, I love to do</p>
				<ul className="details__list">
					<li className="details__item">
						<ImPointRight className="details__icon" />
						Basketball & Workout
					</li>
					<li className="details__item">
						<ImPointRight className="details__icon" />
						Magic Tricks
					</li>
					<li className="details__item">
						<ImPointRight className="details__icon" />
						Reading
					</li>
				</ul>
			</Col>

			<Col md={6}>
				<Image
					src={aboutMain}
					alt="About page image"
					fluid
					className="details__img"
				/>
			</Col>
		</Row>
	);
};

export default Details;
