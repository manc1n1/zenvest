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
		<div className="grid grid-cols-2 gap-4">
			{portfolioArr.map((portfolio) => renderCard(portfolio))}
		</div>
	);
}

export default GetPortfolio;
