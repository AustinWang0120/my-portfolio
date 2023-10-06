import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineProject,
	AiOutlineFileText,
} from "react-icons/ai";

const Navigation = () => {
	// return (
	// 	<Navbar bg="light" expand="lg" className="navbar">
	// 		<Navbar.Brand as={Link} to="/">
	// 			Austin Wang
	// 		</Navbar.Brand>
	// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
	// 		<Navbar.Collapse id="basic-navbar-nav">
	// 			<Nav className="ms-auto">
	// 				<Nav.Link as={Link} to="/">
	// 					<AiOutlineHome /> Home
	// 				</Nav.Link>
	// 				<Nav.Link as={Link} to="/about">
	// 					<AiOutlineUser /> About
	// 				</Nav.Link>
	// 				<Nav.Link as={Link} to="/projects">
	// 					<AiOutlineProject /> Projects
	// 				</Nav.Link>
	// 				<Nav.Link as={Link} to="/resume">
	// 					<AiOutlineFileText /> Resume
	// 				</Nav.Link>
	// 			</Nav>
	// 		</Navbar.Collapse>
	// 	</Navbar>
	// );

	return (
		<nav className="navbar">
			<ul className="navbar__items">
				<li className="navbar__logo">
					<Link to="/" className="navbar__logo" id="logo">
						Austin Wang
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/" className="navbar__link" id="home-page">
						<AiOutlineHome /> Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/about" className="navbar__link" id="about-page">
						<AiOutlineUser /> About
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/projects" className="navbar__link" id="projects-page">
						<AiOutlineProject /> Projects
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/resume" className="navbar__link" id="resume-page">
						<AiOutlineFileText /> Resume
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
