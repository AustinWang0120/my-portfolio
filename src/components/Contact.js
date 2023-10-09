import { Col, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
	return (
		<Row className="contact">
			<Col className="contact__column">
				<h1 className="heading">Feel Free to Connect With Me</h1>

				<div className="contact__icons">
					<AiFillGithub size={80} className="contact__icon" />
					<AiFillLinkedin size={80} className="contact__icon" />
					<AiFillMail size={80} className="contact__icon" />
				</div>
			</Col>
		</Row>
	);
};

export default Contact;
