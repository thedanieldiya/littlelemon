const TestimonialCard = ({ image, name, stars, date, testimony }) => {
	const renderStars = () => {
		const totalStars = 5; // Maximum number of stars
		const starElements = [];

		for (let i = 1; i <= totalStars; i++) {
			starElements.push(
				<svg
					key={i}
					xmlns="http://www.w3.org/2000/svg"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					className={`star ${i <= stars ? "filled" : "empty"}`}
				>
					<path
						fill={i <= stars ? "var(--green)" : "var(--s-grey)"}
						d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
					></path>
				</svg>
			);
		}
		return starElements;
	};

	return (
		<article className="testimonial__card">
			<div className="testimonial__header">
				<div className="testifier">
					<img src={image} alt={name} />
					<p className="card__title">{name}</p>
				</div>
				<div className="testifier__details">
					<span className="testifier__ratings">
						{renderStars()} {/* Render the stars based on the rating */}
					</span>
					<p className="paragraph__text">{date}</p>
				</div>
			</div>
			<p className="paragraph__text">{testimony}</p>
		</article>
	);
};

export default TestimonialCard;
