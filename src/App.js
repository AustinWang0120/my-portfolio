import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="resume" element={<Resume />} />
			</Routes>
		</Router>
	);
};

export default App;
