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
			<div className="navbar__container">
				<Link to="/" className="navbar__logo">
					Austin Wang
				</Link>

				<div className="navbar__toggle" id="mobile-menu">
					<span className="bar"></span> <span className="bar"></span>
					<span className="bar"></span>
				</div>

				<ul className="navbar__menu">
					<li className="navbar__item">
						<Link to="/" className="navbar__links" id="home-page">
							<AiOutlineHome /> Home
						</Link>
					</li>
					<li className="navbar__item">
						<Link to="/about" className="navbar__links" id="about-page">
							<AiOutlineUser /> About
						</Link>
					</li>
					<li className="navbar__item">
						<Link to="/projects" className="navbar__links" id="projects-page">
							<AiOutlineProject /> Projects
						</Link>
					</li>
					<li className="navbar__btn">
						<Link to="/resume" className="button" id="resume-page">
							<AiOutlineFileText /> Resume
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
