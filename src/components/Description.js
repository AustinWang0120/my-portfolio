import { Row, Col, Image } from "react-bootstrap";
import homeAvatar from "../assets/home-avatar.svg";

const Description = () => {
	return (
		<Row className="description">
			<Col md={8} className="description__text">
				<h1 className="heading">
					Let Me <span className="purple-text">Introduce</span> Myself
				</h1>
				<p className="paragraph">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</p>
				<p className="paragraph">
					Vitae quo ducimus nisi itaque aliquid, labore modi delectus possimus
					exercitationem ea aliquam hic ut.
				</p>
				<p className="paragraph">
					Distinctio quisquam velit necessitatibus excepturi tempore autem.
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
