import { Link } from "react-router-dom";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineProject,
	AiOutlineFileText,
} from "react-icons/ai";
import logo from "../assets/logo.png";

const Navigation = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__items">
				<li className="navbar__item">
					<Link to="/" className="navbar__link">
						<img src={logo} alt="Logo" className="navbar__logo" />
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/" className="navbar__link">
						<AiOutlineHome /> Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/about" className="navbar__link">
						<AiOutlineUser /> About
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/projects" className="navbar__link">
						<AiOutlineProject /> Projects
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/resume" className="navbar__link">
						<AiOutlineFileText /> Resume
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
