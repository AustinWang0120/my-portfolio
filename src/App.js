import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Navigation from "./components/Navbar/Navbar";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navigation />

				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="resume" element={<Resume />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
