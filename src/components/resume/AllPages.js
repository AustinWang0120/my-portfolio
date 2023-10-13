import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import CustomLoading from "../helper/CustomLoading";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AllPages = ({ resumePdf }) => {
	const [numPages, setNumPages] = useState(null);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		console.log(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Document
			file={resumePdf}
			loading={<CustomLoading />}
			onLoadSuccess={onDocumentLoadSuccess}
		>
			{Array.from(new Array(numPages), (el, index) => (
				<Row key={`page_${index + 1}`}>
					<Col>
						<Page
							renderTextLayer={false}
							renderAnnotationLayer={false}
							pageNumber={index + 1}
							scale={windowWidth > 768 ? 1.2 : 0.5}
							className="d-flex justify-content-center"
						/>
					</Col>
				</Row>
			))}
		</Document>
	);
};

export default AllPages;
