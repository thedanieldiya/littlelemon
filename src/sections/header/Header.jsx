import { useState } from "react";
import { Logo } from "../../assets";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="shadow">
			<div className="header">
				<Link to="/">
					<img src={Logo} alt="Little Lemon Logo" />
				</Link>

				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/">About</NavLink>
						</li>
						<li>
							<NavLink to="/reservation">Order Online</NavLink>
						</li>
						<li>
							<NavLink to="/reservation">Reservation</NavLink>
						</li>
						<li>
							<NavLink to="/">Menu</NavLink>
						</li>
						<li>
							<NavLink to="/">Login</NavLink>
						</li>
					</ul>
					{isMenuOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							viewBox="0 0 24 24"
							onClick={() => setIsMenuOpen(false)}
						>
							<path
								fill="#495e57"
								d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
							></path>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							viewBox="0 0 24 24"
							onClick={() => setIsMenuOpen(true)}
						>
							<path
								fill="#495e57"
								d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
							></path>
						</svg>
					)}
					{isMenuOpen && (
						<>
							<div className="menu shadow">
								<ul>
									<li>
										<NavLink to="/" onClick={() => setIsMenuOpen(false)}>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to="/" onClick={() => setIsMenuOpen(false)}>
											About
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/reservation"
											onClick={() => setIsMenuOpen(false)}
										>
											Order Online
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/reservation"
											onClick={() => setIsMenuOpen(false)}
										>
											Reservation
										</NavLink>
									</li>
									<li>
										<NavLink to="/" onClick={() => setIsMenuOpen(false)}>
											Menu
										</NavLink>
									</li>
									<li>
										<NavLink to="/" onClick={() => setIsMenuOpen(false)}>
											Login
										</NavLink>
									</li>
								</ul>
							</div>
							<div className="overlay" onClick={() => setIsMenuOpen(false)} />
						</>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
