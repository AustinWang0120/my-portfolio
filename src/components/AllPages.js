import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AllPages = ({ resumePdf }) => {
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
			{Array.from(new Array(numPages), (el, index) => (
				<Row>
					<Col>
						<Page
							key={`page_${index + 1}`}
							renderTextLayer={false}
							renderAnnotationLayer={false}
							customTextRenderer={false}
							pageNumber={index + 1}
						/>
					</Col>
				</Row>
			))}
		</Document>
	);
};

export default AllPages;
