import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Pillars from '../components/Pillars';

// Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
	return (
		<div>
			<nav className="card bg-slate-500 card-rounded w-50">
				<Navbar />
			</nav>
			<div className="card-header text-center">
				<Mission/>
			</div>
			<div className="card-header text-center">
				<Pillars/>
			</div>
			<div className="card-header text-center">
				<Team/>
			</div>
		</div>
	);
};

export default Home;
