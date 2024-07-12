import React, { useState } from "react";

const TopNav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="navbarContainer">
			<h1 className="title">Star Hack Alliance</h1>
			<div className="navbar-item-container">
				<a href="./" className="no-underline">
					<p className="navbar-items">Home</p>
				</a>
				<a href="./partner" className="no-underline">
					<p className="navbar-items">Partner</p>
				</a>
				<a href="./events" className="no-underline">
					<p className="navbar-items">Events</p>
				</a>
			</div>
			<button className="hamburger" onClick={toggleMenu}>
				☰
			</button>
			{menuOpen && (
				<div className="mobile-menu">
					<a href="./" className="no-underline">
						Home
					</a>
					<a href="./partner" className="no-underline">
						Partner
					</a>
					<a href="./events" className="no-underline">
						Events
					</a>
				</div>
			)}
		</div>
	);
};

export default TopNav;
