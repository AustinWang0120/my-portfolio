import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<Container>
			<Row className="footer">
				<Col md={4} className="footer__credits">
					<p className="paragraph">Designed by Soumyajit Behera</p>
					<p className="paragraph">Developed by Austin Wang</p>
				</Col>

				<Col md={4} className="footer__copyright">
					<p className="paragraph">Copyright &copy; 2023 AW</p>
				</Col>

				<Col md={4} className="footer__icons">
					<AiFillGithub size={40} className="footer__icon" />
					<AiFillLinkedin size={40} className="footer__icon" />
					<AiFillMail size={40} className="footer__icon" />
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
