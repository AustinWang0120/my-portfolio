import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const Layout = ({ children }) => {
	return (
		<div className="app">
			<Navigation />

			<div className="app__content">{children}</div>

			<Footer />
		</div>
	);
};

export default Layout;
