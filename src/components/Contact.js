import { Col, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
	return (
		<Row className="justify-content-center">
			<Col className="d-flex flex-column justify-content-center align-items-center">
				<h1>Feel Free to Connect With Me</h1>

				<div>
					<AiFillGithub />
					<AiFillLinkedin />
					<AiFillMail />
				</div>
			</Col>
		</Row>
	);
};

export default Contact;
