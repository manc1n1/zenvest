import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
	return (
		<div className="card bg-white card-rounded w-50">
			<nav>
			<Navbar/>
			</nav>
			<div className="card-header bg-dark text-center">
				<h1>ZenVest</h1>
			</div>
		</div>
	);
};

export default Home;
