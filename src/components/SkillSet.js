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
	BiLogoDocker,
	BiLogoPython,
	BiLogoJava,
} from "react-icons/bi";

const SkillSet = () => {
	return (
		<Row className="skillset">
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoHtml5 />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoCss3 />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoJavascript />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoReact />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoRedux />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoAngular />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoVuejs />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoBootstrap />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoSass />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoNodejs />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoFlask />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoDjango />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoMongodb />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoFirebase />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoPostgresql />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoAws />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoDocker />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoPython />
			</Col>
			<Col xs={4} md={2} className="skillset__icon">
				<BiLogoJava />
			</Col>
		</Row>
	);
};

export default SkillSet;
