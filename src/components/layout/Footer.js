import { Col, Container, Row } from "react-bootstrap";
import {
	AiFillPhone,
	AiFillGithub,
	AiFillLinkedin,
	AiFillMail,
} from "react-icons/ai";

const Footer = () => {
	return (
		<Container fluid>
			<Row className="footer">
				<Col md={4} className="footer__credits">
					<p className="paragraph">
						Developed by <span className="purple-text">Austin Wang</span>
					</p>
					<p className="paragraph">
						Designed by <span className="purple-text">Soumyajit Behera</span>
					</p>
				</Col>

				<Col md={4} className="footer__copyright">
					<p className="paragraph">Copyright &copy; 2023 AW</p>
				</Col>

				<Col md={4} className="footer__icons">
					<a
						href="https://www.linkedin.com/in/austin-wang-aaa5b3295/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__icon"
					>
						<AiFillLinkedin size={20} />
					</a>

					<a href="mailto:austinwang577@gmail.com" className="footer__icon">
						<AiFillMail size={20} />
					</a>

					<a
						href="tel:+16892585152"
						className="footer__icon footer__icon--phone"
					>
						<AiFillPhone size={20} />
						<span className="footer__phone-number">+1 689-258-5152</span>
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
