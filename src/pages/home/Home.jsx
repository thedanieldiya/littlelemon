import React from "react";
import "./home.css";
import Hero from "./hero/Hero";
import Specials from "./specials/Specials";
import Testimonials from "./testimonials/Testimonials";
import WhoWeAre from "./whoweare/WhoWeAre";

const Home = () => {
	return (
		<>
			<Hero />
			<Specials />
			<Testimonials />
			<WhoWeAre />
		</>
	);
};

export default Home;
