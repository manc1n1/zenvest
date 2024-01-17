import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';
import CreatePortfolio from '../components/Portfolio/CreatePortfolio';
import InvestmentList from '../components/Dashboard/InvestmentList';
import GetPortfolio from '../components/Portfolio/GetPortfolio';
import CreateInvestment from '../components/Investment/CreateInvestment';

const Dashboard = () => {
	const { login } = useLoginContext();

	const navigate = useNavigate();

	const username = login.username;
	const firstLetterCap = username.charAt(0).toUpperCase();
	const remainingLetters = username.slice(1);
	const capUsername = firstLetterCap + remainingLetters;

	useEffect(() => {
		if (!login.loggedIn) {
			navigate('/login');
		}
	}, [login, navigate]);

	return (
		<section className="w-full mx-auto">
			<div className="max-w-xs bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4 shadow-lg text-xl sm:text-2xl mx-auto text-center">
				<h1 className="font-bold text-opacity-60">
					{capUsername}'s
				</h1>
				<h1 className="font-bold text-opacity-60">
					Dashboard
				</h1>
			</div>
			<CreatePortfolio />
			{login.portfolio.length > 0 && <GetPortfolio />}
			{/* <InvestmentList />
			<CreateInvestment /> */}
		</section>
	);
};

export default Dashboard;
