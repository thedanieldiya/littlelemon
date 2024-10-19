import React from "react";
import { Link } from "react-router-dom";
import "./specials.css";
import { meals } from "./specialMeals";
import SpecialCard from "./SpecialCard";

const Specials = () => {
	return (
		<div className="specials">
			<section className="section">
				<div className="specials__header">
					<h2 className="sub__title">Specials</h2>
					<Link to="/menu">
						<button className="button button__large shadow">Online Menu</button>
					</Link>
				</div>
				<div className="special__meals">
					{meals.map(({ image, name, price, about }) => (
						<SpecialCard
							key={name}
							image={image}
							name={name}
							price={price}
							about={about}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Specials;
