import { Col, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
	return (
		<Row className="contact">
			<Col className="contact__column">
				<h1 className="heading">
					<span className="purple-text">Find</span> Me On
				</h1>

				<div className="contact__icons">
					<a
						href="https://github.com/AustinWang0120"
						target="_blank"
						rel="noopener noreferrer"
						className="contact__icon"
					>
						<AiFillGithub size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/austinwang0120/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact__icon"
					>
						<AiFillLinkedin size={20} />
					</a>
					<a href="mailto:yyaustin@bu.edu" className="contact__icon">
						<AiFillMail size={20} />
					</a>
				</div>
			</Col>
		</Row>
	);
};

export default Contact;
