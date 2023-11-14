import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Title from '../components/Title';
import Pillars from '../components/Pillars';

// Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
	return (
		<section className="w-full max-w-xl p-5 sm:p-0 mx-auto text-black text-opacity-60">
			<Title />
			<Mission />
			<Pillars />
			<Team />
		</section>
	);
};

export default Home;
