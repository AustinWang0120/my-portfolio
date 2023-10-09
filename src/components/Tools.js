import { Row, Col } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiIntellijidea,
	SiGithub,
	SiPostman,
	SiDocker,
} from "react-icons/si";

const Tools = () => {
	return (
		<Row className="techstack">
			<Col xs={4} md={2} className="techstack__icon">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<SiIntellijidea />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<SiGithub />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<SiDocker />
			</Col>
		</Row>
	);
};

export default Tools;
