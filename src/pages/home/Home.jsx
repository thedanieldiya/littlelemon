import React from "react";
import "./home.css";
import Hero from "./hero/Hero";
import Specials from "./specials/Specials";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
	return (
		<>
			<Hero />
			<Specials />
			<Testimonials />
		</>
	);
};

export default Home;
