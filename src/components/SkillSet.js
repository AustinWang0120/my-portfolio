import { Row, Col } from "react-bootstrap";
import {
	BiLogoHtml5,
	BiLogoCss3,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoRedux,
	BiLogoAngular,
	BiLogoVuejs,
	BiLogoBootstrap,
	BiLogoSass,
	BiLogoNodejs,
	BiLogoFlask,
	BiLogoDjango,
	BiLogoMongodb,
	BiLogoFirebase,
	BiLogoPostgresql,
	BiLogoAws,
	BiLogoPython,
	BiLogoJava,
} from "react-icons/bi";

const SkillSet = () => {
	return (
		<Row className="techstack">
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoHtml5 />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoCss3 />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoJavascript />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoReact />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoRedux />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoAngular />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoVuejs />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoBootstrap />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoSass />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoNodejs />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoFlask />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoDjango />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoMongodb />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoFirebase />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoPostgresql />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoAws />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoPython />
			</Col>
			<Col xs={4} md={2} className="techstack__icon">
				<BiLogoJava />
			</Col>
		</Row>
	);
};

export default SkillSet;
