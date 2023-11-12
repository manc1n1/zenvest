//import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';
import Portfolio from '../components/Portfolio';

const Dashboard = () => {
	const { login } = useLoginContext();
	const navigate = useNavigate();

	// Redirect to the login page if the user is not logged in
	if (!login.loggedIn) {
		navigate('/login');
		return null;
	}
	console.log('Dashboard loaded successfully');

	return (
		<div>
			<div className="card bg-slate-500 card-rounded w-50"></div>
			<div>
				<div className="card-header bg-dark text-center">
					<h1 className="text-2xl text-pink-950">Welcome User!</h1>
				</div>
				<Portfolio />
			</div>
		</div>
	);
};

export default Dashboard;
