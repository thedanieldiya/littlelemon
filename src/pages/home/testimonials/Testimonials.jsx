import React from "react";
import "./testimonials.css";
import { testimonies } from "./testimonies";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
	return (
		<div className="testimonials">
			<section className="section">
				<h2 className="sub__title">Testimonials</h2>
				<div className="special__meals">
					{testimonies.map(({ name, testimony, image, stars, date }) => (
						<TestimonialCard
							key={name}
							name={name}
							testimony={testimony}
							image={image}
							stars={stars}
							date={date}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Testimonials;
