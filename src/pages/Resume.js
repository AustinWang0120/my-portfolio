import { Container } from "react-bootstrap";
import resumePdf from "../assets/Austin-W-Resume.pdf";
import AllPages from "../components/resume/AllPages";
import DownloadButton from "../components/resume/DownloadButton";
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
			</Container>
		</Layout>
	);
};

export default Resume;
