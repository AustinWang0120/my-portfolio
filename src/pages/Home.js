import homeMain from "../assets/home-main.svg";
import homeAvatar from "../assets/avatar.svg";

const Home = () => {
	return (
		<div className="home">
			<div className="home__introduction">
				<h1 className="home__heading">
					Hi There! <span className="home__wave">👋🏻</span>
				</h1>

				<h1 className="home__heading">
					I'm <span className="home__name">Austin Wang</span>
				</h1>

				<p className="home__roles">
					MERN Stack Developer
					<br />
					Open Source Contributor
				</p>
			</div>

			<div className="home__img">
				<img src={homeMain} alt="Home main" />
			</div>

			<div className="home__description">
				<h1 className="home__heading">Let Me Introduce Myself</h1>
				<p className="home__paragraph">
					I fell in love with programming and I have at least learnt something,
					I think… 🤷‍♂️
				</p>
				<p className="home__paragraph">
					My field of interest's are building new web technologies products
				</p>
				<p className="home__paragraph">
					Whenever possible, I also apply my passion for developing products
					with Node.js and Modern Javascript Library and Frameworks like
					React.js and Next.js
				</p>
			</div>

			<div className="home__avatar">
				<img src={homeAvatar} alt="Home avatar" />
			</div>
		</div>
	);
};

export default Home;
