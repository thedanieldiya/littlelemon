import React from "react";
import "./whoweare.css";
import { Link } from "react-router-dom";
import { Adrian, Mario } from "../../../assets";

const WhoWeAre = () => {
	return (
		<div className="whoweare">
			<section className="section">
				<h2 className="sub__title">Who We Are</h2>
				<div className="whoweare__body">
					<div className="whoweare__text">
						<h2 className="display">Little Lemon</h2>
						<p className="paragraph__text">
							Based in Chicago, Illinois, Little Lemon is a family-owned
							Mediterranean restaurant, focused on traditional recipes served
							with a modern twist. Our chefs draw inspiration from Italian,
							Greek, and Turkish culture and have an exquisite seasonal menu.
						</p>
						<Link to="/about" className="highlight__text">
							Read more
						</Link>
					</div>
					<div className="whoweare__image">
						<img src={Mario} alt={Mario} className="mario" />
						<img src={Adrian} alt={Adrian} className="adrian" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default WhoWeAre;
