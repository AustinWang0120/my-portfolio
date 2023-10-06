import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />

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
