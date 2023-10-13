import { Row, Col, Button } from "react-bootstrap";

const DownloadButton = ({ file, filename, text }) => {
	return (
		<Row>
			<Col className="text-center">
				<Button variant="primary" href={file} download={filename}>
					{text}
				</Button>
			</Col>
		</Row>
	);
};

export default DownloadButton;
