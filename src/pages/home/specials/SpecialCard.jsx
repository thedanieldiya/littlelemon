import "./specials.css";

const SpecialCard = ({ image, name, about, price }) => {
	return (
		<article className="specials__card">
			<div className="specials__card-image">
				<img src={image} alt={name} />
			</div>
			<div className="specials__card-body">
				<h3 className="card__title">{name}</h3>
				<p className="paragraph__text">{about}</p>
				<div className="specials__card-body__pricing">
					<span className="highlight__text">${price}</span>
					<button className="button button__small ">Add to cart</button>
				</div>
			</div>
		</article>
	);
};

export default SpecialCard;
