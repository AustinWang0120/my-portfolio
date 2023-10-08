import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineProject,
	AiOutlineFileText,
} from "react-icons/ai";
import logo from "../assets/logo.png";

const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg" className="navbar px-5">
			<Navbar.Brand as={Link} to="/">
				<Image src={logo} alt="Logo" fluid />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="navbar__items ms-auto">
					<Nav.Link as={Link} to="/" className="navbar__item">
						<AiOutlineHome /> Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="navbar__item">
						<AiOutlineUser /> About
					</Nav.Link>
					<Nav.Link as={Link} to="/projects" className="navbar__item">
						<AiOutlineProject /> Projects
					</Nav.Link>
					<Nav.Link as={Link} to="/resume" className="navbar__item">
						<AiOutlineFileText /> Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
