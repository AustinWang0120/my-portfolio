import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="experience" element={<Experience />} />
					<Route path="resume" element={<Resume />} />
				</Routes>
			</Router>
			<Analytics />
		</div>
	);
};

export default App;
