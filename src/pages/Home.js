import homeMain from "../assets/home-main.svg";

const Home = () => {
	return (
		<div className="home">
			<div className="home__content">
				<h1 className="home__heading">
					Hi There! <span className="home__wave">👋🏻</span>
				</h1>

				<h1 className="home__heading">
					I'm <span className="home__name">Austin Wang</span>
				</h1>

				<p className="home__description">
					MERN Stack Developer
					<br />
					Open Source Contributor
				</p>
			</div>

			<div className="home__img">
				<img src={homeMain} alt="Coder is programming" />
			</div>
		</div>
	);
};

export default Home;
