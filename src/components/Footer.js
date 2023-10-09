import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<Container>
			<Row className="footer">
				<Col md={4} className="footer__credits">
					<p className="paragraph">
						Designed by <span className="purple-text">Soumyajit Behera</span>
					</p>
					<p className="paragraph">
						Developed by <span className="purple-text">Austin Wang</span>
					</p>
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
