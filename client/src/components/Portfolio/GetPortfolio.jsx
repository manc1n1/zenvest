import { useState, useEffect } from 'react';
import { useLoginContext } from '../../utils/LoginContext';
import { getPortfolio } from '../../utils/api';
import Card from './Card';

function GetPortfolio() {
	const { login } = useLoginContext();
	const portfolios = login.portfolio;
	const [portfolioArr, setPortfolioArr] = useState([]);

	async function fetchData() {
		const updatedPortfolioArr = [];
		for (let i = 0; i < portfolios.length; i++) {
			const portfolioId = portfolios[i];
			const portfolioData = await getPortfolio(portfolioId);
			updatedPortfolioArr.push(portfolioData);
		}
		setPortfolioArr(updatedPortfolioArr);
	}

	// console.log(portfolioArr);

	const renderCard = (portfolio) => {
		return Card(
			portfolio.name,
			portfolio.type,
			portfolio._id,
			portfolio._id,
		);
	};

	useEffect(() => {
		fetchData();
	}, [portfolios]);

	return (
		<section className="w-full max-w-xl mx-auto">
			<div className="grid grid-cols-3 max-w-sm bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg pb-8 mb-4 shadow-2xl mx-auto">
				{portfolioArr.map((portfolio) => renderCard(portfolio))}
			</div>
		</section>
	);
}

export default GetPortfolio;
