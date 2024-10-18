import React from "react";
import "./footer.css";
import { LogoVer } from "../../assets";

const Footer = () => {
	return (
		<footer>
			<img src={LogoVer} alt="Little Lemon Vertical Logo" />
			<div className="footer__texts">
				<section className="">
					<h2 className="">Navigation</h2>
					<nav>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/reservation">Order Online</a>
							</li>
							<li>
								<a href="/reservation">Reservation</a>
							</li>
							<li>
								<a href="/">Menu</a>
							</li>
							<li>
								<a href="/">Login</a>
							</li>
						</ul>
					</nav>
				</section>
				<section className="">
					<h2 className="">Contact</h2>
					<ul>
						<li>Address goes here</li>
						<li>
							<a href="tel:+15555555555">+1 (555) 555-5555</a>
						</li>
						<li>
							<a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
						</li>
					</ul>
				</section>
				<section className="">
					<h2 className="">Navigation</h2>
					<ul>
						<li>
							<a href="https://www.instagram.com/littlelemon">Instagram</a>
						</li>
						<li>
							<a href="https://www.facebook.com/littlelemon">Facebook</a>
						</li>
						<li>
							<a href="https://www.x.com/littlelemon">X</a>
						</li>
					</ul>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
