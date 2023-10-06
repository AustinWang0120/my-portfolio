import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">
				Austin Wang
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/projects">
						Projects
					</Nav.Link>
					<Nav.Link as={Link} to="/resume">
						Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
