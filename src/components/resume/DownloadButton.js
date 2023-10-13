import { Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ file, filename, text }) => {
	return (
		<Row>
			<Col className="text-center">
				<Button
					variant="primary"
					href={file}
					download={filename}
					className="download-button"
				>
					<AiOutlineDownload />
					{text}
				</Button>
			</Col>
		</Row>
	);
};

export default DownloadButton;
