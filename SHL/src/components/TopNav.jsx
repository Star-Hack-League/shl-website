import React, { useState } from "react";

const TopNav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="navbarContainer">
			<h1 className="title">Star Hack Alliance</h1>
			<button className="hamburger" onClick={toggleMenu}>
				☰
			</button>
			{menuOpen && (
				<div className="mobile-menu">
					<a href="./" className="no-underline">
						Home
					</a>
				</div>
			)}
		</div>
	);
};

export default TopNav;
