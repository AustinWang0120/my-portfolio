import { Container, Row, Col, Button } from "react-bootstrap";
import resumePdf from "../assets/Austin-Wang-SDE-Resume.pdf";
import AllPages from "../components/AllPages";
import DownloadButton from "../components/DownloadButton";
import Layout from "../layouts/Layout";

const Resume = () => {
	return (
		<Layout>
			<Container>
				<DownloadButton
					file={resumePdf}
					filename="Austin-Wang-SDE-Resume.pdf"
					text="Download Resume"
				/>

				<AllPages resumePdf={resumePdf} />

				<DownloadButton
					file={resumePdf}
					filename="Austin-Wang-SDE-Resume.pdf"
					text="Download Resume"
				/>
			</Container>
		</Layout>
	);
};

export default Resume;
