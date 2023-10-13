import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<Container fluid>
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
					<a
						href="https://github.com/AustinWang0120"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__icon"
					>
						<AiFillGithub size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/austinwang0120/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__icon"
					>
						<AiFillLinkedin size={20} />
					</a>
					<a href="mailto:yyaustin@bu.edu" className="footer__icon">
						<AiFillMail size={20} />
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
