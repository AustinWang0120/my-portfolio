import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineProject,
	AiOutlineFileText,
} from "react-icons/ai";
import "./Navbar.scss";

const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg" className="navbar">
			<Navbar.Brand as={Link} to="/">
				Austin Wang
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link as={Link} to="/">
						<AiOutlineHome /> Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						<AiOutlineUser /> About
					</Nav.Link>
					<Nav.Link as={Link} to="/projects">
						<AiOutlineProject /> Projects
					</Nav.Link>
					<Nav.Link as={Link} to="/resume">
						<AiOutlineFileText /> Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
