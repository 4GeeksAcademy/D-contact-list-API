import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3">
	
		<p>Thanks for checking me out!</p>
			<div className="ml-auto">
				<Link to="/newContact">
					<button className="btn btn-dark">Add a new contact</button>
				</Link>
			</div>
		</nav>
	);
};
