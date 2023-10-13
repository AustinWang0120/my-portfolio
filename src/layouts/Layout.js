import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const Layout = ({ children }) => {
	return (
		<div className="app">
			<Navigation />

			{children}

			<Footer />
		</div>
	);
};

export default Layout;
