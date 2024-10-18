import React from "react";
import { Logo } from "../../assets";

const Header = () => {
	return (
		<header>
			<img src={Logo} alt="Little Lemon Logo" />
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
		</header>
	);
};

export default Header;
