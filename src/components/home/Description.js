import { Row, Col, Image } from "react-bootstrap";
import homeAvatar from "../../assets/home-avatar.svg";

const Description = () => {
	return (
		<Row className="description">
			<Col md={8} className="description__text">
				<h1 className="heading">
					Let Me <span className="purple-text">Introduce</span> Myself
				</h1>
				<p className="paragraph">
					<span className="purple-text">Over 3 years</span> of experience in{" "}
					<span className="purple-text">JavaScript Full Stack Development</span>
					.
				</p>
				<p className="paragraph">
					Fuelled by <span className="purple-text">passion and creativity</span>
					, I thrive on <span className="purple-text">crafting solutions</span>{" "}
					that <span className="purple-text">empower and uplift</span>.
				</p>
				<p className="paragraph">
					For me, every line of code is a step closer to{" "}
					<span className="purple-text">making an impact</span> and{" "}
					<span className="purple-text">easing someone's journey</span>.
				</p>
				<p className="paragraph">
					In every project, I see an{" "}
					<span className="purple-text">opportunity</span>, not just to{" "}
					<span className="purple-text">innovate</span>, but to{" "}
					<span className="purple-text">inspire and ignite change</span>.
				</p>
			</Col>

			<Col md={4} className="description__img-col">
				<Image
					src={homeAvatar}
					alt="Avatar"
					fluid
					className="description__img"
				/>
			</Col>
		</Row>
	);
};

export default Description;
