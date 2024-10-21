import React from "react";
import "./hero.css";
import { Platter } from "../../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero">
			<section className="section">
				<div className="hero__text">
					<h1 className="display">Little Lemon</h1>
					<h2 className="sub__title">Chicago</h2>
					<p className="paragraph__text">
						Experience culinary bliss at Little Lemon, where taste meets
						artistry. Immerse yourself in a world of exquisite flavors,
						carefully crafted from the finest ingredients.
					</p>
					<Link to="/reservation#reserveATable">
						<button className="button__large button shadow">
							Reserve a table
						</button>
					</Link>
				</div>
				<div className="hero__image">
					<img src={Platter} alt="Chef holding up a platter of food." />
				</div>
			</section>
		</div>
	);
};

export default Hero;
