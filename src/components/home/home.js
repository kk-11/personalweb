import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<main>
			<Link to="/">Home </Link>
			<Link to="/about">About Us </Link>
			<Link to="/shop">Shop Now </Link>
		</main>
	);
}
