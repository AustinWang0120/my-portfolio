import { Col, Row, Image } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import aboutMain from "../../assets/about-main.png";

const Details = () => {
	return (
		<Row className="details">
			<Col md={6} className="details__text">
				<h1 className="heading">
					Know Who <span className="purple-text">I'm</span>
				</h1>
				<p className="paragraph">
					Hi Everyone, I am <span className="purple-text">Austin Wang</span>{" "}
					from <span className="purple-text">Guangzhou, China</span>.
				</p>
				<p className="paragraph">
					I'm a proud graduate from{" "}
					<span className="purple-text">Boston University</span> with a
					bachelor's degree in Computer Science, specializing in{" "}
					<span className="purple-text">
						full-stack web application development
					</span>
					.
				</p>
				<p className="paragraph">
					Passionately exploring <span className="purple-text">AI tools</span>,
					I aim to be at the forefront, maximizing their potential to{" "}
					<span className="purple-text">enhance my work</span>.
				</p>
				<p className="paragraph">Apart from coding, I love to do</p>
				<ul className="details__list">
					<li className="paragraph details__item">
						<ImPointRight className="details__icon" />
						Basketball & Workout
					</li>
					<li className="paragraph details__item">
						<ImPointRight className="details__icon" />
						Reading Books & News
					</li>
					<li className="paragraph details__item">
						<ImPointRight className="details__icon" />
						Learning Magic Tricks
					</li>
					<li className="paragraph details__item">
						<ImPointRight className="details__icon" />
						Making New Friends
					</li>
				</ul>
			</Col>

			<Col md={6} className="details__img">
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
