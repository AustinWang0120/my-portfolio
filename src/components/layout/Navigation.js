import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineProject,
	AiOutlineFileText,
} from "react-icons/ai";
import logo from "../../assets/logo.png";

const Navigation = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 40) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Navbar
			bg="light"
			expand="lg"
			className={`nav ${isSticky ? "nav--sticky" : ""}`}
		>
			<Navbar.Brand as={Link} to="/" className="nav__brand">
				<Image src={logo} alt="Logo" fluid className="nav__logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="nav_links">
				<Nav className="nav__items">
					<Nav.Link as={Link} to="/" className="nav__item">
						<AiOutlineHome /> Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="nav__item">
						<AiOutlineUser /> About
					</Nav.Link>
					<Nav.Link as={Link} to="/experience" className="nav__item">
						<AiOutlineProject /> Experience
					</Nav.Link>
					<Nav.Link as={Link} to="/resume" className="nav__item">
						<AiOutlineFileText /> Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
