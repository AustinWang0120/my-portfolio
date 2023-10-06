import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/resume" component={Resume} />
			</div>
		</Router>
	);
};

export default App;
