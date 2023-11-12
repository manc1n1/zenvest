import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Pillars from '../components/Pillars';

// Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
	return (
		<section className="w-full max-w-xs p-5 sm:p-0 mx-auto">
			<div className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
				<div className="text-white text-opacity-60 font-bold">
					<div className="card-header text-center">
						<Mission />
					</div>
					<div className="card-header text-center">
						<Pillars />
					</div>
					<div className="card-header text-center">
						<Team />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
