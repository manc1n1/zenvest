import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAllMatchups } from '../utils/api';

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
			<div className="card-body m-5">
				<h2>Here is a list of matchups you can vote on:</h2>
				<ul className="square">
					{matchupList.map((matchup) => {
						return (
							<li key={matchup._id}>
								<Link
									to={{ pathname: `/matchup/${matchup._id}` }}
								>
									{matchup.tech1} vs. {matchup.tech2}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="card-footer text-center m-3">
				<h2>Ready to create a new matchup?</h2>
				<Link to="/matchup">
					<button className="btn btn-lg btn-danger">
						Create Matchup!
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
