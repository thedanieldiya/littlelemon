import React from "react";
import "./reservationHero.css";
import {
	Bruschetta,
	GreekSalad,
	LemonDessert,
	Nachos,
	Restaurant,
} from "../../../assets";

const ReservationHero = () => {
	return (
		<div className="rHero">
			<section className="section">
				<div className="rHero__image">
					<div className="rHero__image-single">
						<img src={Restaurant} alt="Restaurant sitting area" />
					</div>
					<div className="rHero__image-multiple">
						<img src={Bruschetta} alt="" />
						<img src={Nachos} alt="" />
						<img src={GreekSalad} alt="" />
						<img src={LemonDessert} alt="" />
					</div>
				</div>
				<div className="rHero__text">
					<h1 className="display">Reserve a table</h1>
					<p className="paragraph__text">
						Secure Your Spot at Little Lemon: Experience Unforgettable Flavors
						in a Welcoming Environment, Fully Accessible for All Guests,
						Including Those with Special Needs!
					</p>
				</div>
			</section>
		</div>
	);
};

export default ReservationHero;
